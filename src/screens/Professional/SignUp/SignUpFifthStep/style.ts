import styled, { css } from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Screen = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Container = styled.View`
    margin-top: 45px;
    width: 85%;
    align-self: center;
`

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 48
    },
})`
    width: 100%;
`;


export const SubTitle = styled.Text`
    font-size: 14px;
    text-align: center;
    margin-bottom: 25px ;
    font-weight: 600;
    margin-top: 25px;
    ${({ theme }) => css`
        color: ${theme.COLORS.DARKBLUE};
    `};
`

export const Title = styled.Text`
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px ;
    font-weight: 600;
    margin-top: 25px;
    ${({ theme }) => css`
        color: ${theme.COLORS.DARKBLUE};
    `};
`