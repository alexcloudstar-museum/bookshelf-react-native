import { AuthState } from './reducers/authReducers';
import { BooksState } from './reducers/booksReducer';

export type ReduxState = {
  auth: AuthState;
  books: BooksState;
};

export type ActionType = {
  type: string;
  [key: string]: any;
};
