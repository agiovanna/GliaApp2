import { View, TouchableOpacity, StyleSheet, Modal, Text, TextInput, Pressable, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { createCatalog } from '../../../../api/createCatalog/createCatalog'
import { readCatalog } from '../../../../api/readCatalog/readCatalog';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../../../../@types/navigation';
import { useNavigation } from '@react-navigation/native';

//style
import { AddCatalog, BoxCatalog, BoxItem, ButtonClose, CatalogContainer, CatalogDesc, CatalogTitle, CenteredView, Content, ImgItem, InputCatalog, ModalText, ModalView, TextStyle } from './style';

interface catalog {
    tb_catalogo_nome: string;
    tb_catalogo_desc: string;
    tb_catalogo_id: number;
    itens: {
        tb_item_img: string;
        tb_item_nome: string;
        tb_item_desc: string;
        tb_item_tempo: number;
        tb_item_valor: number;
    }[];
}

type authScreenProp = StackNavigationProp<RootParamList, 'Catalog'>;

export function Catalog() {

    const navigation = useNavigation<authScreenProp>();

    const [itemsRefreshing, setItemsRefreshing] = useState(false);


    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [describe, setDescribe] = useState('');
    const professional_id = 1;

    const [catalogs, setCatalogs] = useState<catalog[]>([]);

    //select catálogo
    const refreshItems = async () => {
        try {
            setItemsRefreshing(true);
            const data = await readCatalog();
            setCatalogs(data);
        } catch (error) {
            console.error('Erro ao carregar itens:', error);
        } finally {
            setItemsRefreshing(false);
        }
    };

    //atualizar select, por minuto
    useEffect(() => {
        const loadItems = async () => {
            await refreshItems();
        };

        loadItems();

        const intervalId = setInterval(refreshItems, 6000);

        return () => clearInterval(intervalId);
    }, []);

    //convertendo minutos para hora
    function formatTime(minutes: number): string {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        return `${hours}:${remainingMinutes}`;
    }

    //novo catálogo
    async function newCatalog() {

        try {
            await createCatalog(
                name,
                describe,
            );

            console.log(
                'Nome: ' + name,
                'Descrição: ' + describe,
            );


            setModalVisible(!modalVisible);
            await refreshItems();

            Alert.alert('cadastrado');


        } catch (error) {
            console.log('Erro:' + error);
        }

    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            {/* new catalog */}
            <AddCatalog>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Ionicons name="add-circle-sharp" size={60} color="gray" />
                </TouchableOpacity>
            </AddCatalog>

            {/* catalog and itens  */}
            <BoxCatalog>
                <Content>
                    {catalogs.map((catalog, index) => (
                        <CatalogContainer key={catalog.tb_catalogo_id}>
                            <CatalogTitle>{catalog.tb_catalogo_nome}</CatalogTitle>
                            <CatalogDesc>{catalog.tb_catalogo_desc}</CatalogDesc>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                                {catalog.itens.map((item, itemIndex) => (
                                    <BoxItem>
                                        <ImgItem source={{ uri: item.tb_item_img }} />

                                        <CatalogTitle> {item.tb_item_nome}</CatalogTitle>
                                        <Text> {item.tb_item_desc}</Text>
                                        <Text>{item.tb_item_valor},00 </Text>
                                        <Text>{formatTime(item.tb_item_tempo)}</Text>
                                    </BoxItem>
                                ))}
                            </ScrollView>

                            {/* new item */}
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('AddItem', { catalog_id: catalog.tb_catalogo_id });
                                }} >

                                <Ionicons name="add-circle-sharp" size={60} color="gray" />

                            </TouchableOpacity>
                        </CatalogContainer>
                    ))}

                    {/* modal new catalog */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}>
                        <View >
                            <View >
                                <Text >Criar Catálogo</Text>
                                <TextInput placeholder='Insira o nome do catálogo' onChangeText={setName} value={name} />
                                <TextInput placeholder='Insira a descrição (opcional)' onChangeText={setDescribe} value={describe} />
                                <Pressable

                                    onPress={async () => {
                                        await newCatalog();
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <Text>ADICIONAR</Text>
                                </Pressable>
                                <Pressable

                                    onPress={async () => setModalVisible(!modalVisible)}>
                                    <Text>CANCELAR</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                </Content>
            </BoxCatalog>
        </GestureHandlerRootView>
    );
}

