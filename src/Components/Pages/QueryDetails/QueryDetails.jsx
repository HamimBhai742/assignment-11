import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const QueryDetails = () => {
    const lodaerQuery = useLoaderData()
  
    const { productName, productImg, productBrand, queryTitel, recommendationCount, boycottingReason, userEmail, userName, userPhoto, _id, currentDateAndTime } = lodaerQuery
    console.log(lodaerQuery);
    // const dd = lodaerQuery.filter(p=>p._id===_id)
    // console.log(dd);
    let count = recommendationCount
    const [recommedCount, setRecommedCount] = useState(recommendationCount)
    const handelAddRecomend = (e) => {
        e.preventDefault()
        const form=e.target
        const reTitel=form.reTitel.value
        const reProName=form.reProName.value
        const reProImg=form.reProImg.value
        const reReason=form.reReason.value
        console.log(reProImg,reProName,reReason,reTitel);
        count++
        axios.patch(`http://localhost:5000/query-details/${_id}`, { count })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    setRecommedCount(recommendationCount)
                }
            })
        console.log(count);

    }
    return (
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow-md border-2 mx-5">
            <div className="flex justify-center min-h-screen">
                <div className="flex flex-col w-[450px] p-6 space-y-6 overflow-hidden  dark:bg-gray-50 dark:text-gray-800  font-lato">
                    <div className='flex justify-between'>
                        <div className="flex space-x-4">
                            <img alt="" src={userPhoto} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</a>
                                <span className="text-xs dark:text-gray-600">{userEmail}</span>
                            </div>
                        </div>
                        <p className='text-sm'><span className='font-semibold'>Post:</span> {currentDateAndTime}</p>
                    </div>
                    <div>
                        <img src={productImg} alt="" className="object-cover w-full mb-4 rounded-lg h-60  dark:bg-gray-500" />
                        <h2 className="mb-1 text-xl font-semibold">Cocacola</h2>
                        <h2 className="mb-1 text-xl font-semibold">Isrial Products Hints</h2>
                        <p>Cocacola is dengriou for our health</p>
                        <p>This Product is isrial product</p>
                        <p>Recommendation Count: {recommedCount}</p>
                    </div>
                    {/* <div className="flex flex-wrap justify-between">
                        <button onClick={() => handelViewDetailsBtn(_id)} className="btn btn-secondary">View Details</button>
                        <Link to={`/update-my-queries/${_id}`} className="btn btn-success text-white">Update</Link>
                        <button onClick={() => handeldeleteBtn(_id)} className="btn btn-error">Delete</button>
                    </div> */}
                </div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 font-lato">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            Get your free account now.
                        </h1>

                        <div className="mt-6">
                            <form onSubmit={handelAddRecomend} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-semibold">Recommendation Title</label>
                                    <input type="text" name='reTitel' placeholder="Recommendation Title" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-semibold">Recommended Product Name</label>
                                    <input type="text" name='reProName' placeholder="Recommended Product Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-semibold">Recommended Product Image URL</label>
                                    <input type="url" name='reProImg' placeholder="Recommended Product Image Url" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-semibold">Recommendation Reason</label>
                                    <input type="text" name='reReason' placeholder="Recommendation reason" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className='w-full'>
                                    {/* <input type="submit" value="Add" id="" className='w-1/2 btn btn-secondary  grid grid-cols-1' /> */}
                                </div>
                                <div className='w-full flex justify-end'>
                                    <input type="submit" value="Add" id="" className='w-1/2 btn btn-secondary  grid grid-cols-1' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QueryDetails;