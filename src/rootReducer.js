import { combineReducers } from 'redux';
import matchReducer from './containers/Match/reducer';

const rootReducer = combineReducers({
  match: matchReducer,
});

export default rootReducer;
