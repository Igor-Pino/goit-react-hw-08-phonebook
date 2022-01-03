import { Routes, Route } from 'react-router';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from '@mui/material/Container';
import Loader from './components/FallbackLoader';
import Skeleton from './components/ContactBookSkeleton';
import { PrivateRouteContact } from './Routes/PrivateRoute';
import { authOperations, authSelectors } from './Redux/Auth';

const Home = lazy(() => import('./Pages/HomePage.js'));
const LoginForm = lazy(() => import('./Pages/LoginPage.js'));
const Registration = lazy(() => import('./Pages/RegisterPage.js'));
const Contacts = lazy(() => import('./Pages/ContactsPage.js'));

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isFetchingCurrentUser ? (
        <Skeleton />
      ) : (
        <>
          <AppBar />
          <Container maxWidth="sm">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="" element={<PrivateRouteContact />}>
                  <Route path="/contacts" element={<Contacts />} />
                </Route>

                <Route
                  path="/login"
                  element={isLoggedIn ? <Navigate to="/contacts" /> : <LoginForm />}
                />
                <Route path="/registration" element={<Registration />} />
              </Routes>
            </Suspense>
          </Container>
        </>
      )}
    </div>
  );
}
