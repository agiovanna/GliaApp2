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
import { BoxCatalog, BoxItem, CatalogContainer, CatalogDesc, CatalogTitle, Content, ImgItem, styles } from './styles';
import { Button } from '../../../../components/Button';

interface catalog {
    tb_catalogo_nome: string;
    tb_catalogo_desc: string;
    tb_catalogo_id: number;
    profissional: {
        tb_profissional_nome: string;
        tb_profissional_id: number;
    };
    itens: {
        tb_item_img: string;
        tb_item_nome: string;
        tb_item_desc: string;
        tb_item_tempo: number;
        tb_item_valor: number;
        tb_item_id: number;
        tb_catalogo_id: number;
        tb_categoria_id: number;
    }[];
}

type authScreenProp = StackNavigationProp<RootParamList, 'Catalog'>;

export function Catalog() {

    const navigation = useNavigation<authScreenProp>();
    const [itemsRefreshing, setItemsRefreshing] = useState(false);

    const [catalogs, setCatalogs] = useState<catalog[]>([]);
    const id = 1;
    //select catálogo
    const refreshItems = async () => {
        try {
            setItemsRefreshing(true);
            const data = await readCatalog(id);
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



    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            {/* catalog and itens  */}
            <BoxCatalog>
                <Content>
                    {catalogs.map((catalog, index) => (
                        <CatalogContainer>
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



                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            style={styles.buttonStyle}
                                            onPress={() => {
                                                navigation.navigate('request', {
                                                    itemId: item.tb_item_id,
                                                    itemName: item.tb_item_nome,
                                                    itemDesc: item.tb_item_desc,
                                                    itemCost: item.tb_item_valor,
                                                    itemTime: item.tb_item_tempo,
                                                    itemImg: item.tb_item_img,
                                                    catalogId: item.tb_catalogo_id,
                                                    categoryId: item.tb_categoria_id,
                                                    professionalId: catalog.profissional.tb_profissional_id,
                                                    professionalName: catalog.profissional.tb_profissional_nome
                                                });
                                            }}
                                        >

                                            <Text style={styles.text}>Solicitar</Text>
                                        </TouchableOpacity>
                                    </BoxItem>
                                ))}
                            </ScrollView>



                        </CatalogContainer>
                    ))}

                </Content>
            </BoxCatalog>
        </GestureHandlerRootView>
    );
}

