import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { filterChange } from '../actions/contacts-actions';

const filter = createReducer('', {
  [filterChange]: (_, action) => action.payload,
});

export default combineReducers({
  filter,
});
