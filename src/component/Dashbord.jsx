import React from 'react';
import Navbar from '../Sherde/Navbar';
import { FaAngleRight, FaHome, FaUser, FaUserFriends } from 'react-icons/fa';
import './DashbordCart.css'



const Dashbord = ({ sidebar, setSidebar }) => {
    return (
        <div className={`${sidebar ? "" : " ml-64 "} w-full`}>
            <Navbar
                sidebar={sidebar}
                setSidebar={setSidebar}
            ></Navbar>
            <main className='main-container  '>
            <div className='main-card gap-7 h-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='card'>
                        <div className='card-inner'>
                       
                            <h3>Products</h3>
                            <FaHome className='card-icon'></FaHome>
                        </div>
                        <h1>300</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>CAtagories</h3>
                            <FaHome className='card-icon'></FaHome>
                        </div>
                        <h1>300</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Customet</h3>
                            <FaHome className='card-icon'></FaHome>
                        </div>
                        <h1>160</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Selse</h3>
                            <FaHome className='card-icon'></FaHome>
                        </div>
                        <h1>500</h1>
                    </div>

                </div>
          
              </main>
              <div className="avatar placeholder">
                 <div className="bg-[#362E68] text-neutral-content rounded-full w-32">
                 <span className="text-3xl">Catagory</span>
              </div>
               </div> 
               <div  className=''>

               </div>
        </div>
    );
};

export default Dashbord;
{/*
  
*/}



{/*
  <div className='main-title'>
                    <h3 className='text-4xl text-black text-center justify-center'>Dashbord</h3>

                </div> 
         
           
            <div className='main-card gap-5  p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-col-4'>
              <div className="mt-5 w-72 h-64 shadow-xl bg-[#372E68] rounded-md ">
            
            <div className="card-body ">
           <div className='flex gap-5 '>
           <div className='w-16 h-16 rounded-full bg-[#D9D9D9] '>
           <FaUserFriends className='text-4xl text-black mx-auto mt-3'></FaUserFriends>
           </div>
            <h2 className='text-3xl font-bold mt-2'>Today’s Sale</h2>
           </div>
           <div className='w-20 h-20 rounded-full bg-[#D9D9D9] ml-40 p-4 '>
            <span className='text-3xl text-black'>999</span>
             </div> 
             </div>
            <div className=''>
             <button className="btn btn-active  rounded-none  justify-end w-72 mr-6  ">
             <FaAngleRight className='text-4xl ' />
             </button>
             </div>
             </div>
              <div className="mt-5 w-72 h-64 shadow-xl bg-[#372E68] rounded-md ">
            
            <div className="card-body ">
           <div className='flex gap-5 '>
           <div className='w-16 h-16 rounded-full bg-[#D9D9D9] '>
           <FaUserFriends className='text-4xl text-black mx-auto mt-3'></FaUserFriends>
           </div>
            <h2 className='text-3xl font-bold mt-2'>Total Customer</h2>
           </div>
           <div className='w-20 h-20 rounded-full bg-[#D9D9D9] ml-40 p-4 '>
            <span className='text-3xl text-black'>999</span>
             </div> 
             </div>
            <div className=''>
             <button className="btn btn-active  rounded-none  justify-end w-72 mr-6  ">
             <FaAngleRight className='text-4xl ' />
             </button>
             </div>
             </div>
              <div className="mt-5 w-72 h-64 shadow-xl bg-[#372E68] rounded-md ">
            
            <div className="card-body ">
           <div className='flex gap-5 '>
           <div className='w-16 h-16 rounded-full bg-[#D9D9D9] '>
           <FaUserFriends className='text-4xl text-black mx-auto mt-3'></FaUserFriends>
           </div>
            <h2 className='text-3xl font-bold mt-2'>Total Customer</h2>
           </div>
           <div className='w-20 h-20 rounded-full bg-[#D9D9D9] ml-40 p-4 '>
            <span className='text-3xl text-black'>999</span>
             </div> 
             </div>
            <div className=''>
             <button className="btn btn-active  rounded-none  justify-end w-72 mr-6  ">
             <FaAngleRight className='text-4xl ' />
             </button>
             </div>
             </div>
              <div className="mt-5 w-72 h-64 shadow-xl bg-[#372E68] rounded-md ">
            
            <div className="card-body ">
           <div className='flex gap-5 '>
           <div className='w-16 h-16 rounded-full bg-[#D9D9D9] '>
           
           {/* <FaUserFriends ></FaUserFriends> */}
        //    </div>
        //     <h2 className='text-3xl font-bold mt-2'>Total Customer</h2>
        //    </div>
        //    <div className='w-20 h-20 rounded-full bg-[#D9D9D9] ml-40 p-4 '>
        //     <span className='text-3xl text-black'>999</span>
        //      </div> 
            
        //      </div>
        //     <div className=''>
        //      <button className="btn btn-active  rounded-none  justify-end w-72 mr-6  ">
        //      <FaAngleRight className='text-4xl ' />
        //      </button>
        //      </div>
        //      </div>
        //       </div>
