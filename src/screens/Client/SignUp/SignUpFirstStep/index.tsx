import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import theme from "../../../../theme";
import {
    Form,
    Content,
    Title,
    Logo,
    Container,
    LoginButton,
    LoginLabel,
} from "./style";

import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

export function SignUpClient1({ navigation }: { navigation: any }) {

    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [telephone, setTelephone] = useState("");
    const [cpf, setCpf] = useState<string>("");

    function Data() {
        navigation.navigate("SignUpClient2", {
            name,
            birthDate,
            telephone,
            cpf
        });
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
                    <Logo source={require('../../../../../assets/icon.png')} />
                    <Form>
                        <Container>
                            <Title> Criar conta </Title>
                            <Input
                                placeholder="Nome*"
                                type="primary"
                                name="name"
                                onChangeText={setName}
                                value={name}
                            />
                            <Input
                                placeholder="CPF*"
                                type="primary"
                                name="cpf"
                                keyboardType="numeric"
                                onChangeText={setCpf}
                                value={cpf}
                            />
                            <Input
                                placeholder="Data de Nascimento*"
                                type="primary"
                                name="birthDate"
                                onChangeText={setBirthDate}
                                value={birthDate}
                            />
                            <Input
                                placeholder="Número de telefone*"
                                type="primary"
                                name="telephone"
                                onChangeText={setTelephone}
                                value={telephone}
                            />

                            <Button
                                title="Continuar"
                                type="primary"
                                onPress={Data}
                            />
                            <LoginButton>
                                <LoginLabel> Já possui conta? Clique aqui.</LoginLabel>
                            </LoginButton>
                        </Container>
                    </Form>
                </Content>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
