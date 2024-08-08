import { RouteObject } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layout/main';
import AdminDashBoard from '../pages/dashboard';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'admin',
        element: <MainLayout />,
        children: [
          {
            path: 'dashboard',
            element: <AdminDashBoard />,
          },
          {
            path: 'books',
            element: <h2>Child</h2>,
          },
          {
            path: 'books',
            element: <h2>Child</h2>,
          },
        ],
      },
    ],
  },
];
