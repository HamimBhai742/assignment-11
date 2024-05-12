import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Root from "../layout/Root";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import MyQueries from "../Components/Pages/MyQueries/MyQueries";
import AddQueries from "../Components/Pages/AddQueries/AddQueries";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ViewDetails from "../Components/Pages/ViewDetails/ViewDetails";
import UpdateMyQuries from "../Components/Pages/Update/UpdateMyQuries";
import Queries from "../Components/Pages/Queries/Queries";
import QueryDetails from "../Components/Pages/QueryDetails/QueryDetails";
import PerticularRecommendation from "../Components/Pages/Queries/PerticularRecommendation";

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
                element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/my-queries')
            },
            {
                path: '/add-queries',
                element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
            },
            {
                path: '/view-details/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/my-queries/${params.id}`)
            },
            {
                path: '/update-my-queries/:id',
                element: <UpdateMyQuries></UpdateMyQuries>,
                loader: ({ params }) => fetch(`http://localhost:5000/my-queries/${params.id}`)
            },
            {
                path: '/queries',
                element: <Queries></Queries>,
                loader: () => fetch('http://localhost:5000/queries')
            },
            {
                path: '/query-details/:id',
                element: <QueryDetails></QueryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/query-details/${params.id}`)
            },
            {
                path: '/perticular-recommend/:id',
                element: <PerticularRecommendation></PerticularRecommendation>,
                loader: ({params}) => fetch(`http://localhost:5000/recommendation/${params.id}`)
            },
        ]
    },
]);

export default router;