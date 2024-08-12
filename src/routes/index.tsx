import { RouteObject } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/main";
import AdminDashBoard from "../pages/dashboard";
import SignUp from "../pages/auth/signup";
import Owners from "../pages/owners";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "app",
        element: <MainLayout />,
        children: [
          {
            path: "dashboard",
            element: <AdminDashBoard />,
          },
          {
            path: "owners",
            element: <Owners />,
          },
          {
            path: "books",
            element: <h2>Child</h2>,
          },
        ],
      },
    ],
  },
];
