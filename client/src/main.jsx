import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Confirm from "./pages/ConfirmationPage";
import Buy from "./pages/Buy";

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
      }, 
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

