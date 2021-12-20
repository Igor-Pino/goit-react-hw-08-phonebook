import React from 'react';
import ContactItem from '../ContactItem';
import s from './ContactsList.module.scss';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/PhoneBook-selectors';
import PropTypes from 'prop-types';

const ContactsList = ({ data, isFetching }) => {
  const filterValue = useSelector(getFilter);
  const normalizedFilter = filterValue.toLowerCase();

  const visibleContacts =
    data && data.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <div>
      {isFetching ? <h2 className={s.title}>loading...</h2> : <h2 className={s.title}>Contacts</h2>}

      {data && (
        <ul className={s.contact_list}>
          {visibleContacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

ContactsList.propTypes = {
  data: PropTypes.array,
  isFetching: PropTypes.bool,
};

export default ContactsList;
