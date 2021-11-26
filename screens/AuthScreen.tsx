import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import Login from '../components/User/Login';
import Register from '../components/User/Register';
import { colors } from '../constants/colors';

const AuthScreen = (props: any) => {
	const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please {isLogin ? 'Login' : 'Register'}</Text>
			{isLogin ? <Login /> : <Register />}
			<Button title={isLogin ? 'Switch to Register' : 'Switch to Login'} onPress={() => setIsLogin(!isLogin)} color={Platform.OS === 'android' ? '#fff' : colors.secondary } />
    </View>
  );
};

export const screenOptions = (navData: any) => {
  return {
    headerTitle: 'Auth Screen',
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
	}
});

export default AuthScreen;