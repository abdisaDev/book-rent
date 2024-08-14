import { RouteObject } from 'react-router-dom';
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
        path: 'app',
        element: <MainLayout />,
        children: [
          {
            path: 'dashboard',
            element:
              user?.role.toLowerCase() === 'owner' ? (
                <OwnerDashBoard />
              ) : (
                <AdminDashBoard />
              ),
          },
          {
            path: 'owners',
            element: <Owners />,
          },
          {
            path: 'books',
            element: <Books />,
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
