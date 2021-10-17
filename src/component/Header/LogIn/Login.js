import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Img/logo/logo2.png'

const Login = () => {
    return (
        <div className='flex justify-center items-center' >
            <div className=' p-10 rounded-xl shadow-xl'>
                <img className='w-64 mb-6' src={logo} alt="" />
                <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="email" name="email" placeholder='Emal' id="" /><br />
                <input className='bg-transparent border border-red-500 p-2 m-1 rounded-lg w-full' type="password" name="pass" placeholder='Password' id="" /><br />
                <button className='bg-red-500 w-full m-2 p-2 rounded-lg hover:bg-red-800'>LogIn</button>
                <p className='text-center'>Didn't have account? <Link to='/regestration' className='text-blue-600'>SignUp</Link></p>
                <div className='text-center mt-5'>
                    <p className='text-pink-900'>OR, LogIn with</p>
                    <button className='m-5'><i className="fab fa-facebook text-4xl"></i></button>
                    <button className='m-5'><i className="fab fa-google text-4xl"></i></button>
                    <button className='m-5'><i className="fab fa-github text-4xl"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Login;