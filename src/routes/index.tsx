import { RouteObject } from 'react-router-dom';
import SideBar from '../components/sidebar';
import App from '../App';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'admin',
        element: <SideBar />,
        children: [
          {
            path: 'child',
            element: <h2>Child</h2>,
          },
        ],
      },
    ],
  },
];
