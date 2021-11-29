import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import MyBooks from '../screens/MyBooks';


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
		<Drawer.Screen name="My Books" component={MyBooks}  />
	</Drawer.Navigator>
)

export default MainDrawerNavigation
