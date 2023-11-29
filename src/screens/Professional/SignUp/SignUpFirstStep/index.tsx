import { LinearGradient } from "expo-linear-gradient";

import theme from "../../../../theme";

import React from "react-native";
import { useState } from "react";

//Para a tela subir junto com o teclado
import { KeyboardAvoidingView, Platform } from "react-native";
import {
    Form,
    Content,
    Title,
    Container,
    LoginButton,
    LoginLabel,
} from "./style";

import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

export function SignUpProfessional1({ navigation }: { navigation: any }) {

    const [cpf, setCpf] = useState<string>('');

    function Data() {
        navigation.navigate("SignUpProfessional2", {
            name,
            birthDate,
            telephone,
            cpf,
        });
    }

    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [telephone, setTelephone] = useState("");

    return (

        <LinearGradient
            colors={theme.COLORS.GRADIENT2}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >

                <Content>
                    <Form>
                        <Container>
                            <Title> Criar conta </Title>

                            <Input
                                name="name"
                                placeholder="Nome*"
                                type="primary"
                                onChangeText={setName}
                                value={name}
                            />

                            <Input
                                name="cpf"
                                placeholder="CPF*"
                                type="primary"
                                keyboardType="numeric"
                                onChangeText={setCpf}
                                value={cpf}
                            />

                            <Input
                                name="birthDate"
                                placeholder="Data de Nascimento*"
                                type="primary"
                                onChangeText={setBirthDate}
                                value={birthDate}
                            />

                            <Input
                                name="telephone"
                                placeholder="Número de telefone*"
                                type="primary"
                                keyboardType="numeric"
                                onChangeText={setTelephone}
                                value={telephone}
                            />

                            <Button title="Continuar" type="primary" onPress={Data} />
                            <LoginButton>
                                <LoginLabel> Já possui conta? Faça Login.</LoginLabel>
                            </LoginButton>
                        </Container>
                    </Form>
                </Content>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
