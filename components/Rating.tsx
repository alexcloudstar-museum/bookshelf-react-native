import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch } from 'react-redux';
import { isSmallerScreen } from '../helpers/screenDimension';
import * as bookActions from '../store/actions/bookActions';

const Rating: FC<{ bookId: string; rating: number; disabled?: boolean }> = ({
  bookId,
  rating,
  disabled = false,
}) => {
  const dispatch = useDispatch();

  const onFinishRating = (rating: number) => {
    dispatch(bookActions.updateRating(bookId, rating));
  };

  return (
    <View style={styles.ratingContainer}>
      <AirbnbRating
      size={isSmallerScreen ? 20 : 30}
        showRating={false}
        onFinishRating={onFinishRating}
        defaultRating={rating || 0}
        isDisabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    marginVertical: 15,
    alignItems: 'flex-start',
  },
});

export default Rating;
