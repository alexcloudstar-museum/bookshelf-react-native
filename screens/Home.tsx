import React from 'react';
import { FlatList, StyleSheet, View, YellowBox } from 'react-native';
import Book from '../components/Books/Book';
import { books } from '../data/books';

const Home = (props: any) => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={books}
      renderItem={itemData => (
        <Book
          title={itemData.item.title}
          imageSource={itemData.item.imageSource}
          onPress={() => props.navigation.navigate('BookDetails', {
            title: itemData.item.title,
            imageSource: itemData.item.imageSource,
            rating: itemData.item.rating,
            reviews: itemData.item.reviews
          })}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
