import { BookType } from '../../types';
import {
  CREATE_BOOK,
  DELETE_BOOK,
  SET_BOOK,
  UPDATE_BOOK,
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
      const bookIndex = state.userBooks.findIndex(
        book => book.id === action.bid
      );

      const updatedBook: BookType = {
        id: action.bookData.id,
        title: action.bookData.title,
        imageUrl: action.bookData.imageUrl,
        ownerId: action.bookData.ownerId,
        rating: action.bookData.rating,
        reviews: action.bookData.reviews,
      };

      const updatedUserBooks = [...state.userBooks];
      updatedUserBooks[bookIndex] = updatedBook;

      const updatedAvailableBooks = [...state.availableBooks];
      updatedAvailableBooks[bookIndex] = updatedBook;

      return {
        ...state,
        availableBooks: updatedAvailableBooks,
        userBooks: updatedUserBooks,
      };
    default:
      return state;
  }
};
