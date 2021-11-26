import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen, { screenOptions as screenOptionsMainScreen } from '../screens/MainScreen';
import BooksListScreen from '../screens/BooksListScreen';
import AuthScreen, { screenOptions as screenOptionsAuthScreen} from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='AuthScreen' component={AuthScreen} options={screenOptionsAuthScreen} />
      <Stack.Screen name='MainScreen' component={MainScreen} options={screenOptionsMainScreen} />
      <Stack.Screen name='BooksListScreen' component={BooksListScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
