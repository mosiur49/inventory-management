import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Dashbord from '../component/Dashbord';

const Main = () => {
    const [sidebar,setSidebar] =useState(false)
    return (
        <div className='flex'>
         <Sidebar sidebar={sidebar}></Sidebar> 
         <Dashbord
         sidebar={sidebar}
         setSidebar={setSidebar}
         ></Dashbord>  
        </div>
    );
};

export default Main;