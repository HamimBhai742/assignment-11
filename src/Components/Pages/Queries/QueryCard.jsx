import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegComment, FaRegCommentAlt } from "react-icons/fa";

const QueryCard = ({ query }) => {
    const { userPhoto, _id, productImg, recommendationCount, productBrand, currentDateAndTime, boycottingReason, productName, userName, queryTitel } = query
    // useEffect(() => {
    //     fetch('http://localhost:5000/recommendation')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [])
    return (
        <div>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 font-lato">
                <img className="object-cover w-full h-64" src={productImg} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xl font-bold text-blue-600">{productName}</span>
                        <p>{productBrand}</p>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{queryTitel}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{boycottingReason}</p>
                    </div>
                    <div>
                        <p>Recommendation Count:  {recommendationCount}</p>
                    </div>
                    <div className="mt-4 flex gap-8 items-center">
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
                            <Link to={`/query-details/${_id}`} className='btn btn-accent'>Recommend</Link>
                            {/* <span className='text-xl absolute top-[2px]'><FaRegCommentAlt /></span> */}
                            <Link  className='text-3xl absolute left-[120px]'><FaRegComment></FaRegComment></Link> 
                            <Link to={`/perticular-recommend/${_id}`} className='absolute left-[128px] text-sm top-1'>{recommendationCount}</Link>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            {/* <button className="" onClick={() => document.getElementById('my_modal_3').showModal()}><FaRegComment></FaRegComment></button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog"> */}
                            {/* if there is a button in form, it will close the modal */}
                            {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                            </dialog> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;