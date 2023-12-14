import styled, { css } from "styled-components/native";
import theme from "../../../../theme";

export const Form = styled.View`
  background-color: white;
  height: 100%;
  align-items: center;
  width: 100%;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;


export const Title = styled.Text`
  font-size: 32px;
  align-self: flex-start;
  margin-bottom: 45px;
  font-weight: bold;
  margin-top: 25px;
  ${({ theme }) => css`
    color: ${theme.COLORS.DARKBLUE};
  `};
`;

export const Logo = styled.Image.attrs({
    resizeMode: "contain",
})`
  height: 130px;
  margin-top: 60px;
  margin-bottom: 45px;
`;

export const Container = styled.View`
  width: 85%;
  height: 100%;
  align-items: center;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 25px;
  align-self: self-start;
  font-weight: 600;
  ${({ theme }) => css`
    color: ${theme.COLORS.DARKBLUE};
  `};
  margin-left: 5px;
`;
export const ContainerButton = styled.View`
  width: 50%;
  align-self: self-end;
  margin-left: 5px;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const LoginLabel = styled.Text`
  font-size: 14px;
  font-weight: 600;
  ${({ theme }) => css`
    color: ${theme.COLORS.DARKBLUE};
  `};
`;

export const Screen = styled.View`
  flex: 1;
`