import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';

const RecoForMe = () => {
    const lod = useLoaderData()
    const { user } = useAuth()
    const newData = lod.filter(d => d.recommenderEmail !== user.email)
    console.log(newData);
    console.log(lod);
    return (
        <div>
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
                    <tbody>
                        {
                            newData.map((reco, idx) => <tr key={idx}>
                            
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{reco.recommenderName}</div>
                                            <div className="text-sm opacity-50">{reco.recommenderEmail}</div>
                                        </div>
                                    </div>
                                </td>           
                                <td><p>{reco.currentDateAndTime}</p></td>
                                <td><p>{reco.productName}</p></td>
                                <td><p>{reco.recommendationProName}</p></td>
                                <td><p>{reco.recommendationTitel}</p></td>
                                <td><p>{reco.recommendationReason}</p></td>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default RecoForMe;