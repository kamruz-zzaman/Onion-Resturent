import React, { useEffect, useState } from 'react';
import AboutCard from '../AboutCard/AboutCard';

const AboutUS = () => {
    const [about, setAbout] = useState([])
    useEffect(() => {
        fetch('./About.json')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])
    return (
        <div >
            <div className='mx-24'>
                <p className='font-bold text-xl my-4'>Why you choose us</p>
                <p>Lorem ipsum dolor sit amet consectetur,accusamus aliquid <br /> fuga cumque excepturi quam rem cupiditate.</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 items-center mx-16'>
                {
                    about.map(abouts =>
                        <AboutCard
                            key={abouts.Key}
                            abouts={abouts}
                        ></AboutCard>
                    )
                }
            </div>
        </div>
    );
};

export default AboutUS;