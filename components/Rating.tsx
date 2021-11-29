import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const Rating: FC<{ rating: number }> = ({ rating }) => {
  const onFinishRating = (rating: number) => {
    console.log('rating: ', rating);
  };

  return (
    <View style={styles.ratingContainer}>
      <AirbnbRating
        showRating={false}
        onFinishRating={onFinishRating}
        defaultRating={rating}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    marginVertical: 15,
		alignItems: 'flex-start',

  },
});

export default Rating;
