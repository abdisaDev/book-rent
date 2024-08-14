import { Navigate, RouteObject } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layout/main';
import AdminDashBoard from '../pages/dashboard/owner';
import SignUp from '../pages/auth/signup';
import Owners from '../pages/owners';
import AuthLayout from '../layout/auth';
import SignIn from '../pages/auth/signin';
import Books from '../pages/books';
import OwnerDashBoard from '../pages/dashboard/owner';

const user = JSON.parse(localStorage.getItem('user')!);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Navigate to={user ? '/app/dashboard' : '/auth/login'} replace />
        ),
      },
      {
        path: 'app',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: (
              <Navigate to={user ? '/app/dashboard' : '/auth/login'} replace />
            ),
          },
          {
            path: 'dashboard',
            element: user ? (
              user?.role.toLowerCase() === 'owner' ? (
                <OwnerDashBoard />
              ) : (
                <AdminDashBoard />
              )
            ) : (
              <Navigate to={user ? '/app/dashboard' : '/auth/login'} replace />
            ),
          },
          {
            path: 'owners',
            element: user ? (
              <Owners />
            ) : (
              <Navigate to={user ? '/app/owners' : '/auth/login'} replace />
            ),
          },
          {
            path: 'books',
            element: user ? (
              <Books />
            ) : (
              <Navigate to={user ? '/app/books' : '/auth/login'} replace />
            ),
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'register',
            element: <SignUp />,
          },
          {
            path: 'login',
            element: <SignIn />,
          },
        ],
      },
    ],
  },
];
