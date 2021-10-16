import React from 'react';
import logo from '../../../Img/logo/logo2.png'
import HeadBack from '../HeaderBackground/HeadBack';

const Navbar = () => {
    return (
        <div>
            <div className='mt-5 mx-5 flex justify-between '>
                <div >
                    <img src={logo} className="w-40 mr-2" alt="" />
                </div>
                <div className='flex justify-between  items-center ' >
                    <span><i className="fas fa-shopping-cart hover:text-red-600"></i></span>
                    <button className='mx-3 py-2 px-4 font-semibold rounded-3xl transition duration-500  text-black  hover:bg-red-600'>Login</button>
                    <button className='py-2 px-4 font-semibold rounded-3xl transition duration-500 text-black  hover:bg-red-600'>SignUp</button>
                </div>
            </div>
            <div className='mt-5'>
                <HeadBack></HeadBack>
            </div>

        </div>

    );
};

export default Navbar;