import { Alert } from 'react-native'
import { api } from "../../lib/axios";


export async function createItem(
    name: string,
    describe: string,
    cost: number,
    time: number,
    imgReference: string,
    category_id: number,
    catalog_id: number
) {
    try {
        await api.post('/createItem', {
            name,
            describe,
            cost,
            time,
            imgReference,
            category_id,
            catalog_id,
        });

        console.log('Item adicionado com sucesso!');

    } catch (error) {
        console.log('Houve um erro: ' + error);
        Alert.alert('Erro: ', 'Não foi possível adionar o Item ao catálogo!');
    }
}
