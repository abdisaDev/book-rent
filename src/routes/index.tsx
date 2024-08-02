import { RouteObject } from "react-router-dom";

export const routes: RouteObject[]  = [{
    path: "/admin",
    element: <h1>Admin</h1>,
    children: [
        {
            path: "child",
            element: <h2>Child</h2>
        }
    ]
}]