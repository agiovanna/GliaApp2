import React from "react-native";
import { useState } from "react";
import { Container } from './style';
import { CheckBox } from '@rneui/themed';

type Props = {
    title?: string;
}

export function CheckBoxComponent({ title }: Props) {

    const [checked, setChecked] = useState(false);

    return (
        <Container>
            <CheckBox
                title={title}
                checked={checked}
                onPress={() => setChecked(!checked)}
                checkedIcon='check-square' // Ícone de caixa marcada
                uncheckedIcon='square' // Ícone de caixa desmarcada
                checkedColor='purple' // Cor do ícone da caixa marcada
                uncheckedColor='gray' // Cor do ícone da caixa desmarcada
            />
        </Container>
    );
}