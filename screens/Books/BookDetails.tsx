import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Rating from '../../components/Rating';
import { FontAwesome5 } from '@expo/vector-icons';
import { Reviews } from '../../components/Reviews';

const BookDetails = (props: any) => {
  const { title, imageUrl, rating, reviews } = props.route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.bookTitle}>{title}</Text>
        </View>

        <Rating rating={rating} />
        <Reviews reviews={reviews} />
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData: any) => {

  return {
    headerTitle: navData.route.params.title,
    headerRight: () =>
      navData.route.params.canEditBook ? (
        <View>
          <FontAwesome5 name='edit' size={24} color='black' />
        </View>
      ) : (
        <></>
      ),
  };
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
