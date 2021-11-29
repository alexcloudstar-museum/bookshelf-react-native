import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../constants/colors';
import * as authActions from '../../store/actions/authActions';

const Auth: FC<{ isSignup: boolean; navigation: any }> = ({
  isSignup,
  navigation,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>();
  const [formState, setFormState] = useState<{
    email?: string;
    password?: string;
  }>({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onChangeText = (key: string, value: string) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const onPress = async () => {
    let action;
    if (isSignup) {
      action =
        formState.email &&
        formState.password &&
        authActions.signup(formState.email, formState.password);
    }

    if (!isSignup) {
      action =
        formState.email &&
        formState.password &&
        authActions.login(
          formState.email,
          formState.password
        );
    }

    setError(null);
    setIsLoading(true);

    try {
      await dispatch(action);
      navigation.replace('MainScreen');
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (error) {
    Alert.alert('An error occurred!', error, [
      { text: 'Okay', onPress: () => setError(null) },
    ]);
  }

  if(isLoading) {
    return <ActivityIndicator size="large" color={colors.primary} />
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={50}
      style={styles.container}
    >
      <View style={styles.formControl}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={formState.email}
          autoCapitalize='none'
          onChangeText={onChangeText.bind(this, 'email')}
        />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={formState.password}
          autoCapitalize='none'
          secureTextEntry
          onChangeText={onChangeText.bind(this, 'password')}
        />
      </View>
      <Button title={isSignup ? 'Register' : 'Login'} onPress={onPress} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  formControl: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
  },
  input: {
    width: '50%',
    marginVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});

export default Auth;
