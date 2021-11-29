import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ReviewType } from '../../types';

const Review: FC<ReviewType> = ({ id, title, username }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.reviewUsername}>
        {username}: <Text style={styles.reviewTitle}>{title}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
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
