import { Routes, Route } from 'react-router';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './components/AppBar';
import Container from '@mui/material/Container';
import Loader from './components/FallbackLoader';
import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublickRoute';
import { authOperations, authSelectors } from './Redux/Auth';

const LoginForm = lazy(() => import('./Pages/LoginPage.js'));
const Registration = lazy(() => import('./Pages/RegisterPage.js'));
const Contacts = lazy(() => import('./Pages/ContactsPage.js'));
const Home = lazy(() => import('./Pages/HomePage.js'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Container maxWidth="sm">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/contacts" element={<PrivateRoute />}>
              <Route path="" element={<Contacts />} />
            </Route>

            <Route path="/login" element={<LoginForm />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

{
  /* <div>
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
</div> */
}

{
  /* <PublicRoute exact path="/">
<Home/>
</PublicRoute>
<PublicRoute exact path="/registration" restricted>
<Registration />
</PublicRoute>
<PublicRoute exact path="/login" redirectTo="/todos" restricted>
<LoginForm />
</PublicRoute>
<PrivateRoute path="/contacts" redirectTo="/login">
<Contacts/>
</PrivateRoute>      */
}
