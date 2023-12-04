import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, Dimensions, TextInput } from "react-native";
import React, { useState, useRef } from 'react';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from "react-native-picker-select";


import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import BottomSheet from '@gorhom/bottom-sheet';
import { ref, uploadBytesResumable, getDownloadURL, } from 'firebase/storage';
import { storage } from '../../../../api/firebase/firebaseConfig'

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { createItem } from "../../../../api/createCatalog/createItem";
import { useRoute, useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../../../../@types/navigation';

type itemScreenParams = {
    catalog_id: number;
};

type authScreenProp = StackNavigationProp<RootParamList, 'AddItem'>;

// converção de minutos para horas
const convertHour = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const restMinutes = minutes % 60;
    const textHour = (`00${hours}`).slice(-2);
    const textMinute = (`00${restMinutes}`).slice(-2);
    return `${textHour}:${textMinute}`;
};

function AddItem() {

    const navigation = useNavigation<authScreenProp>();

    const route = useRoute();

    const { catalog_id } = route.params as itemScreenParams;

    //image
    const [image, setImage] = useState('');
    const { height } = Dimensions.get('window');
    const bottomSheetRef = useRef<BottomSheet>(null);

    //info
    const [name, setName] = useState('');
    const [describe, setDescribe] = useState('');

    const [inputCost, setInputCost] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [selectCategory, setSelectCategory] = useState('');

    const category_id = parseInt(selectCategory);
    const time = parseFloat(inputTime);
    const cost = parseFloat(inputCost);


    //Upload da imagem de perfil
    async function Upload({ uri, fileType }: { uri: any, fileType: any }) {
        const response = await fetch(uri);
        const blob = await response.blob();

        //pegando data e hora
        const timeanddate = new Date().toISOString();

        //variavel recebe referencia da imagem (nome)
        const storageRef = ref(storage, "Professional/itemCatalog/" + `${category_id}` + '/' + `${catalog_id}` + '/' + `${timeanddate}`);

        //faz o upload da imagem no banco e salva com a referencia da variável
        const uploadItem = uploadBytesResumable(storageRef, blob);

        //comando para esperar o upload completar
        const snapshot = await uploadItem;

        //pós upload, pega a url da imagem (a que será armazenada no banco)
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    }

    //Acessar livraria
    async function AcessLibrary() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            Alert.alert('Aviso', 'É necessário permitir o acesso à biblioteca para colocar uma foto de perfil nesta opção');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            await Upload({ uri: result.assets[0].uri, fileType: "image" });
        }
    }

    async function newItem() {
        if (!image) {
            Alert.alert('Aviso', 'Selecione uma imagem antes de cadastrar o item.');
            return;
        }
        const imgReference: string = await Upload({ uri: image, fileType: "image" });


        //chama api de cadastro de item 
        if (name && describe != "" && time !== undefined && category_id !== undefined && catalog_id !== undefined && imgReference !== undefined) {
            if (cost !== undefined)
                createItem(
                    name,
                    describe,
                    cost,
                    time,
                    imgReference,
                    category_id,
                    catalog_id
                );

            console.log(
                'Nome: ' + name,
                'Descrição: ' + describe,
                'Valor: ' + cost,
                'Tempo: ' + time,
                'Categoria: ' + category_id,
                'Catálogo: ' + catalog_id,
                'Nome da Imagem: ' + imgReference
            );

            Alert.alert('cadastrado');

        }


    }

    return (
        <View >

            <View >
                {image &&
                    < Image source={{ uri: image }} />
                }
                <TouchableOpacity onPress={() => {
                    bottomSheetRef.current?.expand();
                }}>
                    <Entypo name="camera" size={40} color="#808080" />
                </TouchableOpacity>
            </View>

            <View >
                <Text >Selecione a categoria:</Text>

                <RNPickerSelect
                    value={selectCategory}
                    onValueChange={(itemValue, itemIndex) => setSelectCategory(itemValue)}
                    items={[
                        { label: "Sobrancelha", value: "1" },
                        { label: "Maquiagem", value: "2" },
                        { label: "Unhas", value: "3" },
                        { label: "Cabelo", value: "4" },
                        { label: "Cílios", value: "5" },
                    ]}
                />
            </View>



            {/* form inserir infos  */}
            <View >
                <TextInput placeholder='Insira o nome do serviço: ' onChangeText={setName} value={name} />
                <TextInput placeholder='Insira a descrição: ' onChangeText={setDescribe} value={describe} />
                <TextInput placeholder='Insira o valor: ' onChangeText={setInputCost} value={inputCost} />
                <TextInput placeholder='Insira o tempo (em minutos): ' onChangeText={setInputTime} value={inputTime} keyboardType="numeric" />

                {/* Exibição do tempo convertido */}
                {inputTime && (
                    <Text>Tempo: {convertHour(parseFloat(inputTime))}</Text>
                )}

            </View>

            <TouchableOpacity
                onPress={async () => {
                    await newItem();
                    navigation.navigate('ProfileProfessional');
                    console.log(image)
                }
                }>
                <Text>Adicionar</Text>
            </TouchableOpacity>


            {/* <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={[1, height - 750]}
            > */}
                <View>
                    <View style={{ width: "auto", height: "auto", flexDirection: "row", gap: 50, }}>

                        <TouchableOpacity onPress={AcessLibrary}>
                            <FontAwesome name="photo" size={36} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

            {/* </BottomSheet> */}

        </View>

    );
}

export default gestureHandlerRootHOC(AddItem);
