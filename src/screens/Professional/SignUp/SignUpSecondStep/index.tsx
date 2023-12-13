import React from "react-native";

import { Header } from "../../../../components/Header";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { useState } from "react";
import { SearchCEP } from '../../../../services/viacep';

import { Screen, Container, Content } from "./style";

import { KeyboardAvoidingView, Platform, ScrollView, Alert } from "react-native";

export function SignUpProfessional2({
    navigation,
    route,
}: {
    navigation: any;
    route: any;
}) {

    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [cep, setCep] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [street, setStreet] = useState("");
    const [numberHome, setNumberHome] = useState("");
    const [complement, setComplement] = useState("");

    const { name, birthDate, telephone, cpf } = route.params;


    function DataAdress() {
        if (!state || !city || !cep || !neighborhood || !street || !numberHome) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        } 
        else {
        navigation.navigate("SignUpProfessional3", {
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
        });
    }

    }

    const fetchCEPData = async () => {
        if (cep.length === 8) {
            const data = await SearchCEP(cep);
            if (data) {
                setState(data.uf);
                setCity(data.localidade);
                setNeighborhood(data.bairro);
                setStreet(data.logradouro);
            }
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <Content>
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <Screen>
            <Header title="Endereço" />
            <Container>
                <Input
                    name="cep"
                    placeholder="CEP*"
                    type="primary"
                    keyboardType="numeric"
                    onChangeText={setCep}
                    value={cep}
                    onBlur={fetchCEPData}
                />
                <Input
                    name="state"
                    placeholder="Estado*"
                    type="primary"
                    onChangeText={setState}
                    value={state}
                />
                <Input
                    name="city"
                    placeholder="Cidade*"
                    type="primary"
                    onChangeText={setCity}
                    value={city}
                />
                <Input
                    name="neighborhood"
                    placeholder="Bairro*"
                    type="primary"
                    onChangeText={setNeighborhood}
                    value={neighborhood}
                />
                <Input
                    name="street"
                    placeholder="Rua*"
                    type="primary"
                    onChangeText={setStreet}
                    value={street}
                />
                <Input
                    name="number"
                    placeholder="Número*"
                    type="primary"
                    onChangeText={setNumberHome}
                    value={numberHome}
                />
                <Input
                    name="adressComplement"
                    placeholder="Complemento"
                    type="primary"
                    onChangeText={setComplement}
                    value={complement}
                />
                <Button title="Continuar" type="terciary" onPress={DataAdress} />
            </Container>
        </Screen>
        </ScrollView>
        </Content>
        </KeyboardAvoidingView>
    );
}