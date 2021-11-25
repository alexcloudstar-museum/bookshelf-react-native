import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen, { screenOptions as screenOptionsMainScreen } from '../screens/MainScreen';
import BooksListScreen from '../screens/BooksListScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainScreen' component={MainScreen} options={screenOptionsMainScreen} />
      <Stack.Screen name='BooksListScreen' component={BooksListScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
