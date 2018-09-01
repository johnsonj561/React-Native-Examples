import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as types from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: types.EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => dispatch({ type: types.EMPLOYEE_CREATE }))
      .then(() => Actions.pop());
  };
};

export const employeesFetch = () => (dispatch) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      const payload = snapshot.val();
      dispatch({ type: types.EMPLOYEE_FETCH_SUCCESS, payload });
    });
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  const ref = `/users/${currentUser.uid}/employees/${uid}`;
  return (dispatch) => {
    firebase.database().ref(ref)
      .set({ name, phone, shift })
      .then(() => dispatch({ type: types.EMPLOYEE_SAVE_SUCCESS }))
      .then(() => Actions.pop());
  };
};

export const employeeDelete = ({ uid }) => {
  const currentUser = firebase.auth();
  const ref = `/users/${currentUser.uid}/employees/${uid}`;
  return () => {
    firebase.database().ref(ref).remove()
      .then(() => console.log('removed'))
      .catch((err) => console.log('error deleting', err))
      .then(() => Actions.pop());
  };
};
