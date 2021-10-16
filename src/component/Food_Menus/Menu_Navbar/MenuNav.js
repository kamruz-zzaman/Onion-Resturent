import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuNav = () => {
    return (
        <div className="flex justify-center items-center my-5">
            <NavLink to='/breakfast' activeClassName="selected">Breakfast</NavLink>
            <NavLink className='mx-5' to='/lunch' activeClassName="selected">Lunch</NavLink>
            <NavLink to='/dinner' activeClassName="selected">Dinner</NavLink>
        </div>
    );
};

export default MenuNav;