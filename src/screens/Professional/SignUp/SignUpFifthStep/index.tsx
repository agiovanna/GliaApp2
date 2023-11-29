import React from "react-native";
import { Screen, Container, Content, SubTitle, Title } from './style';
import { createUserProfessional } from "../../../../api/createUsers/createProfessional";
import verificationEmail from "../../../../utils/emailValidation/verifyValidation";

import { Button } from "../../../../components/Button";
import { Header } from "../../../../components/Header";

export function SignUpProfessional5({ route, navigation }: { route: any, navigation: any }) {
    async function Verification() {

        verificationEmail;

        const {
            name,
            birthDate,
            telephone,
            cpf,
            cnpj,
            fantasyName,
            state,
            city,
            cep,
            neighborhood,
            street,
            numberHome,
            complement,
            email,
            password,
            passwordConf,
            latitude,
            longitude,
            imgProfessional,
        } = route.params;

        console.log(
            'Nome: ' + name,
            'Data de nascimento: ' + birthDate,
            'Contato: ' + telephone,
            'CPF: ' + cpf,
            'Estado: ' + state,
            'Cidade: ' + city,
            'CEP: ' + cep,
            'Bairro: ' + neighborhood,
            'Rua: ' + street,
            'Nº da rua: ' + numberHome,
            'Complemento: ' + complement,
            'CNPJ: ' + cnpj,
            'Nome Fantansia: ' + fantasyName,
            'E-mail: ' + email,
            'Senha: ' + password,
            'Confirmação de senha: ' + passwordConf);

        createUserProfessional(
            name,
            birthDate,
            telephone,
            cpf,
            cnpj,
            fantasyName,
            state,
            city,
            cep,
            neighborhood,
            street,
            numberHome,
            complement,
            email,
            password,
            latitude,
            longitude,
            imgProfessional,
            navigation = { navigation }
        );

    }

    return (
        <Screen>
            <Content>
                <Header title="Senha" />

                <Container>
                    <Title> VERIFIQUE SEU EMAIL!</ Title>
                    <SubTitle> Para continuar, verifique o link de verificação enviado para seu email. Aperte o botão "Verificar" após isso.  </SubTitle>

                    <Button type="terciary" title="Verificar" onPress={Verification} />
                </Container>
            </Content>
        </Screen>
    );
}