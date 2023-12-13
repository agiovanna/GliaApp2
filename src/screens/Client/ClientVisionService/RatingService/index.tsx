import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { styles } from './styles';
import { createRating } from '../../../../api/createRating';
import { TextInput } from 'react-native';


const RatingService: React.FC = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  const maxRating = [1, 2, 3, 4, 5];

  const score = defaultRating;
  const [comment, setComment] = useState("");
  const service_id = 4


  const starImgFilled =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  const cadRating = () => {
    createRating(
      score,
      comment,
      service_id
    )

    console.log(
    'Nota: ' +score,
    'Comentário: ' +comment
    );
  }

  const CustomRatingBar: React.FC = () => {


    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.textStyle}> Avalie sua experiência com a profissional:  </Text>

      <CustomRatingBar />

      <Text style={styles.textStyle}>
        {defaultRating + ' / ' + maxRating.length}
      </Text>
      <View style={{ marginVertical: 10 }} />

      <Text style={styles.textStyle}>Adicione um feedback:</Text>
      <View style={{ marginVertical: 10 }} />
      <TextInput placeholder="Opcional" onChangeText={setComment} value={comment} style={styles.textInput} />


      <View style={{ marginVertical: 10 }} />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={cadRating}
      >
        <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};



export default RatingService;
