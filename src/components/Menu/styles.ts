import styled from 'styled-components/native';

export const MenuContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  color: Purple;
  background-color: #451952;
  border-radius: 5px;
  margin-bottom: 30px;
  width: 100%;
`;

export const MenuItem = styled.TouchableOpacity`
  padding: 15px;
`;

export const MenuText = styled.Text`
  font-size: 16px;
  color: white;
`;
