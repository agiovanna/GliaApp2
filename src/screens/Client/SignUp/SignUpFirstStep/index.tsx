import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../../theme";
import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Form, Title, Container, LoginButton, LoginLabel, Logo, Screen } from "./style";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { format, parse } from 'date-fns';

export function SignUpClient1({ navigation }: { navigation: any }) {

    const [cpf, setCpf] = useState<string>('');
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [telephone, setTelephone] = useState("");

    function formatDateForDatabase(dateString: string): string | null {
        try {
            const formattedDate = parse(dateString, 'dd/MM/yyyy', new Date());
            const formattedDateForDatabase = format(formattedDate, 'yyyy-MM-dd');
            return formattedDateForDatabase;
        } catch (error) {
            console.error('Erro ao formatar data:', error);
            return null;
        }
    }

    function Data() {
        const formattedDate = formatDateForDatabase(birthdate);
        if (formattedDate) {
            navigation.navigate("SignUpClient2", {
                name,
                birthdate: formattedDate,
                telephone,
                cpf,
            });
        } else {
            console.log('Formato de data inválido');

        }
    }

    function handleSignIn (){
        navigation.navigate('SignIn')
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <Screen>
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >

        <LinearGradient
            colors={theme.COLORS.GRADIENT1}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.4 }}
            style={{ alignItems: 'center' }}
        >
            <Logo source={require('../../../../../assets/white-icon.png')} />
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
                        name="birthdate"
                        placeholder="Data de nascimento*"
                        type="primary"
                        onChangeText={setBirthdate}
                        value={birthdate}
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
                    <LoginButton onPress={handleSignIn}>
                        <LoginLabel> Já possui uma conta? Faça login. </LoginLabel>
                    </LoginButton>
                </Container>
            </Form>
        </LinearGradient>
        </ScrollView>
        </Screen>
        </KeyboardAvoidingView>
    );
}
