import React from 'react';
import logo from '../../Img/logo/logo.png'

const Footer = () => {
    return (
        <div className='bg-black mt-5'>
            <div className='flex justify-between'>
                <div className='m-5'>
                    <img className='w-40' src={logo} alt="" />
                </div>
                <div className='flex justify-between'>
                    <div className='mx-5'>
                        <p>About Online food</p>
                        <p className='text-white'>Read our blog</p>
                        <p className='text-white'>SignUp to deliver</p>
                        <p className='text-white'>Add your resturant</p>
                    </div>
                    <div className='mx-12 mt-5'>
                        <p className='text-white'>Get help</p>
                        <p className='text-white'>Read FAQs</p>
                        <p className='text-white'>View all cities</p>
                        <p className='text-white'>Resturants near me</p>
                    </div>
                </div>
            </div >
            <div className='flex justify-between mt-3'>
                <div className='m-3'>
                    <p className='text-white mx-5'>Copyright © 2021 Online Food</p>
                </div>
                <div className='flex justify-between m-3'>
                    <div><p className='text-white mx-5'>Privecy Policy</p></div>
                    <div><p className='text-white mx-5'>Terms Of Us</p></div>
                    <div><p className='text-white mx-5'>Pricing</p></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;