import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

type BookProps = {
  onPress: () => void;
  imageUrl: string;
  title: string;
};

const Book: FC<BookProps> = ({ onPress, imageUrl, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: imageUrl,
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
