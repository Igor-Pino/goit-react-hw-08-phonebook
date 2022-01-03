import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import s from './Home.module.css';

export default function Home() {
  return (
    <div className={s.container}>
      <h1 className={s.header}>Welcome</h1>
      <p className={s.content}>Phonebook is an app for you contacts</p>
      <Button variant="contained" type="submit" className={s.button}>
        <NavLink to="/contacts">Lets start</NavLink>
      </Button>
    </div>
  );
}
