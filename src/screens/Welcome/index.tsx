import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import theme from "../../theme";
import {
    Title,
    Logo,
    Container, 
    Screen
} from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Welcome({ navigation }: { navigation: any}) {

    function Login (){
        navigation.navigate("SignIn");
    }

    function SignUpProfessional(){
        navigation.navigate("SignUpProfessional1");
    }

    function SignUpClient(){
        navigation.navigate("SignUpClient1");
    }

    return (

        <LinearGradient
            colors={theme.COLORS.GRADIENT1}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1}}
        >

                    <Screen>
                    <Logo source={require('../../../assets/white-icon.png')} />
                        <Container>
                            <Title> Já possui conta? </Title>

                            <Button
                                title="Fazer Login"
                                type="primary"
                                onPress={ Login}
                            />

                            <Title> Não possui conta? </Title>

                            <Button title="Cadastrar-se como profissional" type="primary" onPress={SignUpProfessional}/>
                            <Button title="Cadastrar-se como cliente" type="primary" onPress={SignUpClient}/>
                        </Container>
                    </Screen>
        </LinearGradient>
    );
}
