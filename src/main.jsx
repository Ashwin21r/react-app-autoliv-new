import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SupplierAccess from '../assets/SupplierAccess'; // Correct path
import Homepage from '../assets/Homepage'; // Correct path
import Support from '../assets/Support';
import GeneralRequirement from '../assets/GeneralRequirement'; // Check path and name


const router = createBrowserRouter([
  {
    path: '/',  // Route for Homepage
    element: <Homepage />,
  },
  {  path:'/main',
    element:<Homepage/>

  },
  {
    path: '/supplier',  // Route for Supplier page
    element: <SupplierAccess/>,
  },
  
  {
    path:'/support',
    element:<Support/>

  },
  {
    path:'/genralrequirment',
    element:<GeneralRequirement/>

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
