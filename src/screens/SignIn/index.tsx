import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import theme from "../../theme";
import {
    Form,
    Content,
    Title,
    Container,
    LoginButton,
    LoginLabel,
} from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn({ navigation }: { navigation: any }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function Data() {
        navigation.navigate('MenuClient');
    }

    return (
        <LinearGradient
            colors={theme.COLORS.GRADIENT2}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
                <Content>
                    <Form>
                        <Container>
                            <Title> Login </Title>
                            <Input
                                placeholder="E-mail*"
                                type="primary"
                                name="name"
                                onChangeText={setEmail}
                                value={email}
                            />
                            <Input
                                placeholder="Senha*"
                                type="primary"
                                name="cpf"
                                keyboardType="numeric"
                                onChangeText={setPassword}
                                value={password}
                            />

                            <Button
                                title="Entrar"
                                type="primary"
                                onPress={Data}
                            />
                            <LoginButton>
                                <LoginLabel> Não tem uma conta? Criar Conta</LoginLabel>
                            </LoginButton>
                        </Container>
                    </Form>
                </Content>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
