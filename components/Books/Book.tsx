import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type BookProps = {
  onPress: () => void;
  imageSource: string;
  title: string;
};

const Book: FC<BookProps> = ({ onPress, imageSource, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: 'https://s3.comisarul.ro/41545b913ee440c909576851876a8eb9.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ratingContainer}>
        <FontAwesome5 name='star' size={24} color='black' />
        <FontAwesome5 name='star' size={24} color='black' />
        <FontAwesome5 name='star' size={24} color='black' />
        <FontAwesome5 name='star' size={24} color='black' />
        <FontAwesome5 name='star' size={24} color='black' />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 260,
    height: 300,
    resizeMode: 'contain',
    margin: 8,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '700',
    letterSpacing: 0.7,
  },
  ratingContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
});

export default Book;
