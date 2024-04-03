import React from 'react';
import {FaBars, FaSearch, FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = ({sidebar,setSidebar}) => {
    return (
     
       <nav className='bg-gray-800 px-4 py-3 flex justify-between '>
        <div className='flex items-center text-xl'>
          <FaBars className='text-white me-4 cursor-pointer' onClick={()=> setSidebar(!sidebar)}></FaBars>
          <span className='text-white font-semibold'>E-Commerce</span>
          <span></span>
        </div>
        <div className='flex items-center gap-x-5'>
          <div className='relative md:w-56'>
            <span className='relative md:absolute inset-y-0  left-0 flex items-center pl-2'>
              <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch></FaSearch></button></span>
            <input type="text" className='w-full px-4 py-1 pl-12  rounded shadow outline-none hidden md:block' />
          </div>
          <div className='relative'>
            <button className='text-white group'>
            <FaUserCircle className='w-6 h-6 mt-1'></FaUserCircle>
            <div className='z-10 hidden absolute mt-3 bg-slate-700 rounded-lg shadow w-32 group-focus:block top-full right-0'>
              <ul className='text-xl py-6 text-white font-medium'>
                <li className='pb-2'> <Link>Profile</Link></li>
                <li className='pb-2'> <Link>setting</Link></li>
                <li> <Link>Logout</Link></li>
              </ul>
            </div>

            </button>

          </div>

        </div>

       </nav>
        
    );
};

export default Navbar;

 {/*
<div className="flex-1">
 <div className="navbar-start">
   <div className="dropdown">
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
       <FaBars className='text-white text-2xl'></FaBars>
     </div>
     <ul tabIndex={0} className="menu menu-md dropdown-content mt-5 h-96 z-[1] p-2 shadow bg-gray-700 text-white  w-64 ">
       <li><a>Product Sale</a></li>
       <li><a>Portfolio</a></li>
       <li><a>About</a></li>
     </ul>
   </div>
   <a className="text-2xl text-white">Dashbord</a>
 </div>
  
 </div>
*/}