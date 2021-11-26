import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen, { screenOptions as screenOptionsProfileScreen } from '../screens/ProfileScreen';
import MainStackNavigation from './MainStackNavigation';
import { screenOptions  } from '../screens/MainScreen';


const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainDrawerNavigation =() => (
	<Drawer.Navigator screenOptions={screenOptionStyle}>
		<Drawer.Screen name="Main" component={MainStackNavigation} />
		<Drawer.Screen name="Profile" component={ProfileScreen}  />
	</Drawer.Navigator>
)

export default MainDrawerNavigation
