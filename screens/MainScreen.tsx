import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MainScreen = (props: any) => (
  <View style={styles.container}>
    <Text>Main Screen</Text>
    <Button
      title='Go to Book List Screen'
      onPress={() => props.navigation.navigate('BooksListScreen')}
    />
  </View>
);

export const screenOptions = (navData: any) => {
  return {
    headerTitle: 'Home',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
