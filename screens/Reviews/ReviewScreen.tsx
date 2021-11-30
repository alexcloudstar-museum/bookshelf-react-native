import React from 'react';
import { View } from 'react-native';
import AddReview from '../../components/Reviews/AddReview';

const ReviewScreen = (props: any) => {
  const { bookId, reviews } = props.route.params;

  return (
    <View>
      <AddReview
        bookId={bookId}
        reviews={reviews}
        navigation={props.navigation}
      />
    </View>
  );
};

export const screenOptions = {
  headerTitle: 'Add Review 📝',
};

export default ReviewScreen;
