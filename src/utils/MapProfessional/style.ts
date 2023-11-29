import styled from "styled-components/native";

import MapView from "react-native-maps";

export const Screen = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
width: 100%;
justify-content: center;
justify-self: center;
margin: 5px;
height: 100%;
background-color: whitesmoke;
`;

export const MapContainer = styled(MapView)`
  width: 100%;
  height: 70%;
  margin-top: 10px;
`;

export const ProfileInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 7px;
`

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`

export const ProfileText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const ProfileText2 = styled.Text`
  font-size: 14px;
  font-weight: 600;
`

export const FilterBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.COLORS.VIOLET};
`

export const MenuItem = styled.Text`
  font-size: 16px;
  color: white;
  padding: 10px;
`