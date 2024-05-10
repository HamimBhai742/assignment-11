import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Root from "../layout/Root";
import Login from "../Components/Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;