import * as types from '../actions/types';

const DEFAULT_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case types.LOGIN_USER:
      return { ...state, error: '', loading: true };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...DEFAULT_STATE, user: action.payload };
    case types.LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false };
    default:
      return state;
  }
};
