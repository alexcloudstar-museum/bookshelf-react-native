import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { isSmallerScreen } from '../../helpers/screenDimension';
import { ReviewType } from '../../types';

const Review: FC<ReviewType> = ({ title, username }) => (
  <View style={styles.container}>
    <Text style={styles.reviewUsername}>
      {username && title && (
        <>
          {username}: <Text style={styles.reviewTitle}>{title}</Text>
        </>
      )}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  reviewUsername: {
    fontSize: isSmallerScreen ? 14 : 22,
    fontWeight: '700',
  },
  reviewTitle: {
    fontSize: isSmallerScreen ? 12 : 18,
    marginTop: 10,
    fontWeight: '500',
  },
});

export default Review;
