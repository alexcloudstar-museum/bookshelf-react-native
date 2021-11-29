import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { ReviewType } from '../types';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Reviews } from '../components/Reviews';
import { ScrollView } from 'react-native-gesture-handler';

const BookDetails = (props: any) => {
  const { title, imageSource, rating, reviews } = props.route.params;

  const onFinishRating = (rating: number) => {
    console.log('rating: ', rating);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageSource }} style={styles.image} />
          <Text style={styles.bookTitle}>{title}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <AirbnbRating
            showRating={false}
            onFinishRating={onFinishRating}
            defaultRating={rating}
          />
        </View>
        <Reviews reviews={reviews} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  innerContainer: {
    marginVertical: 20,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  image: {
    height: 350,
    width: 250,
    marginBottom: 20,
  },
  ratingContainer: {
    marginBottom: 30,
  },
});

export default BookDetails;
