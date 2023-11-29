import React from "react-native";
import { Header } from "../../../../components/Header";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { CheckBoxComponent } from "../../../../components/Checkbox";
import { useState } from "react";

import { Screen, Container } from "./style";

import { KeyboardAvoidingView, Platform } from "react-native";

export function SignUpProfessional3({
    navigation,
    route,
}: {
    navigation: any;
    route: any;
}) {
    const [cnpj, setCnpj] = useState("");
    const [fantasyName, setFantasyName] = useState("");

    const {
        name,
        birthDate,
        telephone,
        cpf,
        state,
        city,
        cep,
        neighborhood,
        street,
        numberHome,
        complement,
    } = route.params;

    function DataBusiness() {
        navigation.navigate("SignUpProfessional4", {
            name,
            birthDate,
            telephone,
            cpf,
            state,
            city,
            cep,
            neighborhood,
            street,
            numberHome,
            complement,
            cnpj,
            fantasyName,
        });
    }

    return (
        <Screen>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            />
            <Header title="Seu negócio" />

            <Container>
                <Input
                    name="cnpj"
                    placeholder="CNPJ*"
                    type="primary"
                    onChangeText={setCnpj}
                    value={cnpj}
                />
                <Input
                    name="FantasyName"
                    placeholder="NomeFantasia*"
                    type="primary"
                    onChangeText={setFantasyName}
                    value={fantasyName}
                />
                <CheckBoxComponent title="Não possuo um negócio/empresa" />
                <Button title="Continuar" type="terciary" onPress={DataBusiness} />
            </Container>
        </Screen>
    );
}
