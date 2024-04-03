import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebar }) => {
    return (
        <div className={`${sidebar ? " hidden " : " block "}w-64 bg-gray-800 fixed h-full px-4 py-2`}>
            <div className='my-2 mb-4'>
                <h1 className=' text-2xl text-white font-bold'>Admin Dashboard</h1>

            </div>
            <hr />
            <ul className=' text-white font-bold text-xl '>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link className='flex px-3 pl-5'>
                        <FaHome className='inline-block w-5 h-5 mr-2 mt-1'></FaHome>
                        Home
                    </Link>


                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link className='flex px-3 pl-5'>
                        <FaHome className='inline-block w-5 h-5 mr-2 mt-1'></FaHome>
                        Home
                    </Link>

                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link className='flex px-3 pl-5'>
                        <FaHome className='inline-block w-5 h-5 mr-2 mt-1'></FaHome>
                        Home
                    </Link>

                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link className='flex px-3 pl-5'>
                        <FaHome className='inline-block w-5 h-5 mr-2 mt-1'></FaHome>
                        Home
                    </Link>

                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link className='flex px-3 pl-5'>
                        <FaHome className='inline-block w-5 h-5 mr-2 mt-1'></FaHome>
                        Home
                    </Link>

                </li>
                <div className="collapse collapse-arrow bg-gray-800">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        product setting
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </ul>

        </div>
    );
};

export default Sidebar;