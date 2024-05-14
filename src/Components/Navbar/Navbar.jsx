import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    const handelLogoutBtn = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to logout!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Success!",
                    text: "Your account has been successfully logout.",
                    icon: "success"
                });
                logOut()
                navigate('/')
            }
        });
    }


    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave')
            console.log('object');
        } else {
            setTheme('light')
        }
    }

    return (
        <div className="navbar bg-base-100 font-inter px-5 fixed shadow-md z-50 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/'>Queries</NavLink>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/my-queries'>My Queries</NavLink>
                        <NavLink to='/'>Home</NavLink>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src="/web-logo.png" className='w-12' alt="" />
                    <a className="btn btn-ghost text-3xl font-bold font-palyfair">Goods Galaxy</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-base font-medium text-gray-600">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/queries'>Queries</NavLink>
                    {user && <NavLink to='/recommendation-for-me'>Recommendations For Me</NavLink>}
                    {user && <NavLink to='/my-queries'>My Queries</NavLink>}
                    {user && <NavLink to='/my-recommendation'>My recommendations</NavLink>}
                </ul>
            </div>
            <div className="navbar-end gap-3">

                <label className='cursor-pointer grid place-items-center'>
                    <input
                        type='checkbox'
                        onChange={handleToggle}
                        className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
                    />
                    <svg
                        className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
                        xmlns='http://w...content-available-to-author-only...3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <circle cx='12' cy='12' r='5' />
                        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                    </svg>
                    <svg
                        className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
                        xmlns='http://w...content-available-to-author-only...3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                    </svg>
                </label>
                {user && <div className=" w-16 h-16 rounded-full">
                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <button className="w-16 rounded-full"><img className=' w-16 h-16 rounded-full' src={user?.photoURL} /></button>
                    </div>
                </div>}
                {/* <div className="tooltip tooltip-left" data-tip="hello">
                    <button className="w-16 rounded-full"><img className='w-16 h-16 rounded-full' src={user?.photoURL} /></button>
                </div> */}
                {user ? <button onClick={handelLogoutBtn} className='bg-teal-600 p-3 rounded-lg text-white text-lg font-semibold'>Logout</button> : <Link to='/login' className='bg-purple-600 p-3 rounded-lg text-white text-lg font-semibold'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;