import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='div-link text-center w-full bg-pink-400 p-3'>
            <Link className='text-slate-50 text-xl div-link-s' to={'/'}>Home</Link>
            <Link className='text-slate-50 text-xl ml-10 div-link-s' to={'/review'}>Review</Link>
            <Link className='text-slate-50 text-xl ml-10 div-link-s' to={'/dashbord'}>Dashbord</Link>
            <Link className='text-slate-50 text-xl ml-10 div-link-s' to={'/blogs'}>Blogs</Link>
        </div>
    );
};

export default Header;