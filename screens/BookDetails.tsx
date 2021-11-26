import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { ReviewType } from '../types';

const BookDetails = (props: any) => {
  const { title, imageSource, rating, reviews } = props.route.params;

  return (
    <View>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <Text>{title}</Text>
      <Text>Rating: {rating}</Text>
      <View>
        {reviews.map((review: ReviewType) => (
          <View key={review.id}>
						<Text>{review.title}</Text>
            <Text>{review.username}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});

export default BookDetails;
