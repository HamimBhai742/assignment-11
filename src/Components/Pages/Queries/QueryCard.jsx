import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegComment, FaRegCommentAlt } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css'

const QueryCard = ({ query }) => {
    const { user } = useAuth()
    const { userPhoto, _id, productImg, recommendationCount, productBrand, currentDateAndTime, boycottingReason, productName, userName, queryTitel, userEmail } = query
    // useEffect(() => {
    //     fetch('https://assignment-11-server-liard-five.vercel.app/recommendation')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [])
    const navigate = useNavigate()
    const handelRecommendBtn = () => {
        navigate(`/query-details/${_id}`)
    }
    useEffect(() => {
        AOS.init({
            disable:'mobile',
            duration:1000,
            offset:120
        });
    }, [])
    return (
        <div className='mt-5'>
            <div data-aos="fade-up" className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 font-lato">
                <img className="object-cover w-full h-64" src={productImg} alt="Article" />

                <div className="p-6">
                    <div>
                        <span data-aos="fade-up-left" className="text-xl font-bold text-blue-600">{productName}</span>
                        <p data-aos="fade-up-right">{productBrand}</p>
                        <a data-aos="fade-down-right" className="block mt-2 text-lg font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{queryTitel}</a>
                        <p data-aos="fade-down-left" className="mt-2 text-base text-gray-600 dark:text-gray-400">{boycottingReason.slice(0,160)}<span className='text-blue-600 cursor-pointer font-poppins text-sm'> ...Read More</span></p>
                    </div>
                    <div className="mt-6 flex lg:gap-8 md:gap-3 gap-8 items-center" data-aos="fade-up-right">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-12 w-12 rounded-full" src={userPhoto} alt="Avatar" />
                                <div>
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200 block" role="link">{userName}</a>
                                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{currentDateAndTime}</span>
                                </div>

                            </div>

                        </div>
                        <div className='relative'>
                            <button onClick={handelRecommendBtn} disabled={user?.email === userEmail} className='btn btn-accent'>Recommend</button>
                            {/* <span className='text-xl absolute top-[2px]'><FaRegCommentAlt /></span> */}
                            <Link to={`/perticular-recommend/${_id}`} className='text-3xl absolute left-[120px]'><FaRegComment></FaRegComment></Link>
                            <Link to={`/perticular-recommend/${_id}`} className='absolute left-[128px] text-sm top-1'>{recommendationCount}</Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;