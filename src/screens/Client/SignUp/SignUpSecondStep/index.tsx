import React from "react-native";
import { Screen, Container, Content, SubTitle, Title } from './style';
import { RegisterFirebaseandSendEmail } from "../../../../utils/emailValidation/sendValidation";
import { useState } from "react";
import firebaseAuth from "../../../../api/firebase/firebaseConfig";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Header } from "../../../../components/Header";

export function SignUpClient2({ navigation, route }: { navigation: any, route: any }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    const {
        name,
        birthDate,
        telephone,
        cpf
    } = route.params;

    const latitude = 0;
    const longitude = 0;
    const imgClient = "Not Image Profile";

    async function RegisterandSendEmail() {
        try {

            RegisterFirebaseandSendEmail(email, password);

            navigation.navigate('SignUpClient3', {
                name,
                birthDate,
                telephone,
                cpf,
                email,
                password,
                passwordConf,
                latitude,
                longitude,
                imgClient,
            });
        }
        catch (erro) {
            console.log('erro: ' + erro)
        }
    }

    return (
        <Screen>
            <Content>
                <Header title="Senha" />

                <Container>
                    <Title> Por favor, digite um email válido e crie uma senha forte:</ Title>
                    <SubTitle> A senha deve conter pelo menos 8 dígitos, um número e letra  </SubTitle>

                    <Input placeholder="Digite seu email" type="primary" onChangeText={setEmail} value={email} />
                    <Input placeholder="Digite a senha" type="primary" onChangeText={setPassword} value={password} />

                    <Input placeholder="Confirme a senha" type="primary" onChangeText={setPasswordConf} value={passwordConf} />

                    <Button type="terciary" title="Finalizar" onPress={RegisterandSendEmail} />
                </Container>
            </Content>
        </Screen>
    );
}