import { RouteObject } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layout/main';
import Statistics from '../components/statistics';

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
            path: 'owners',
            element: <Statistics />,
          },
          {
            path: 'books',
            element: <h2>Child</h2>,
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
