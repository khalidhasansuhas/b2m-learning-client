import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Error from "../../Pages/Shared/Error/Error";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        loader: async () => {
            return  fetch('http://localhost:5000/coursedetails')
           },
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/courses/:id',
                element:<Courses></Courses>
            },
            {
                path:'/coursedetails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/coursedetails/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
            }
        
        ]
    }
])