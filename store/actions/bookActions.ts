import { env } from '../../env';
import { BookType, ReviewType } from '../../types';

export const DELETE_BOOK = 'DELETE_BOOK';
export const CREATE_BOOK = 'CREATE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const SET_BOOK = 'SET_BOOK';

export const fetchBooks = () => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;

    try {
      const response = await fetch(`${env.firebaseRDURL}/books.json`);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();

      const loadedBooks: BookType[] = [];

      for (const key in resData) {
        loadedBooks.push({
          id: key,
          ownerId: resData[key].ownerId,
          title: resData[key].title,
          imageUrl: resData[key].imageUrl,
          rating: resData[key].rating,
          reviews: resData[key].reviews,
        });
      }
      dispatch({
        type: SET_BOOK,
        books: loadedBooks,
        userBooks: loadedBooks.filter(
          (book: BookType) => book.ownerId === userId
        ),
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
};

export const createBook = (
  title: string,
  imageUrl: string,
  rating: number,
  reviews: ReviewType[]
) => {
  return async (dispatch: any, getState: any) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    const response = await fetch(
      `${env.firebaseRDURL}/books.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          imageUrl,
          rating,
          reviews,
          ownerId: userId,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_BOOK,
      bookData: {
        id: resData.name,
        title,
        imageUrl,
        rating,
        reviews,
        ownerId: userId,
      },
    });
  };
};
