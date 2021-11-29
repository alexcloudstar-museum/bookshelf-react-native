import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthScreen, {
  screenOptions as screenOptionsAuthScreen
} from '../screens/AuthScreen';
import AddBook, { screenOptions as screenOptionsAddBook } from '../screens/Books/AddBook';
import BookDetails, { screenOptions as screenOptionsBookDetails } from '../screens/Books/BookDetails';
import MainDrawerNavigation from './MainDrawerNavigation';


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};



const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name='AuthScreen'
        component={AuthScreen}
        options={screenOptionsAuthScreen}
      />
      <Stack.Screen
        name='MainScreen'
        component={MainDrawerNavigation}
        options={{ headerShown: false }}
      />
     <Stack.Screen name="BookDetails" component={BookDetails} options={screenOptionsBookDetails} />
     <Stack.Screen name="AddBook" component={AddBook} options={screenOptionsAddBook} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
