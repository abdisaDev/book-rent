import { RouteObject } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/main";
import AdminDashBoard from "../pages/dashboard";
import SignUp from "../pages/auth/signup";
import Owners from "../pages/owners";
import AuthLayout from "../layout/auth";
import SignIn from "../pages/auth/signin";
import BookUploadPage from "../pages/book-upload-page";
import PopupModal from "../components/popup-modal";

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
            element: <BookUploadPage />,
          },
          {
            path: "modal",
            element: <PopupModal />,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "register",
            element: <SignUp />,
          },
          {
            path: "login",
            element: <SignIn />,
          },
        ],
      },
    ],
  },
];
