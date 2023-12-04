import { Alert } from 'react-native'
import { api } from "../../lib/axios";

export async function updateImgClient(id:number, imgReference:string) {
    try{
        await api.put(`/updateImgClient/${id}`, {
            imgReference,
        });

        console.log('Sucesso na imagem!')
    }
    catch (error) {
        console.log('Houve um erro:' +error);
        Alert.alert('Erro: ', 'Não foi possível inserir a imagem!');
    }
}

