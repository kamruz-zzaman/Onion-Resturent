import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Img/logo/logo2.png'

const Regedtration = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <img className='w-64' src={logo} alt="" />
                <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="text" name="name" id="" placeholder='Name' /><br />
                <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="email" name="email" placeholder='Emal' id="" /><br />
                <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="password" name="pass" placeholder='Password' id="" /><br />
                <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="password" name="confirm pass" placeholder='Confirm Password' id="" />
                <button className='bg-red-500 w-full m-2 p-2 rounded-lg hover:bg-red-800'>SignUp</button>
                <p>Already have an account? <Link to='/signin' className='text-blue-600'>SignIn</Link></p>
                <div className='text-center mt-5'>
                    <p className='text-pink-900'>OR, SignUp with</p>
                    <button className='m-5'><i className="fab fa-facebook text-4xl"></i></button>
                    <button className='m-5'><i className="fab fa-google text-4xl"></i></button>
                    <button className='m-5'><i className="fab fa-github text-4xl"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Regedtration;