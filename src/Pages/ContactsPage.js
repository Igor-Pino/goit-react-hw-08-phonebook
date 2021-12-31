import ContactInput from '../components/ContactsInput';
import ContactsList from '../components/ContactsList/ContactsList';
import { useSelector } from 'react-redux';
import Filter from '../components/ContactsFilter';
import { getLoading } from '../Redux/Contacts/contacts-selectors';

export default function ContactsPage() {
  const loader = useSelector(getLoading);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactInput />
      {loader ? <h2>loading...</h2> : <h2>Contacts</h2>}
      <Filter />

      <ContactsList />
    </div>
  );
}
