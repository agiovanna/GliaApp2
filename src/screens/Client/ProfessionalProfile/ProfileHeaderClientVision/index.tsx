import { StyleSheet, View, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { readRatingStars } from "../../../../api/readRating/readAverage";
import RatingStars from "../../../../components/RatingStars";


interface stars {
  stars: number;
}

export default function HeaderProfessional() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const id = 1 //solicitação id
  const [stars, setStars] = useState<stars>({ stars: 0 });
  const [userRating, setUserRating] = useState<number>(0);
  const handleRatingPress = (rating: number) => {
    setUserRating(rating);
};



      //media de avaliações
      useEffect(() => {
        const carregarMedia = async () => {
            try {
                const data = await readRatingStars(id)
                setStars(data);
            } catch (error) {
                console.error('Erro ao carregar média de avaliações: ', error)
            }
        };
        carregarMedia();
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
      <View>
        <View >
  
          {profileImage ? ( 
          <Image source={{ uri: profileImage }} />
          ) : (
            <Image source={require('../../../../../assets/profile.png')}  />
            )}
  
          {/* <Text>Nome </Text> */}
          <View >
            <AntDesign name="star" size={22} color="white" />
    {/* media de avaliações */}
            {/* <View>
                {stars ? (
                    <View>
                        <RatingStars rating={userRating} onRatingPress={handleRatingPress} />
                    </View>
                ) : (
                  <RatingStars rating={userRating} onRatingPress={handleRatingPress} />

                    // <Text>0,0</Text>
                )}
            </View>          */}
             </View>
        </View>
      </View>
    );
  }
  