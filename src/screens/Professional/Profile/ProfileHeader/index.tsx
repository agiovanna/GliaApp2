import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Screen, Image, InfoContainer, ProfessionalName, InfoA, TitleA } from './styles';


export default function HeaderProfessional() {
  {/*const [profileImage, setProfileImage] = useState<string | null>(null);

    // Use o useEffect para carregar a imagem do AsyncStorage quando a tela for montada
    useEffect(() => {
      const loadProfileImage = async () => {
        try {
          const storedImage = await AsyncStorage.getItem('imageProfessional');
          setProfileImage(storedImage);
        } catch (error) {
          console.log('Erro ao carregar imagem do perfil:', error);
        }
      };

      loadProfileImage();
    }, []);*/}

    return (
    <Screen>
        <Container >
  
          {/*{profileImage ? ( 
          <Image source={{ uri: profileImage }} />
          ) : (
            <Image source={require('../../../../../assets/profile.png')}  />
          )}*/}

          <Image source={require('../../../../../assets/profile.png')} alt='Foto de perfil'/>
  
  <InfoContainer>
         <ProfessionalName> Fulana da Silva </ProfessionalName>
          <InfoA>
            <AntDesign name="star" size={22} color="white" />
            <TitleA>Avaliação</TitleA>
            </InfoA>
            </InfoContainer>
            </Container>
        </Screen>
    );
  }
  