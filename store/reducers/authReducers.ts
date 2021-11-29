import { AUTHENTICATE, LOGOUT } from '../actions/authActions';

type AuthState = {
  token: string | null;
  userId: string | null;
};

type AuthAction = {
  type: string;
  [key: string]: any;
};

const initialState: AuthState = {
  token: null,
  userId: null,
};

export default (state = initialState, action: AuthAction) => {
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
