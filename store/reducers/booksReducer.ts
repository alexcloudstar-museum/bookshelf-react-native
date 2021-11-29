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
    default:
      return state;
  }
};
