import { Alert } from 'react-native'
import { api } from "../../lib/axios";


export async function createRating(
    score: number,
    comment: string,
    service_id: number

) {
    try {
        const response = await api.post('/createRating', {
            score,
            comment,
            service_id
        });

        Alert.alert('Avaliação feita com sucesso!');

    } catch (error) {
        console.log('Houve um erro: ' + error);
        Alert.alert('Erro: ', 'Não foi possível realizar a avaliação!');
    }
}
