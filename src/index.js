import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './views/authenticate/login/login';
import Register from './views/authenticate/register/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
