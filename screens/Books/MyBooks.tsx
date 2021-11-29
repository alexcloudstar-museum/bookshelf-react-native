import { FontAwesome5 } from '@expo/vector-icons';
import React, { FC } from 'react';
import {
  StyleSheet, Text, TouchableWithoutFeedback, View
} from 'react-native';
import { BookType } from '../../types';

type MyBooksProps = {
  books?: BookType[];
  navigation: any;
};

const MyBooks: FC<MyBooksProps> = ({ books, navigation }) => {
  if (!books) {
    return (
      <View style={styles.container}>
        <Text style={styles.noBooksText}>No books, maybe start add some</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('AddBook')}
        >
          <Text style={styles.addBookBtn}>Add Book</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>My Books</Text>
    </View>
  );
};

export const screenOptions = (navData: any) => {
  return {
    headerTitle: 'My Books',
    headerRight: () => (
      <FontAwesome5
        name='plus'
        size={24}
        color='white'
        style={styles.addIcon}
        onPress={() => navData.navigation.navigate('AddBook')}
      />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBooksText: {
    fontSize: 25,
    textAlign: 'center',
  },
  addBookBtn: {
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    backgroundColor: '#424242',
    shadowColor: '#424242',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addIcon: {
    paddingHorizontal: 20,
  },
});

export default MyBooks;
