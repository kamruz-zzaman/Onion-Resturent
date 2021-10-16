import React, { useEffect, useState } from 'react';
import Menu_Card from '../Food_Menu/Menu_Card';

const Dinner = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('./Dinner.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 items-center mx-16'>
                {
                    menu.map(menus => <Menu_Card
                        key={menus.Key}
                        menus={menus}
                    >
                    </Menu_Card>)
                }
            </div>
        </div>
    );
};

export default Dinner;