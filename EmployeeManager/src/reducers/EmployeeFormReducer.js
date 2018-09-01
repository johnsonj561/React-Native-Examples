import * as types from '../actions/types';

const DEFAULT_STATE = {
  name: '',
  phone: '',
  shift: 'Wednesday',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case types.EMPLOYEE_CREATE:
      return { ...state, ...DEFAULT_STATE };
    case types.EMPLOYEE_SAVE_SUCCESS:
      return { ...state, ...DEFAULT_STATE };
    default:
      return state;
  }
};
