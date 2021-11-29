import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { colors } from '../../constants/colors';
import * as bookActions from '../../store/actions/bookActions';

const AddBookComponent: FC<{ navigation: any }> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>();
  const [formState, setFormState] = useState<{
    title: string;
    imageUrl: string;
  }>({
    title: '',
    imageUrl: '',
  });

  const onChangeText = (key: string, value: string) => {

    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const dispatch = useDispatch();

  const onAddBook = useCallback(async () => {
    setError(null);
    setIsLoading(false);


    console.log(formState)

    try {
      await dispatch(
        bookActions.createBook(formState.title, formState.imageUrl, 0, [])
      );

      navigation.goBack();
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

  if (isLoading)
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
    );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={50}
    >
      <View style={styles.formControl}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          onChangeText={onChangeText.bind(this, 'title')}
          style={styles.input}
        />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Image:</Text>
        <TextInput
          onChangeText={onChangeText.bind(this, 'imageUrl')}
          style={styles.input}
        />
      </View>
      <Button title='Add Book' onPress={onAddBook} />
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
  centered: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default AddBookComponent;
