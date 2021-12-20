import { useGetContactsQuery } from './redux/contactSlice';
import ContactInput from './components/ContactInput';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/ContactFilter';
import s from './styles/base.module.scss';

function App() {
  const { data, isFetching, error } = useGetContactsQuery();

  return (
    <div className={s.main_container}>
      <h1 className={s.title}>Phonebook</h1>

      <ContactInput data={data} />

      <Filter />

      {error ? `${error.message}` : <ContactsList data={data} isFetching={isFetching} />}
    </div>
  );
}

export default App;
