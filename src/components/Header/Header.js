import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="nav-design">
            <NavLink activeStyle={{
                fontWeight:'bold',
                color:'royalblue'
            }} to='/home'>Home</NavLink>
            <NavLink activeStyle={{
                fontWeight:'bold',
                color:'royalblue'
            }} to='/shop'>Shop</NavLink>
            <NavLink activeStyle={{
                fontWeight:'bold',
                color:'royalblue'
            }} to='/review'>Review</NavLink>
        </div>
    );
};

export default Header;