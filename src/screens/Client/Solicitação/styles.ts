import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;


export const Header = styled(LinearGradient).attrs(({ theme }) => ({
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


export const GoldenButton = styled.TouchableOpacity`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  justify-content: center;
  width: 95%;
  align-items: center;
  margin-top: 24px;
  
  background-color: ${({ theme }) => theme.COLORS.GOLDEN}; // Cor dourada personalizada
`;