import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Root from "../layout/Root";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import MyQueries from "../Components/Pages/MyQueries/MyQueries";
import AddQueries from "../Components/Pages/AddQueries/AddQueries";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateMyQuries from "../Components/Pages/Update/UpdateMyQuries";
import Queries from "../Components/Pages/Queries/Queries";
import QueryDetails from "../Components/Pages/QueryDetails/QueryDetails";
import PerticularRecommendation from "../Components/Pages/Queries/PerticularRecommendation";
import MyRecommendation from "../Components/Pages/MyRecommendation/MyRecommendation";
import RecoForMe from "../Components/Pages/RecommendationForMe/RecoForMe";
import Error from "../Components/Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-11-server-liard-five.vercel.app/queries')
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
                loader: () => fetch('https://assignment-11-server-liard-five.vercel.app/my-queries')
            },
            {
                path: '/add-queries',
                element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
            },
            {
                path: '/update-my-queries/:id',
                element: <UpdateMyQuries></UpdateMyQuries>,
                loader: ({ params }) => fetch(`https://assignment-11-server-liard-five.vercel.app/my-queries/${params.id}`)
            },
            {
                path: '/queries',
                element: <Queries></Queries>,
                loader: () => fetch('https://assignment-11-server-liard-five.vercel.app/queries')
            },
            {
                path: '/query-details/:id',
                element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-liard-five.vercel.app/query-details/${params.id}`)
            },
            {
                path: '/perticular-recommend/:id',
                element: <PerticularRecommendation></PerticularRecommendation>,
                loader: ({ params }) => fetch(`https://assignment-11-server-liard-five.vercel.app/recommendation/perticular/${params.id}`)
            },
            {
                path: '/my-recommendation',
                element: <PrivateRoute><MyRecommendation></MyRecommendation></PrivateRoute>,
                // loader: () => fetch('https://assignment-11-server-liard-five.vercel.app/queries')
            },
            {
                path: '/recommendation-for-me',
                element: <PrivateRoute><RecoForMe></RecoForMe></PrivateRoute>,
                loader: () => fetch('https://assignment-11-server-liard-five.vercel.app/recommendation')
            }
        ]
    },
]);

export default router;