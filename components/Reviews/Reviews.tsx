import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { ReviewType } from '../../types';
import Review from './Review';

const Reviews: FC<{ reviews: ReviewType[] }> = ({ reviews }) => {
  console.log(reviews)
  return (
    <View style={styles.reviewsContainer}>
      {reviews?.map(({ id, title, username }: ReviewType) => (
        <Review key={title} id={id} title={title} username={username} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  reviewsContainer: {
    marginTop: 12,
    paddingHorizontal: 60,
  },
});

export default Reviews;
