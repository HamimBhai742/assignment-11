import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

const RecoForMe = () => {
    const lod = useLoaderData()
    const { user } = useAuth()
    const newData = lod.filter(d => d.userEmail === user.email)
    console.log(newData);
    console.log(lod);
    return (
        <div className='md:mt-24 md:mx-5 mx-3 mt-20'>
            <Helmet>
                <title>Recommendation For Me</title>
            </Helmet>
            <Fade cascade duration={3000}>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Recommender</th>
                                <th>Date</th>
                                <th>Product Name</th>
                                <th>Recommendation Product Name</th>
                                <th>Recommendation Titel</th>
                                <th>Recommendation Reason</th>
                            </tr>
                        </thead>
                        <tbody className='font-lato'>
                            {
                                newData.map((reco, idx) => <tr key={idx}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={reco.recommenderPhoto} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold max-sm:text-sm">{reco.recommenderName}</div>
                                                <div className="text-sm opacity-50">{reco.recommenderEmail}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><p className='max-sm:text-xs'>{reco.currentDateAndTime}</p></td>
                                    <td><p className='max-sm:text-xs'>{reco.productName}</p></td>
                                    <td><p className='max-sm:text-xs'>{reco.recommendationProName}</p></td>
                                    <td><p className='max-sm:text-xs'>{reco.recommendationTitel}</p></td>
                                    <td><p className='max-sm:text-xs'>{reco.recommendationReason.slice(0,140)}<span className='text-blue-600 cursor-pointer font-poppins text-sm'> ...Read More</span></p></td>
                                </tr>)
                            }

                        </tbody>
                        {/* foot */}


                    </table>
                </div>
            </Fade>
        </div>
    );
};

export default RecoForMe;