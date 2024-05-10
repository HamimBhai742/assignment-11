import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
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
    return (
        <div className="navbar bg-base-100 font-inter">
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
                    <img src="/web-logo.png" className='w-16' alt="" />
                    <a className="btn btn-ghost text-4xl font-bold font-palyfair">Goods Galaxy</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-lg font-medium text-gray-600">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Queries</NavLink>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/my-queries'>My Queries</NavLink>
                    <NavLink to='/'>Home</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                {user ? <button onClick={handelLogoutBtn} className='bg-blue-600 p-3 rounded-lg text-white text-lg font-semibold'>Logout</button> : <Link to='/login' className='bg-blue-600 p-3 rounded-lg text-white text-lg font-semibold'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;