import { Alert } from 'react-native'
import { api } from "../../lib/axios";


export async function createCatalog(
    name: string,
    describe: string,
    professional_id: number,

) {
    try {
        const response = await api.post('/createCatalog', {
            name,
            describe,
            professional_id,
        });

        console.log('Catálogo adicionado com sucesso!');
        return response.data.catalog_id;

    } catch (error) {
        console.log('Houve um erro: ' + error);
        Alert.alert('Erro: ', 'Não foi possível adionar o catálogo ao seu perfil!');
    }
}
