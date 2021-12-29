import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contacts-operations';
import { filterChange } from './contacts-actions';

const contacts = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [filterChange]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [addContact.rejected]: (_, action) => action.payload,
  [deleteContact.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
  [addContact.pending]: () => null,
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
