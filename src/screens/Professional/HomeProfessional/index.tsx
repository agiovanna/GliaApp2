import React, { useState } from 'react';
import { View, PanResponder, Animated, Dimensions, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { MapProfessional } from '../../../utils/MapProfessional';
import SearchBar from '../../../components/SearchBar';
import Menu from '../../../components/Menu';
import { Input } from '../../../components/Input';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export const Drawer = styled(Animated.View)`
  position: absolute;
  bottom: -80px;
  left: 0;
  right: 0;
  background-color: #F9F9F9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 5px;
  align-items: center;
  border: 1px;
  border-color:  rgba(102, 37, 73, 0.7);
`;

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  background-color: whitesmoke;

`;

export const Content = styled.View`
  align-items: center;
  width: 100%;
`;


export const ClientItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color:white ;
  border-radius: 12px;
  width: 95%;
  align-self: center;
`;

export const ClientImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const ClientInfo = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const ClientName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ServiceRequested = styled.Text`
  color: gray;
  font-size: 14px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const SmallButton = styled.TouchableOpacity`
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const ItemLista = styled.View`
  width: 100%;

`;
export const Title = styled.Text`
background-color: rgba(102, 37, 73, 0.7);
align-items: center;
padding: 10px;
color: white;
font-size: 22px;
width: 100%;
text-align: center;
`



export function HomeProfessional({ navigation }: { navigation: any }) {
  const [drawerHeight] = useState(new Animated.Value(Dimensions.get('window').height / 2));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy < 0) {
        drawerHeight.setValue(-gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy < -50) {
        Animated.timing(drawerHeight, {
          toValue: Dimensions.get('window').height,
          duration: 300,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(drawerHeight, {
          toValue: Dimensions.get('window').height / 2,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  function handleSearch(text: string): void {
    throw new Error('Function not implemented.');
  }

  function handleMenuSelect(option: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Screen>
        {/*<View style={{width: '100%', justifyContent: 'center', alignItems: 'center' }}>*/}
        
  {/*</View>*/}
      <View style={{flex: 1, width: '100%' }}>
        <MapProfessional navigation={navigation} />
      </View>
      <Drawer {...panResponder.panHandlers} style={{ height: drawerHeight }}>
      <AntDesign name="minus" size={28} color="black" />
        <Content>
          <Title> Solicitações </Title>
          
          <Menu onSelect={handleMenuSelect} />
          <ItemLista>

            <ClientItem>
              <ClientImage source={require('../../../../assets/profile.png')} />

              <ClientInfo>
                <ClientName>Nome do Cliente</ClientName>
                <ServiceRequested>Serviço Solicitado</ServiceRequested>

                <ButtonsContainer>
                  <SmallButton>
                    <Text>+ Info</Text>
                  </SmallButton>
                  <SmallButton>
                    <Text>Aceitar</Text>
                  </SmallButton>
                </ButtonsContainer>

              </ClientInfo>
            </ClientItem>
            {/* Repita o bloco acima para cada profissional na lista */}
          </ItemLista>
        </Content>
      </Drawer>
    </Screen>
  );
}
