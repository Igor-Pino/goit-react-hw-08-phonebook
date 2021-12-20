import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactSlice';
import contactBookReducer from './reducers/contacrBookReducer';

const store = configureStore({
  reducer: {
    contactBook: contactBookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
