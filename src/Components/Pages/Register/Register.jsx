import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handelRegisterBtn = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name,email,password,photo);
    }
    return (
        <div className="hero min-h-screen bg-base-200 font-poppins">
            <div className="hero-content">
                <div className="card  w-full lg:w-[650px] bg-base-100">
                    <div className="text-center pt-3">
                        <h1 className="text-4xl font-bold font-palyfair">Create Account!</h1>
                        {/* <p className="py-3">Enter your email and password to access your account</p> */}
                    </div>
                    <form className="card-body -mt-5" onSubmit={handelRegisterBtn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name <span className='text-red-600 text-lg'>*</span></span>
                            </label>
                            <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email <span className='text-red-600 text-lg'>*</span></span>
                            </label>
                            <input name='email' type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password <span className='text-red-600 text-lg'>*</span></span>
                            </label>
                            <input name='password' type="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL <span className='text-red-600 text-lg'>*</span></span>
                            </label>
                            <input name='photo' type="url" placeholder="Enter your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <input type='submit' className="btn btn-primary text-lg font-semibold font-palyfair text-white" value='Register'></input>
                        </div>
                    </form>
                    <div>
                        <p className="text-center pb-5">Already have an account? <Link to='/login' className="font-semibold text-violet-600 hover:underline">Login here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;