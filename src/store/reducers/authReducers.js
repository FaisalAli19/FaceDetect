import {
  LOGIN_SUCCESS, LOGIN_PENDING, LOGIN_FAILED, LOGOUT_USER,
} from '../constant';

const initialState = {
  Authenticated: false,
  LoggingIn: false,
  LoggedInFailed: false,
  error: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        LoggingIn: false,
        Authenticated: true,
      };
    case LOGIN_PENDING:
      return { ...state, LoggingIn: true };
    case LOGIN_FAILED:
      return {
        ...state,
        LoggingIn: false,
        LoggedInFailed: true,
        ...payload,
      };
    case LOGOUT_USER:
      return { ...state, Authenticated: false };
    default:
      return state;
  }
};
