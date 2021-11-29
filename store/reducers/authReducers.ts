import { AUTHENTICATE, LOGOUT } from '../actions/authActions';
import { ActionType } from '../types';

export type AuthState = {
  token: string | null;
  userId: string | null;
};

const initialState: AuthState = {
  token: null,
  userId: null,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
