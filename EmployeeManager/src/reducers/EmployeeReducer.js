import * as types from '../actions/types';

const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.EMPLOYEE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
