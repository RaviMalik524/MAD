// src/reducers/index.js

import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
  todos,
  // Add other reducers as needed
});

export default rootReducer;
