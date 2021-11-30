import { BookType } from '../../types';
import {
  CREATE_BOOK,
  DELETE_BOOK,
  SET_BOOK,
  UPDATE_BOOK,
  UPDATE_BOOK_RATING,
  UPDATE_BOOK_REVIEWS,
} from '../actions/bookActions';
import { ActionType } from '../types';

export type BooksState = { availableBooks: BookType[]; userBooks: BookType[] };

const initialState: BooksState = {
  availableBooks: [],
  userBooks: [],
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_BOOK:
      return {
        availableBooks: action.books,
        userBooks: action.userBooks,
      };
    case DELETE_BOOK:
      return {
        ...state,
        userBooks: state.userBooks.filter(book => book.id !== action.bid),
        availableBook: state.availableBooks.filter(
          book => book.id !== action.bid
        ),
      };
    case CREATE_BOOK:
      const newBook: BookType = {
        id: action.bookData.id,
        title: action.bookData.title,
        imageUrl: action.bookData.imageUrl,
        ownerId: action.bookData.ownerId,
        rating: action.bookData.rating,
        reviews: action.bookData.reviews,
      };

      return {
        ...state,
        availableBooks: [...state.availableBooks, newBook],
        userBooks: [...state.userBooks, newBook],
      };
    case UPDATE_BOOK:
      const userBookIndex = state.userBooks.findIndex(
        book => book.id === action.bid
      );

      const userUpdatedBook: BookType = {
        id: action.bookData.id,
        title: action.bookData.title,
        imageUrl: action.bookData.imageUrl,
        ownerId: action.bookData.ownerId,
        rating: action.bookData.rating,
        reviews: action.bookData.reviews,
      };

      const updatedUserBooks = [...state.userBooks];
      updatedUserBooks[userBookIndex] = userUpdatedBook;

      const updatedAvailableBooks = [...state.availableBooks];
      updatedAvailableBooks[userBookIndex] = userUpdatedBook;

      return {
        ...state,
        availableBooks: updatedAvailableBooks,
        userBooks: updatedUserBooks,
      };
    case UPDATE_BOOK_RATING:
      const ratingBookIndex = state.availableBooks.findIndex(
        book => book.id === action.bid
      );

      const availableBook = state.availableBooks.find(
        book => book.id === action.bid
      );

      if (availableBook) {
        const ratingUpdatedBook: BookType = {
          id: availableBook.id,
          title: availableBook.title,
          imageUrl: availableBook.imageUrl,
          ownerId: availableBook.ownerId,
          rating: action.bookData.rating,
          reviews: availableBook.reviews,
        };

        const updatedRatingBooks = [...state.availableBooks];
        updatedRatingBooks[ratingBookIndex] = ratingUpdatedBook;

        return {
          ...state,
          availableBooks: updatedRatingBooks,
        };
      }
    case UPDATE_BOOK_REVIEWS:
      const reviewsBookIndex = state.availableBooks.findIndex(
        book => book.id === action.bid
      );
      const reviewsAvailableBook = state.availableBooks.find(
        book => book.id === action.bid
      );

      if (reviewsAvailableBook) {
        const reviewsUpdatedBook: BookType = {
          id: reviewsAvailableBook.id,
          title: reviewsAvailableBook.title,
          imageUrl: reviewsAvailableBook.imageUrl,
          ownerId: reviewsAvailableBook.ownerId,
          rating: reviewsAvailableBook.rating,
          reviews: reviewsAvailableBook
            ? [...reviewsAvailableBook.reviews, action.bookData.review]
            : [action.bookData.reviews],
        };

        const updatedReviewsBooks = [...state.availableBooks];
        updatedReviewsBooks[reviewsBookIndex] = reviewsUpdatedBook;

        return {
          ...state,
          availableBooks: updatedReviewsBooks,
        };
      }

    default:
      return state;
  }
};
