import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator, Button,
  FlatList,
  StyleSheet, Text, View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Books/Book';
import { colors } from '../constants/colors';
import * as booksActions from '../store/actions/bookActions';
import { ReduxState } from '../store/types';

const Home = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<null | string>();

  const books = useSelector(
    (state: ReduxState) => state.books.availableBooks
  );
  const dispatch = useDispatch();

  const loadBooks = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      await dispatch(booksActions.fetchBooks());
    } catch (error: any) {
      setError(error.message);
    }

    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError, setIsRefreshing]);

  // useEffect(() => {
  //   const willFocusSub = props.navigation.addListener('willFocus', loadBooks);

  //   return () => {
  //     if (willFocusSub) willFocusSub.remove();
  //   };
  // }, [loadBooks]);

  useEffect(() => {
    setIsLoading(true);
    loadBooks().then(() => setIsLoading(false));
  }, [dispatch, loadBooks]);

  if (isLoading)
    return (
      <ActivityIndicator
        size='large'
        color={colors.primary}
        style={styles.centered}
      />
    );

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occured!</Text>
        <Button title='Try Again' onPress={loadBooks} color={colors.primary} />
      </View>
    );
  }

  if (!isLoading && !books.length) {
    return (
      <View style={styles.centered}>
        <Text style={{textAlign: 'center', fontSize: 18}}>No books found. Maybe start adding some!</Text>
      </View>
    );
  }

  console.log(books)

  return (
    <FlatList
      onRefresh={loadBooks}
      refreshing={isRefreshing}
      contentContainerStyle={styles.container}
      data={books}
      renderItem={itemData => (
        <Book
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          onPress={() =>
            props.navigation.navigate('BookDetails', {
              title: itemData.item.title,
              imageUrl: itemData.item.imageUrl,
              rating: itemData.item.rating,
              reviews: itemData.item.reviews,
            })
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',

  },
});

export default Home;
