import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AddBookComponent from '../../components/Books/AddBookComponent'

const AddBook = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Please fill the inputs below</Text>
			<AddBookComponent/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontWeight: '500',
		fontSize: 20,
	}
})

export const screenOptions = {
	headerTitle: 'Add Book',
}

export default AddBook
