import { StyleSheet, View, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles'
import { readProfessional } from '../../../../api/readUsers/readProfessional';
import { readRatingStars } from "../../../../api/readRating/readAverage";


interface professionals {
  tb_profissional_nome: string,
  tb_profissional_id: number
}

interface stars {
  stars: number;
}


export default function HeaderProfessional() {

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [professional, setProfessional] = useState<professionals[]>([]);
  const [stars, setStars] = useState<stars>({ stars: 0 });

  useEffect(() => {
    const carregarAvaliacoes = async () => {
      try {
        const data = await readProfessional();
        setProfessional(data);
      } catch (error) {
        console.error('Erro ao carregar avaliações: ', error);
      }
    };

    carregarAvaliacoes();
  }, []);

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
    <View style={styles.container}>
      <View style={styles.boxPhoto}>

        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.imgProfile} />
        ) : (
          <Image source={require('../../../../../assets/profile.png')} style={styles.imgProfile} />
        )}


        <View>
          {professional.map((professional, index) => (
            <View key={index}>
              <View style={{ marginVertical: 10 }} />

              {/* sobre a cliente  */}
              <Text style={styles.text}>{professional.tb_profissional_nome}</Text>
            </View>
          ))}
        </View>

        <View style={styles.assessment}>
          {stars ? (
            <View>
              <AntDesign name="star" size={22} color="black" />
              <Text style={{ fontSize: 20, marginLeft: 25, color: 'black', marginTop: -20}}>{stars.stars},0</Text>
            </View>
          ) : (
            <Text>0,0</Text>
          )}
        </View>

      </View>
    </View>
  );
}
