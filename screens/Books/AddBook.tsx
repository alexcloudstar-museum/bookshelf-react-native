import React, { useState } from 'react';
import {
  ActivityIndicator, StyleSheet, Text,
  View
} from 'react-native';
import AddBookComponent from '../../components/Books/AddBookComponent';
import { colors } from '../../constants/colors';

const AddBook = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading)
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please fill the inputs below</Text>
      <AddBookComponent
        navigation={props.navigation}
        isEditBook={props.route.params?.isEditBook}
        bookId={props.route.params?.bookId}
        title={props.route.params?.title}
        imageUrl={props.route.params?.imageUrl}
        setIsLoading={setIsLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
  centered: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export const screenOptions = (navData: any) => {
  return {
    headerTitle: navData.route.params?.isEditBook ? 'Edit Book' : 'Add Book',
  };
};

export default AddBook;
