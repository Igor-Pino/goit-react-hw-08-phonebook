import { createAction } from '@reduxjs/toolkit';

const getContactRequest = createAction('contacts/getContactRequest');
const getContactSuccess = createAction('contacts/getContactSuccess');
const getContactError = createAction('contacts/getContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');
const deleteContact = createAction('contacts/delete');
const filterChange = createAction('contacts/changeFilter');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

export {
  getContactError,
  getContactRequest,
  getContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addContactRequest,
  deleteContact,
  filterChange,
  addContactSuccess,
  addContactError,
};
