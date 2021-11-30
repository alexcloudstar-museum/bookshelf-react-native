import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Rating from '../../components/Rating';
import { FontAwesome5 } from '@expo/vector-icons';
import { Reviews } from '../../components/Reviews';
import * as bookActions from '../../store/actions/bookActions';
import { useDispatch } from 'react-redux';

const BookDetails = (props: any) => {
  const { bookId, canEditBook, title, imageUrl, rating, reviews } =
    props.route.params;

  const dispatch = useDispatch();

  const onDeleteBook = () => {
    dispatch(bookActions.deleteBook(bookId));
    props.navigation.goBack();
  };

  const onAddReview = () =>
    props.navigation.navigate('AddReview', { bookId, reviews });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.bookTitle}>{title}</Text>
        </View>

        <Rating bookId={bookId} rating={rating} disabled={canEditBook} />
        <Text>Reviews: </Text>
        <Reviews reviews={reviews} />

        {canEditBook && <Button title='Delete Book' onPress={onDeleteBook} />}
        {!canEditBook && <Button title='Add Review' onPress={onAddReview} />}
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
          <FontAwesome5
            name='edit'
            size={24}
            color='black'
            onPress={() =>
              navData.navigation.navigate('AddBook', {
                bookId: navData.route.params.bookId,
                title: navData.route.params.title,
                imageUrl: navData.route.params.imageUrl,
                isEditBook: true,
              })
            }
          />
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
    marginBottom: 50,
  },
  innerContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
