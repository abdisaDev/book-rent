import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./global.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
