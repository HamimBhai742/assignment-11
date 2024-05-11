import React from 'react';
import { Link } from 'react-router-dom';

const QueryCard = ({ query }) => {
    const { userPhoto,_id, productImg, recommendationCount, productBrand, currentDateAndTime, boycottingReason, productName, userName, queryTitel } = query
    return (
        <div>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 font-poppins">
                <img className="object-cover w-full h-64" src={productImg} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xl font-bold text-blue-600">{productName}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{queryTitel}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{boycottingReason}</p>
                    </div>
                    <div>
                        <p>Recommendation Count: {recommendationCount}</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-12 w-12 rounded-full" src={userPhoto} alt="Avatar" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{userName}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{currentDateAndTime}</span>
                        </div>
                        <div>
                            <Link to={`/query-details/${_id}`} className='btn btn-accent'>Recommend</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;