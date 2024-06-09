//import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup';
import Login from './pages/Login';
<<<<<<< HEAD
import Profile from './pages/Profile';
import Confirm from "./pages/ConfirmationPage";
import Buy from "./pages/Buy";
=======
import User from './pages/User';
import Error from './pages/Error';

//import './index.css'
>>>>>>> 336665a8eccfb0986299742caced15298fd65336

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/signup',
        element: <Signup />
<<<<<<< HEAD
      },
      {
        path: 'confirm',
        element: <Confirm />
      },
      {
        path: '/buy',
        element: <Buy />
      },   
      {
        path: '/profiles/:username',
        element: <Profile />
      }, 
      {
        path: '/me',
        element: <Profile />
=======
      }, {
        path: '/users/:userId',
        element: <User />
>>>>>>> 336665a8eccfb0986299742caced15298fd65336
      }, 
      // {
      //   path: '/me',
      //   element: <Profile />
      // }, 
      

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

