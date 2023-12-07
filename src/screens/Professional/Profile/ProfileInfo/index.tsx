import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { readInfo } from '../../../../api/readUsers/readInfoProfessional';
import { updateDescProfessional } from '../../../../api/updateUsers/updateDescProfessional';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Screen, Container, Title  } from './style';

import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';



interface info {
    tb_profissional_desc: string;
    tb_profissional_cnpj: string;
}

export function InfoScreen() {

    const [infos, setInfos] = useState<info[]>([]);
    const id = 1 //professional id
    const [desc, setDesc] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [infoRefreshing, setInfoRefreshing] = useState(false);
    

    //updating
    const refreshInfo = async () => {
        try {
            setInfoRefreshing(true);
            const data = await readInfo(id);

            if (data && data.tb_profissional_desc) {
                setInfos([data]); // Coloca o objeto em um array
            } else {
                setInfos([]); // Define um array vazio se não houver dados
            }
        } catch (error) {
            console.error('Erro ao carregar itens:', error);
        } finally {
            setInfoRefreshing(false);
        }
    };

    // Carregar informações iniciais
    useEffect(() => {
        refreshInfo();

        const intervalId = setInterval(refreshInfo, 6000);

        return () => clearInterval(intervalId);
    }, [id]);

    //adicionando descrição
    async function updateInfo() {

        if (desc != '') {
            updateDescProfessional(
                id,
                desc
            )
            console.log(
                'Id: ' + id,
                'Descrição: ' + desc
            );

            setModalVisible(!modalVisible);
        }
        refreshInfo();

    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <Screen>
                

                <View>
                    
                    {/*{infos && infos.length > 0 ? (*/}
                        <Container>
                            <Text>Sobre Mim:</Text>
                        </Container>
                        <Container>
                            <Text> Descrição:{/*{infos[0].tb_profissional_desc}*/}</Text>
                         </Container>
                         <Container>
                            <Text>CNPJ: {/*}{infos[0].tb_profissional_cnpj}*/}</Text>
                        </Container>
                        
                    {/*}) : (*/}
                        <Text>Nenhuma informação disponível.</Text>
                   {/*} )}*/}
                </View>

                {/* new item */}
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}>

                    <AntDesign name="edit" size={24} color="black" />

                </TouchableOpacity>
                
                

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}>
                    <View >
                        <View style={{ alignItems: "center" }}>
                            <Title>Editar descrição</Title>
                            <Input
                                name='Descrição'
                                placeholder="Insira a descrição"
                                type="primary"
                                onChangeText={setDesc}
                                value={desc}
                            />
                            <Button type="secondary" title="adicionar" onPress={async () => {await updateInfo(); setModalVisible(!modalVisible);}} />

                            <Button type="secondary" title="Cancelar" onPress={async () => setModalVisible(!modalVisible)} />
                        </View>
                    </View>
                </Modal>

            </Screen>
        </GestureHandlerRootView>

    );
}