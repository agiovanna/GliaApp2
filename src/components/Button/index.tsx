import React, { TouchableOpacityProps } from 'react-native';
import { ButtonT, Title, Load, TypeProps } from './style';

type Props = TouchableOpacityProps & {
    title: string;
    type?: TypeProps;
    isLoading?: boolean;
}

export function Button({ title, type = 'primary', isLoading = false, ...rest }: Props) {
    return (
        <ButtonT type={type} {...rest}>
            {isLoading ? <Load /> : <Title> {title} </Title>}
        </ButtonT>
    );
}