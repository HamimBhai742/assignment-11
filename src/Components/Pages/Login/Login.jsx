import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 font-poppins">
            <div className="hero-content">
                <div className="card  w-full lg:w-[650px] bg-base-100">
                    <div className="text-center pt-3">
                        <h1 className="text-4xl font-bold font-palyfair">Welcome Back!</h1>
                        <p className="py-3">Enter your email and password to access your account</p>
                    </div>
                    <form className="card-body -mt-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email <span className='text-red-600 text-lg'>*</span></span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password <span className='text-red-600 text-lg'>*</span></span>
                            </label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary text-lg font-semibold font-palyfair text-white">Login</button>
                        </div>
                    </form>
                    <div className="flex items-center w-full">
                        <hr className="w-full dark:text-gray-600" />
                        <p className="px-3 dark:text-gray-600">OR</p>
                        <hr className="w-full dark:text-gray-600" />
                    </div>
                    <div className="p-5">
                        <p className="border-2 p-3 rounded-lg flex items-center justify-center gap-3 font-semibold"><span className="text-3xl"><FcGoogle></FcGoogle></span>Login With Google</p>
                    </div>
                    <div>
                        <p className="text-center py-3">Don't have an account? <Link to='/register' className="font-semibold text-violet-600 hover:underline">Register here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;