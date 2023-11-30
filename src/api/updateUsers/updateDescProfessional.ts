import { Alert } from 'react-native'
import { api } from "../../lib/axios";

export async function updateDescProfessional(id:number, desc:string) {
    try{
        await api.put(`/updateDescProfessional/${id}`, {
            desc,
        });

        console.log('Sucesso na descrição!')
    }
    catch (error) {
        console.log('Houve um erro: ' +error);
        Alert.alert('Erro: ', 'Não foi possível inserir a descrição!');
    }
}

