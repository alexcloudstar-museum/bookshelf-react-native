import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import MainNavigation from './Navigation/MainNavigation';
import authReducers from './store/reducers/authReducers';
import booksReducer from './store/reducers/booksReducer';

const rootReducer = combineReducers({
  auth: authReducers,
  books: booksReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
