import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface RatingStarsProps {
  rating: number;
  onRatingPress: (rating: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, onRatingPress }) => {
  const maxRating = 5;

  const handleRatingPress = (selectedRating: number) => {
    onRatingPress(selectedRating);
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(maxRating)].map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handleRatingPress(index + 1)}>
          <AntDesign
            name={index < rating ? 'star' : 'staro'}
            size={24}
            color={index < rating ? 'gold' : 'gray'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingStars;
