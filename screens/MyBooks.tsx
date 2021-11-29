import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProfileScreen = () => {
	return (
		<View>
			<Text>My Books</Text>
		</View>
	)
}

export const screenOptions = (navData: any) => {
	return {
		headerTitle: 'My Books',
	}
}

const styles = StyleSheet.create({})

export default ProfileScreen
