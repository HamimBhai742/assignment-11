import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MyRecommendation = () => {
    const { user } = useAuth()
    const loderQueries = useLoaderData()
    console.log('loderQue:', loderQueries);
    // console.log(loderRecommendation);
    console.log(user?.displayName);
    const [recommend, setRecommed] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/recommendation/${user?.email}`)
            .then(res => {
                setRecommed(res.data);
            })
    }, [user])
    console.log(recommend);
    const handelMyRecommendDeleteBtn = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/my-recommendation/${id}`)
            .then(res => {
                console.log(res.data);
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Sl.
                            </th>
                            <th>Recommend User</th>
                            <th>Recommend Date</th>
                            <th>Recommendation Product Name</th>
                            <th>Recommendation Reason</th>
                            <th>Recommendation Titel</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recommend.map((reco, idx) => <tr key={idx}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{reco.userName}</div>
                                            <div className="text-sm opacity-50">{reco.userEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{reco.currentDateAndTime}</p>
                                </td>
                                <td>
                                    <p>{reco.recommendationProName}</p>
                                </td>
                                <td>
                                    <p>{reco.recommendationReason}</p>
                                </td>
                                <td>
                                    <p>{reco.recommendationTitel}</p>
                                </td>
                                <th>
                                    <button onClick={() => handelMyRecommendDeleteBtn(reco._id)} className="text-2xl"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendation;