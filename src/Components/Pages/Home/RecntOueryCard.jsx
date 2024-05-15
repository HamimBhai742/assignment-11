import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const RecntOueryCard = ({ que }) => {
    console.log(que);
    const { userPhoto, userName, productBrand, currentDateAndTime, productImg, productName, boycottingReason, queryTitel } = que
    useEffect(() => {
        AOS.init({
            disable: 'mobile',
            duration: 1000,
            offset: 140
        });
    }, [])
    return (
        <div className="max-w-2xl px-5 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 border-2">
            <div className="flex items-center justify-between">
                <span data-aos="zoom-in" className="text-sm font-semibold text-gray-600 dark:text-gray-400">{currentDateAndTime}</span>
                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" role="button" data-aos="zoom-in-up">{productBrand}</a>
            </div>

            <div className="my-2">
                <img data-aos='fade-down-right' src={productImg} className='w-full h-[300px] rounded-xl' alt="" />

            </div>
            <div className="font-inter mt-4">
                <p data-aos="fade-up-left" className="mb-3 text-2xl font-bold">{productName}</p>
                <a data-aos="fade-down-left" className="text-lg mb-2 font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{queryTitel}</a>
                <p data-aos="fade-up-right" className="mt-1 text-gray-600 dark:text-gray-300">{boycottingReason}</p>
            </div>

            <div className="flex items-center justify-between mt-3" data-aos="fade-up-right">
                <div className="flex items-center">
                    <img className=" object-cover w-14 h-14 mx-4 rounded-full sm:block" src={userPhoto} alt="avatar" />
                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" role="link">{userName}</a>
                </div>
            </div>
        </div>
    );
};

export default RecntOueryCard;