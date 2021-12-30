import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/Contacts/contacts-operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ShortId from 'shortid';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function ContactInput() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = ShortId.generate();

  const inputContact = { name, number };

  const stateContacts = useSelector(state => state.contactBook.contacts);

  const dispatch = useDispatch();

  const onSubmit = () => dispatch(addContact(inputContact));

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handelChange = e => {
    setName(e.target.value);
  };

  const compareContacts = newContact => {
    if (
      stateContacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
    ) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    onSubmit(newContact);
  };

  const handelSubmit = e => {
    e.preventDefault();
    compareContacts(inputContact);
    reset();
  };

  const showAddButton = name !== '' && number !== '';
  const showError = name !== '' && !name.match('[^abc]');
  const phoneChange = phone => {
    setNumber(phone);
    console.log(number);
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      validate
      autoComplete="off"
      onSubmit={handelSubmit}
    >
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        required
        value={name}
        id={nameInputId}
        onChange={handelChange}
        error={showError}
        helperText={showError ? 'input correct name' : ''}
      />

      <PhoneInput country={'ua'} value={number} onChange={phoneChange} />

      <Button variant="contained" type="submit" endIcon={<SaveIcon />} disabled={!showAddButton}>
        Add contact
      </Button>
    </Box>
  );
}

export default ContactInput;
