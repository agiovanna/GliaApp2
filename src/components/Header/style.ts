import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";


export const HeaderV = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT2
}))`
width: 100%;
border-bottom-right-radius: 50px;
height: 85px;
justify-content: center;
`;

export const HeaderLabel = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    align-self: center;
    font-size: 24px;
    font-weight: bold;
`;
