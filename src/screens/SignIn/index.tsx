import { LinearGradient } from "expo-linear-gradient";

import theme from "../../theme";

import { Alert } from "react-native";
import React, { createContext, useContext, useState } from 'react';
//Para a tela subir junto com o teclado
import { KeyboardAvoidingView, Platform } from "react-native";
import {
    Form,
    Title,
    Container,
    LoginButton,
    LoginLabel,
    Logo
} from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignIn({ navigation, route }: { navigation: any, route: any}) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


const handleSignIn = () => {
    if (!email || !password) {
        Alert.alert("Erro", "Por favor, preencha todos os campos.");
        return;
    }
}

function handleSignUp (){
    navigation.navigate('Welcome')
}
    return (

        <LinearGradient
            colors={theme.COLORS.GRADIENT1}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.4 }}
            style={{alignItems: 'center'}}
        >
                <Logo source={require('../../../assets/white-icon.png')} />
                    <Form>
                        <Container>
                            <Title> Fazer login </Title>

                            <Input
                                name="email"
                                placeholder="Email*"
                                type="primary"
                                onChangeText={setEmail}
                                value={email}
                            />

                            <Input
                                name="password"
                                placeholder="Senha*"
                                type="primary"
                                keyboardType="numeric"
                                onChangeText={setPassword}
                                value={password}
                            />

                            <Button title="Continuar" type="primary" onPress={handleSignIn} />
                            <LoginButton onPress={handleSignUp}>
                                <LoginLabel> Não possui conta? Cadastre-se.</LoginLabel>
                            </LoginButton>
                        </Container>
                    </Form>

        </LinearGradient>
    );
}