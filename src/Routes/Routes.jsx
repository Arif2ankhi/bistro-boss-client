import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from '../pages/Dashboard/AddItems/AddItems';
import AdminRoute from './AdminRoute';
import ManageItems from '../pages/Dashboard/ManageItems/ManageItems';
import UpdateItem from '../pages/Dashboard/UpdateItem/UpdateItem';


    export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        // normal routes 
       {
        path: "/",
        element:<Home></Home>
       },
       {
        path: "menu",
        element:<Menu></Menu>
       },
       {
        path: "order/:category",
        element:<Order></Order>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'secret',
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
      }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><DashBoard></DashBoard>,</PrivateRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        // admin only routes 
        {
          path:'addItems',
          // element:<AddItems></AddItems>
          element:<AdminRoute><AddItems></AddItems></AdminRoute>

        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)

        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);