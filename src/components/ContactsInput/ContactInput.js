import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/Contacts/contacts-operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SaveIcon from '@mui/icons-material/Save';

import ShortId from 'shortid';

function ContactInput() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = ShortId.generate();
  const numberInputId = ShortId.generate();

  const inputContact = { name, number };

  const stateContacts = useSelector(state => state.contactBook.contacts);

  const dispatch = useDispatch();

  const onSubmit = () => dispatch(addContact(inputContact));

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handelChange = e => {
    const inputName = e.target.name;
    switch (inputName) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
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

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handelSubmit}
    >
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        id={nameInputId}
        onChange={handelChange}
      />
      <TextField
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        id={numberInputId}
        onChange={handelChange}
      />
      <Button variant="contained" type="submit" endIcon={<SaveIcon />}>
        Add contact
      </Button>
    </Box>
  );
}

export default ContactInput;
