import { Alert } from 'react-native';
import { api } from "../../lib/axios";

export async function createUserClient(
    name: string,
    birthDate: string,
    telephone: string,
    email: string,
    password: string,
    latitude: number,
    longitude: number,
    imgClient: string,
    cpf: string,
    {navigation} : { navigation : any }
) 

{
    try {
        await api.post('/createClient', {
            name,
            birthDate,
            telephone,
            email,
            password,
            latitude,
            longitude,
            imgClient,
            cpf
        });

        Alert.alert(
            'Cadastrado!',
            'Usuário cadastrado com sucesso.',
            [
                {
                    text: 'PROSSEGUIR',
                    onPress: () => {
                        navigation.navigate('MenuClient')
                    }
                }
            ]
        );

    } catch (error) {
        console.log('Houve um erro: ' + error);
        Alert.alert('Erro: ', 'Não foi possível cadastra-lo(a) no app!');
    }
}

