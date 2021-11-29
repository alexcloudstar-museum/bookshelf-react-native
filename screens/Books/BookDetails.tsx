import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Rating from '../../components/Rating';
import { Reviews } from '../../components/Reviews';

const BookDetails = (props: any) => {
  const { title, imageSource, rating, reviews } = props.route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageSource }} style={styles.image} />
          <Text style={styles.bookTitle}>{title}</Text>
        </View>

        <Rating rating={rating} />
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
});

export default BookDetails;
