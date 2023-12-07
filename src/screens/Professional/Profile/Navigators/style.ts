import styled from "styled-components/native";

const TabBar = styled.View`
  background-color: white; /* Cor de fundo da barra de navegação */
`;

const TabBarItem = styled.Text`
  padding: 10px;
  color: ${({ focused }) => (focused ? '#03cafc' : 'white')}; /* Cor do texto ativo ou inativo */
`;
