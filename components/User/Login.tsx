import React, { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../constants/colors';

const Login:FC = ({children}) => {
	return (
		<View style={styles.container}>
			<View style={styles.formControl}>
        <Text style={styles.label}>E-mail/username</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input}  />
      </View>
      {children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%'
	},
  formControl: {
    width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
  },
	label: {
		fontSize: 18,
	},
  input: {
		width: '50%',
    marginVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});

export default Login
