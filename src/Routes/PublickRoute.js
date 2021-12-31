import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { authSelectors } from '../Redux/Auth';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  children,
  restricted = false,
  navigateTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <Route {...routeProps}>{shouldRedirect ? <Navigate to={navigateTo} /> : children}</Route>;
}
