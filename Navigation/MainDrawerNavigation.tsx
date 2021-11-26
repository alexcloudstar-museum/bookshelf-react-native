import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import ProfileScreen from '../screens/ProfileScreen';


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
		<Drawer.Screen name='Home' component={Home} />
		<Drawer.Screen name="Profile" component={ProfileScreen}  />
	</Drawer.Navigator>
)

export default MainDrawerNavigation
