import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { BookType, ReviewType } from '../../types';
import * as bookActions from '../../store/actions/bookActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usernames } from '../../data/users';
import { ReduxState } from '../../store/types';

const AddReview: FC<{
  navigation: any;
  bookId: string;
  reviews: ReviewType[];
}> = ({ navigation, bookId, reviews }) => {
  const currentBook: BookType | undefined = useSelector((state: ReduxState) =>
    state.books.availableBooks.find((book: BookType) => book.id === bookId)
  );
  const dispatch = useDispatch();
  const userIdRef = useRef<string>('');
  const [formState, setFormState] = useState<ReviewType>({
    id: '',
    title: '',
    username: '',
  });

  const onChangeText = (key: keyof ReviewType, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

  useEffect(() => {
    const getUser = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) return;

      const parsedData = JSON.parse(userData);

      const { userId } = parsedData;
      userIdRef.current = userId;
    };

    getUser();
  }, []);

  useEffect(() => {
    setFormState({
      ...formState,
      id: userIdRef.current,
      username: usernames[Math.floor(Math.random() * usernames.length)],
    });
  }, [userIdRef.current]);

  const onAddReview = () => {
    const updatedReviews = reviews ? [...reviews, formState] : [formState];
    dispatch(bookActions.updateReview(bookId, updatedReviews));

    currentBook &&
      navigation.navigate('BookDetails', {
        bookId,
        title: currentBook.title,
        imageUrl: currentBook.imageUrl,
        rating: currentBook.rating,
        reviews: updatedReviews,
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={50}
    >
      <View style={styles.formControl}>
        <Text style={styles.label}>Review:</Text>
        <TextInput
          value={formState.title}
          onChangeText={onChangeText.bind(this, 'title')}
          style={styles.input}
        />
      </View>
      <Button title='Add Review' onPress={onAddReview} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  formControl: {
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#575757',
    marginVertical: 5,
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default AddReview;
