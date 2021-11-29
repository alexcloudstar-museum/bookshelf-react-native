import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ReviewType } from '../../types';
import Rating from '../Rating';

const Review: FC<ReviewType> = ({ id, title, username }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.reviewUsername}>
        {username}: <Text style={styles.reviewTitle}>{title}</Text>
      </Text>
      <Rating rating={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.25,
  },
  reviewUsername: {
    fontSize: 22,
    fontWeight: '700',
  },
  reviewTitle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '500',
  },
});

export default Review;
