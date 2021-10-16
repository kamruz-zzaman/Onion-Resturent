import React from 'react';

const Menu_Card = ({ menus }) => {
    const { Food_Name, Img, Description, Price } = menus;
    return (
        <div className="rounded-lg lg:h-full lg:mx-10 mt-5 p-8 text-center hover:border hover:border-transparent hover:shadow-2xl transition duration-700 ease-in-out ">
            <button>
                <div className='flex justify-center items-center'>
                    <img className='' src={Img} alt="" />
                </div>
                <h1 className='text-lg font-bold'>{Food_Name}</h1>
                <h3 className='my-2'>{Description}</h3>
                <h4 className='font-bold text-xl'>${Price}</h4>
            </button>
        </div>

    );
};

export default Menu_Card;