import styled, { css } from "styled-components/native";

export const Title = styled.Text` 
    font-size: 32px;
    font-weight: bold;
    margin-top: 25px;
    ${({ theme }) => css`
        color: ${theme.COLORS.DARKBLUE};
    `};
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: 150px;
    margin-top: 35px;
    margin-bottom: 35px
`;

export const Container = styled.View`
    width: 90%;
    background-color: white;
    align-items: center;
    border-radius: 32px;
    height: 65%;
    justify-content: center;
`;

export const Screen = styled.View`
    align-items: center;
    justify-content: center;
`
