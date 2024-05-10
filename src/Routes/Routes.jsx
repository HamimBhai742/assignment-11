import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Root from "../layout/Root";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import MyQueries from "../Components/Pages/MyQueries/MyQueries";

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
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-queries',
                element: <MyQueries></MyQueries>
            }
        ]
    },
]);

export default router;