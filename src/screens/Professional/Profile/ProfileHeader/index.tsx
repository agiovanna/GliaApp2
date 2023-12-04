import { StyleSheet, View, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HeaderProfessional() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

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
    }, []);

    return (
      <View>
        <View >
  
          {profileImage ? ( 
          <Image source={{ uri: profileImage }} />
          ) : (
            <Image source={require('../../../../../assets/profile.png')}  />
            )}
  
          <Text>Nome </Text>
          <View >
            <AntDesign name="star" size={22} color="white" />
            <Text style={{ fontSize: 20, marginLeft: 8, color:'white' }}>Avaliação</Text>
          </View>
        </View>
      </View>
    );
  }
  