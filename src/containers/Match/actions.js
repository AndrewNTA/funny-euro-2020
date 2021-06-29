import { SET_VALUE } from './constants';

export const setValue = payload => ({
  type: SET_VALUE,
  payload,
});
