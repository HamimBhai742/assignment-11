import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const MyRecommendation = () => {
    const { user } = useAuth()
    // const loderQueries = useLoaderData()
    const [querryId, setQuerryId] = useState(null)
    // console.log(querryId);
    // const [recommendId, setRecomandId] = useState(null)
    // console.log(recommendId);
    const [recommendCount, setRecommendCount] = useState(null)
    const [recommend, setRecommed] = useState([])
    const [click, setClick] = useState(false)
    const [click11, setClick11] = useState(false)
    // let decCount = recommendCount
    // console.log(decCount);
    // console.log(recommendId);
    // // console.log('loderQue:', recommendCount);
    // // console.log(recommendId, 'ccccooouunnnttt');
    // console.log(querryId, 'ttttttttt');
    // console.log(user?.displayName);

    useEffect(() => {
        axios.get(`https://assignment-11-server-liard-five.vercel.app/recommendation/${user?.email}`)
            .then(res => {
                setRecommed(res.data);
                // res.data.forEach(rq => setRecomandId(rq._id))

            })

    }, [user])

    // if (recommendId) {
    //     // useEffect(() => {
    //         fetch(`https://assignment-11-server-liard-five.vercel.app/my-recommendation/${recommendId}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 const { queryId } = data
    //                 setQuerryId(queryId);
    //                 // console.log(querryId);
    //             })
    //     // }, [recommendId, querryId])
    // }

    if (querryId) {
        fetch(`https://assignment-11-server-liard-five.vercel.app/queries/${querryId}`)
            .then(res => res.json())
            .then(datas => {
                // console.log(datas);
                const { recommendationCount } = datas
                setRecommendCount(recommendationCount)
                // setClick11(false)
                // console.log('kire', datas);
                // console.log('hhhhhhhh', querryId);
                // const newDataQ = datas.find(q => q._id === querryId)
                // console.log(newDataQ);


            })
    }
    // console.log(typeof recommendCount);

    // console.log(recommendCount);

    let newCount = recommendCount - 1

    // console.log(newCount);


    if (click && newCount >= 0) {
        axios.patch(`https://assignment-11-server-liard-five.vercel.app/queries/${querryId}`, { newCount })
            .then(res => {
                console.log(res.data);
                setClick(false)
            })
    }
    console.log('rrrrrrrrrrrrrrrrrrd', recommendCount);
    console.log('nnnnnnnnnnnnnnd', newCount);
    const handelMyRecommendDeleteBtn = (id) => {

        // console.log(id);
        // setRecomandId(id)
        // console.log(decCount);
        console.log('rrrrrrrrrr', recommendCount);
        // setClick(true)
        fetch(`https://assignment-11-server-liard-five.vercel.app/my-recommendation/${id}`)
            .then(res => res.json())
            .then(data => {
                const { queryId } = data
                // setClick11(true)
                setQuerryId(queryId);
                
                // console.log(querryId);

            })




        // console.log(querryId);

        // fetch(`https://assignment-11-server-liard-five.vercel.app/queries/${querryId}`)
        //     .then(res => res.json())
        //     .then(datas => {
        //         console.log(datas);
        //         // const { recommendationCount } = datas
        //         // setRecommendCount(recommendationCount)
        //     })

        //     console.log(recommendCount);
        // console.log(decCount);
        Swal.fire({
            title: "Are you sure?",
            text: "You want delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                axios.delete(`https://assignment-11-server-liard-five.vercel.app/my-recommendation/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        const newMyRecommendation = recommend.filter(rec => rec._id !== id)
                        setRecommed(newMyRecommendation);
                        setClick(true)

                    })

                // fetch(`https://assignment-11-server-liard-five.vercel.app/my-recommendation/${id}`)
                //     .then(res => res.json())
                //     .then(data => {
                //         const { queryId } = data
                //         setQuerryId(queryId);
                //     })



                // const upCount = recommendCount - 1
                // console.log(upCount);
                // decCount--

            }
        });

    }
    return (
        <div className='md:mx-5 md:mt-24 mt-20 mx-3'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-lato text-base'>
                            <th>Recommend User</th>
                            <th>Recommend Date</th>
                            <th>Recommendation Product Name</th>
                            <th>Recommendation Reason</th>
                            <th>Recommendation Titel</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='font-lato'>
                        {/* row 1 */}
                        {
                            recommend?.map((reco, idx) => <tr key={idx}>

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
                                    <p className='font-semibold max-sm:text-xs'>{reco.currentDateAndTime}</p>
                                </td>
                                <td>
                                    <p className='font-semibold max-sm:text-xs'>{reco.recommendationProName}</p>
                                </td>
                                <td>
                                    <p className='font-semibold max-sm:text-xs'>{reco.recommendationReason}</p>
                                </td>
                                <td>
                                    <p className='font-semibold max-sm:text-xs'>{reco.recommendationTitel}</p>
                                </td>
                                <th>
                                    <button onClick={() => handelMyRecommendDeleteBtn(reco._id)} className="md:text-2xl text-xl"><RiDeleteBin6Line></RiDeleteBin6Line></button>
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