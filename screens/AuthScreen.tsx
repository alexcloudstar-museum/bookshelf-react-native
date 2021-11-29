import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Auth from '../components/User/Auth';
import { colors } from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/authActions';

const AuthScreen = ({ navigation }: any) => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');

      if (!userData) {
        navigation.navigate('AuthScreen');
        return;
      }

      const parsedData = JSON.parse(userData);

      const { token, userId, expirationTime } = parsedData;

      const expirationDate = new Date(expirationTime);

      if (expirationDate <= new Date() || !token || !userId) {
        navigation.navigate('AuthScreen');
        return;
      }

      const newExpirationDate = expirationDate.getTime() - new Date().getTime();

      navigation.navigate('MainScreen');
      dispatch(authActions.authenticate(token, userId, newExpirationDate));
    };

    tryLogin();
  }, [dispatch]);

  if (isLoading)
    return <ActivityIndicator size='large' color={colors.primary} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Please {!isSignup ? 'Login' : 'Register'}
      </Text>
      <Auth
        isSignup={isSignup}
        navigation={navigation}
        setIsLoading={setIsLoading}
      />
      <View style={{ marginVertical: 10 }}>
        <Button
          title={!isSignup ? 'Switch to Register' : 'Switch to Login'}
          onPress={() => setIsSignup(!isSignup)}
          color={colors.secondary}
        />
      </View>
    </View>
  );
};

export const screenOptions = (navData: any) => {
  return {
    headerTitle: 'Hi there, please login/register 👋🏻',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 25,
    color: colors.primary,
  },
});

export default AuthScreen;
