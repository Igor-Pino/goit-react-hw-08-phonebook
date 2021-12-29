import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';

import AppBar from './components/AppBar';
import Container from '@mui/material/Container';
import Loader from './components/FallbackLoader';

const LoginForm = lazy(() => import('./Pages/LoginPage.js'));
const Registration = lazy(() => import('./Pages/RegisterPage.js'));
const Contacts = lazy(() => import('./Pages/ContactsPage.js'));
const Home = lazy(() => import('./Pages/HomePage.js'));

export default function App() {
  return (
    <div>
      <AppBar />
      <Container maxWidth="sm">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}
