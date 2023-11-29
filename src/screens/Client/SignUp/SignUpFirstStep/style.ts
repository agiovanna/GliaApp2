import styled, { css } from "styled-components/native";
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Form = styled.View`
    background-color: white;
    height: 100%;
    align-items: center;
    width: 100%;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 48
    },

})`
    width: 100%;
`;

export const Title = styled.Text` 
    font-size: 32px;
    align-self: flex-start;
    margin-bottom: 25px ;
    font-weight: bold;
    margin-top: 25px;
    margin-left: 25px;
    ${({ theme }) => css`
        color: ${theme.COLORS.DARKBLUE};
    `};
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: 100px;
    margin-top: 35px;
    margin-bottom: 35px
`;

export const LoginLabel = styled.Text`
    font-size: 14px;
    font-weight: 600;
    margin-top: 25px;
    ${({ theme }) => css`
    color: ${theme.COLORS.DARKBLUE};
    `};
`;

export const LoginButton = styled.TouchableOpacity`
    margin-top: 20px;
    align-self: center;
` ;

export const Container = styled.View`
    width: 85%;
`;

