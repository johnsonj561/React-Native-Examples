import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as types from './types';

export const emailChanged = (text) => ({
  type: types.EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: types.PASSWORD_CHANGED,
  payload: text
});

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER });
  firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then(user => dispatchLoginSuccess(dispatch, user))
    .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password))
    .then(user => dispatchLoginSuccess(dispatch, user))
    .catch(() => dispatchLoginFail(dispatch));
};

const dispatchLoginSuccess = (dispatch, payload) => {
  dispatch({ type: types.LOGIN_USER_SUCCESS, payload });
  Actions.main();
};

const dispatchLoginFail = (dispatch) => {
  dispatch({ type: types.LOGIN_USER_FAIL });
};
