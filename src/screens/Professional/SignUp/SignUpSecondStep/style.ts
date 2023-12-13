import styled, { css } from "styled-components/native";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import theme from "../../../../theme";

export const Screen = styled.View`
    background-color: white ;
    flex: 1;
    align-items: center;
`;

export const Container = styled.View`
    width: 85%;
    margin-top: 45px;
    align-items: center;
    `;

export const SubTitle = styled.Text`
    font-size: 18px;
    align-self: flex-start;
    margin-bottom: 25px ;
    font-weight: 600;
    margin-top: 25px;
    ${({ theme }) => css`
        color: ${theme.COLORS.DARKBLUE};
    `};
`

export const Content = styled.View`
    flex: 1
`;