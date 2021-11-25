import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProfileScreen = () => {
	return (
		<View>
			<Text>Profile</Text>
		</View>
	)
}

export const screenOptions = (navData: any) => {
	return {
		headerTitle: 'Profile',
	}
}

const styles = StyleSheet.create({})

export default ProfileScreen
