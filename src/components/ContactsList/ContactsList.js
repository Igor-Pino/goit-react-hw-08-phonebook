import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../../Redux/Contacts/contacts-operations';
import { contactFilter } from '../../Redux/Contacts/contacts-selectors';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContacts = () => dispatch(getContacts());

    fetchContacts();
  }, [dispatch]);

  const onDeleteContact = id => dispatch(deleteContact(id));

  const contacts = useSelector(contactFilter);

  return (
    <ul className={s.contactsList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

ContactsList.defaultProps = {
  contacts: [],
};

export default ContactsList;
