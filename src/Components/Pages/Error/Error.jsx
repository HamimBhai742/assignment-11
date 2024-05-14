import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                    <p className="">
                        <h1 className='font-lato text-6xl font-poppins font-bold'>404</h1>
                    </p>
                    <h1 className="mt-3 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl font-lato">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 font-lato">The page you are looking for doesn't exist. Here are some helpful links:</p>

                    <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <Link to='/' className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                            <FaArrowLeft></FaArrowLeft>
                            <Link className='font-poppins font-semibold'>Go back</Link>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error;