import { SET_VALUE } from './constants';

const initialState = {
  detail: null,
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};

export default matchReducer;
