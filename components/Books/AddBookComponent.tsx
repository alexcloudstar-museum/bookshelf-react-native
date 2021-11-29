import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const AddBookComponen = () => {
  const onChangeText = (text: string) => {
    console.log(text);
  };

  const onAddBook = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.formControl}>
        <Text style={styles.label}>Title:</Text>
        <TextInput onChangeText={onChangeText} style={styles.input} />
      </View>
      <View style={styles.formControl}>
        <Text style={styles.label}>Image:</Text>
        <TextInput onChangeText={onChangeText} style={styles.input} />
      </View>
      <Button title='Add Book' onPress={onAddBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    width: '60%',
  },
  formControl: {
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#575757',
    marginVertical: 5,
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default AddBookComponen;
