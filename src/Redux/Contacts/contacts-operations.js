import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = createAsyncThunk('contacts/getContacts', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);

      return data;
    } catch (error) {
      return rejectWithValue(Error.response.data);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export { getContacts, addContact, deleteContact };
