import React from 'react';
import { useDeleteContactMutation } from '../../redux/contactSlice';
import PropTypes from 'prop-types';
import s from './ContactItem.module.scss';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.contactItem}>
      <table>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => deleteContact(id)} disabled={isDeleting} className={s.contact_btn}>
        {isDeleting ? 'O' : 'X'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
