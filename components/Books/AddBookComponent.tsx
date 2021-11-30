import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import * as bookActions from '../../store/actions/bookActions';
import { BookType } from '../../types';

type AddBookProps = {
  navigation: any;
  isEditBook?: boolean;
  bookId?: string;
  title?: BookType['title'];
  imageUrl?: BookType['imageUrl'];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddBookComponent: FC<AddBookProps> = ({
  navigation,
  isEditBook,
  bookId,
  title,
  imageUrl,
  setIsLoading,
}) => {
  const [error, setError] = useState<null | string>();
  const [formState, setFormState] = useState<{
    title: string;
    imageUrl: string;
  }>({
    title: title ? title : '',
    imageUrl: imageUrl ? imageUrl : '',
  });

  const onChangeText = (key: keyof BookType, value: string) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const dispatch = useDispatch();

  const onAddBook = useCallback(async () => {
    setError(null);
    setIsLoading(false);

    try {
      setIsLoading(true);
      if (isEditBook && bookId) {
        await dispatch(
          bookActions.updateBook(bookId, formState.title, formState.imageUrl)
        );
      } else {
        await dispatch(
          bookActions.createBook(formState.title, formState.imageUrl, 0, [])
        );
      }

      navigation.navigate('MyBooks');
    } catch (error: any) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [dispatch, formState]);

  useEffect(() => {
    if (error) {
      setIsLoading(false);
      Alert.alert('Error', error, [
        { text: 'OK', onPress: () => setError(null) },
      ]);
    }
  }, [error]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={50}
    >
      <View style={styles.formControl}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          value={formState.title}
          onChangeText={onChangeText.bind(this, 'title')}
          style={styles.input}
        />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Image:</Text>
        <TextInput
          value={formState.imageUrl}
          onChangeText={onChangeText.bind(this, 'imageUrl')}
          style={styles.input}
        />
      </View>
      <Button
        title={isEditBook ? 'Edit Book' : 'Add Book'}
        onPress={onAddBook}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    width: '60%',
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

export default AddBookComponent;
