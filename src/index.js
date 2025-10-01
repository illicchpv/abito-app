import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, } from "react-router-dom";

import './index.css';
import './index-media.css';
import './error.css';
import {Home} from './pages/Home';
import {Product} from './pages/Product';
import {Layout} from './layout/Layout';
import {ErrorPage} from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
