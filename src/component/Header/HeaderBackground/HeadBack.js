import React from 'react';
import img from '../../../Img/bannerbackground.png'
import './headerbg.css'

const HeadBack = () => {
    return (
        <div className='bg-banner flex justify-center items-center '>
            <div>
                <div>
                    <h1 className='sm:text-3xl lg:text-4xl mb-4 font-bold'>Best food waiting for your belly</h1>
                </div>
                <form className='ml-12 mt-8 ' >
                    <input type="text" name="Search Food Item" placeholder='Search Food Item' required className='sm-py-1 md:py-2 lg:py-2 px-8 w-10/12 rounded-3xl' />
                    <button className='-mx-20 md:py-2 lg:py-2 px-4 font-semibold rounded-3xl transition duration-500  text-white  bg-red-600 hover:bg-red-700 lg:text-xl '>Search</button>
                </form>
            </div>
        </div>
    );
};

export default HeadBack;