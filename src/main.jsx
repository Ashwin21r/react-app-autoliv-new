import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Supplier from '../assets/Supplier'; // Correct path
import Homepage from '../assets/Homepage'; // Correct path

const router = createBrowserRouter([
  {
    path: 'https://react-app-5ph5.vercel.app/',  // Route for Homepage
    element: <Homepage />,
  },
  {
    path: 'https://react-app-5ph5.vercel.app/supplier',  // Route for Supplier page
    element: <Supplier />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
