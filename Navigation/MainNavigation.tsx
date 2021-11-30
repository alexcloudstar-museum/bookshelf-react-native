import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStackNavigation from './MainStackNavigation';

const MainNavigation = () => (
  <NavigationContainer>
    <MainStackNavigation />
  </NavigationContainer>
);

export default MainNavigation;
