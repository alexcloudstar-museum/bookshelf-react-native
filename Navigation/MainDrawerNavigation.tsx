import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen, { screenOptions as screenOptionsProfileScreen } from '../screens/ProfileScreen';


const Drawer = createDrawerNavigator();

const MainDrawerNavigation =() => (
	<Drawer.Navigator>
		<Drawer.Screen name="Profile" component={ProfileScreen} options={screenOptionsProfileScreen} />
	</Drawer.Navigator>
)

export default MainDrawerNavigation
