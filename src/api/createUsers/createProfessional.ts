import { Alert } from 'react-native'
import { api } from "../../lib/axios";


export async function createUserProfessional(
    name: string,
    birthDate: string,
    telephone: string,
    cpf: string,
    cnpj: string,
    fantasyName: string,
    state: string,
    city: string,
    cep: string,
    neighborhood: string,
    street: string,
    numberHome: string,
    complement: string,
    email: string,
    password: string,
    latitude: number,
    longitude: number,
    imgProfessional: string,
    {navigation} : { navigation : any }
) {
    try {
        await api.post('/createProfessional', {
            name,
            birthDate,
            telephone,
            state,
            city,
            cep,
            neighborhood,
            street,
            numberHome,
            complement,
            cpf,
            cnpj,
            fantasyName,
            email,
            password,
            latitude,
            longitude,
            imgProfessional
        });

        Alert.alert(
            'Cadastrado!',
            'Usuário cadastrado com sucesso.',
            [
                {
                    text: 'PROSSEGUIR',
                    onPress: () => {
                        navigation.navigate('MenuProfessional')
                    }
                }
            ]
        );

    } catch (error) {
        console.log('Houve um erro: ' + error);
        Alert.alert('Erro: ', 'Não foi possível cadastra-lo(a) no app!'); 
    }
}