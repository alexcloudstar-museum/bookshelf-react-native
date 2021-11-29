import React, { FC } from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { colors } from '../../constants/colors';
import { ReviewType } from '../../types';
import Review from './Review';

const Reviews:FC<{reviews: ReviewType[]}> = ({reviews}) => {
	return (
		<View style={styles.reviewsContainer}>
        {reviews.map(({id, title, username}: ReviewType) => (
          <Review key={id} id={id} title={title} username={username} />
        ))}
      </View>
	)
}

const styles = StyleSheet.create({
  reviewsContainer: {
    marginTop: 12,
    padding: 70,
  },
});


export default Reviews
