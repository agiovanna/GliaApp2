import { Alert } from "react-native";
import { api } from "../../lib/axios";

export async function createRequest(
    clienteId: number,
    itemId: number,
    address: string[],
) {
    try {

        if (clienteId && itemId) {
            await api.post('/createRequest', {
                clienteId,
                itemId,
                neighborhood: address[0],
                city: address[1],
                street: address[2],
                state: address[3],
                postalCode: address[4]
            });
        }

        Alert.alert('SOLICITAÇÃO ARMAZENADA COM SUCESSO!');

        console.log('Cadastro concedido com sucesso!');

    }
    catch (error) {
        console.log("Não foi possível realizar o cadastro: " + error);
        Alert.alert('NÃO FOI POSSÍVEL ARMAZENAR A SOLICITAÇÃO!');
    }
}