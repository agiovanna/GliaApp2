import React, {Platform, KeyboardAvoidingView, ScrollView} from "react-native";
import { Screen, Container, Content, SubTitle, Title } from './style';
import { createUserClient } from "../../../../api/createUsers/createClient";
import verificationEmail from "../../../../utils/emailValidation/verifyValidation";

import { Button } from "../../../../components/Button";
import { Header } from "../../../../components/Header";

export function SignUpClient3({ navigation, route }: { navigation: any, route: any }) {

    async function Verification() {

        verificationEmail;

        const {
            name,
            birthDate,
            telephone,
            email,
            password,
            passwordConf,
            latitude,
            longitude,
            imgClient,
            cpf,
        } = route.params;


        console.log(
            'Nome: ' + name,
            'Data de nascimento: ' + birthDate,
            'Contato: ' + telephone,
            'E-mail: ' + email,
            'Senha: ' + password,
            'Confirmação de senha: ' + passwordConf);


        try {

            createUserClient(
                name,
                birthDate,
                telephone,
                email,
                password,
                latitude,
                longitude,
                imgClient,
                cpf,
                navigation = { navigation }
            );

        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <Content>
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
        <Screen>
            
                <Header title="Senha" />

                <Container>
                    <Title> VERIFIQUE SEU EMAIL!</ Title>
                    <SubTitle> Para continuar, verifique o link de verificação enviado para seu email. Aperte o botão "Verificar" após isso.  </SubTitle>

                    <Button type="terciary" title="Verificar" onPress={Verification} />
                </Container>
        </Screen>
        </ScrollView>
        </Content>
        </KeyboardAvoidingView>
    );
}