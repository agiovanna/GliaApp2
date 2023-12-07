import styled, {css} from 'styled-components/native';

export const Screen = styled.View`
    align-items: center;
`

export const Container = styled.View`
    margin-bottom: 15px;
    border-color: black;
    border-width: 2px;
    border-radius: 20px;
    padding: 5px;
    height: 20%;
    margin-top: 11px;
    margin-horizontal: -15%; 
    border-color: purple;

`
export const Title = styled.Text`
  font-size: 32px;
  align-items: center;
  margin-bottom: 45px;
  font-weight: bold;
  margin-top: 35px;
  ${({ theme }) => css`
    color: ${theme.COLORS.DARKBLUE};
  `};
`;


