import React from 'react';

const AboutCard = ({ abouts }) => {
    const { Img, Title, Description } = abouts;
    return (
        <div className="rounded-lg  mt-5 p-8 text-left hover:border hover:border-transparent hover:shadow-2xl transition duration-700 ease-in-out ">
            <div>
                <div className='flex justify-center items-center'>
                    <img className='' src={Img} alt="" />
                </div>
                <h1 className='text-lg font-bold'>{Title}</h1>
                <h3 className='my-2'>{Description}</h3>
            </div>
        </div>
    );
};

export default AboutCard;