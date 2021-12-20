import { useState } from 'react';
import ShortId from 'shortid';
import { useAddContactMutation } from '../../redux/contactSlice';
import PropTypes from 'prop-types';

function ContactInput({ data }) {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const nameInputId = ShortId.generate();
  const numberInputId = ShortId.generate();

  const inputContact = { name, phone };

  const [addContact, { isLoading }] = useAddContactMutation();

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

  const checkContactName = newContact => {
    if (data.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    addContact(inputContact);
  };

  const handelSubmit = e => {
    e.preventDefault();
    checkContactName(inputContact);
    reset();
  };

  return (
    <form onSubmit={handelSubmit}>
      <label id={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={nameInputId}
          onChange={handelChange}
        />
      </label>
      <label id={numberInputId}>
        Phone
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={phone}
          id={numberInputId}
          onChange={handelChange}
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'wait..' : 'add contact'}
      </button>
    </form>
  );
}

ContactInput.propTypes = {
  data: PropTypes.array,
};

export default ContactInput;
