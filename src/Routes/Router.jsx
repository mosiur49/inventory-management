import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Navbar from '../Sherde/Navbar';
import Dashbord from '../component/Dashbord';
import Sidebar from '../component/Sidebar';
import Main from '../Layout/Main';


  const router = createBrowserRouter([
    
   {
    path:'/',
    element:<Main></Main>
   
   }
  
  ]);

export default router;