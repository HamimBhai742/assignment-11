import React from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddQueries = () => {
    const { user } = useAuth()
    const handelQueryAddBtn = (e) => {
        e.preventDefault()
        const form = e.target
        const productName = form.productName.value
        const productBrand = form.productBrand.value
        const productImg = form.productImg.value
        const queryTitel = form.queryTitel.value
        const boycottingReason = form.boycottingReason.value
        const userName = user.displayName
        const userEmail = user.email
        const userPhoto = user.photoURL
        const recommendationCount = 0
        const currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const currentDate = new Date().toISOString().slice(0, 10).split('-').reverse().join('/')
        const currentDateAndTime = currentDate + " " + " " + " " + currentTime
        console.log(currentDateAndTime);
        const addQueries = { productImg, productBrand, productName, queryTitel, boycottingReason, userName, userEmail, userPhoto, currentDateAndTime, recommendationCount }
        axios.post('https://assignment-11-server-liard-five.vercel.app/add-queries', addQueries)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    title: "Success!",
                    text: "Your Queries Add Successfully!",
                    icon: "success"
                });
                form.reset()
            })
        console.log(addQueries);
    }

    return (
        <section className='max-w-[1170px] lg:mx-auto  my-8 max-sm:mx-3 md:mx-5 mt-28'>
            <Helmet>
                <title>Add Queries</title>
            </Helmet>
            <div className="p-6 bg-green-100 mt-5 rounded-xl">
                <form onSubmit={handelQueryAddBtn} noValidate="" action="" className="container font-poppins flex flex-col mx-auto space-y-12">
                    <fieldset className="py-5 px-10">
                        <div className="text-center">
                            <p className="font-palyfair text-3xl md:text-5xl text-[#374151] font-bold">Add New Queries</p>
                            {/* <p className="text-xs font-raleway max-w-[700px] mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mt-10 font-raleway">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="md:text-xl font-semibold">Product Name</label>
                                <input id="firstname" type="text" placeholder="Product Name" className="w-full pl-3 h-12 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='productName' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="md:text-xl font-semibold">Product Brand</label>
                                <input id="lastname" type="text" placeholder="Product Brand" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='productBrand' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="md:text-xl font-semibold">Product Image-URL</label>
                                <input id="firstname" type="url" placeholder="Product Image Url" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='productImg' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="md:text-xl font-semibold">Query Title</label>
                                <input id="lastname" type="text" placeholder="Query TItle" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='queryTitel' />
                            </div>
                            {/* <div className="col-span-full">
                            <label htmlFor="address" className="text-xl font-semibold">Photo</label>
                            <input id="address" type="url" placeholder="Enter photo URL" className="w-full h-12   pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='photo' />
                        </div> */}

                            <div className="col-span-full">
                                <label htmlFor="address" className="md:text-xl font-semibold">Boycotting Reason Details</label>
                                {/* <input id="address" type="url" placeholder="Enter photo URL" className="w-full h-12  pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.photo} name='photo' /> */}
                                <textarea placeholder="Boycotting Reason Details..." id="description" name="boycottingReason" rows="4" cols="50" className="w-full mt-2 pt-1   pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                            </div>
                            <div className="col-span-full mt-3">
                                <input id="address" type="submit" value="Add Query" className="w-full text-lg md:text-2xl hover:bg-green-600 font-rachno h-12 btn text-yellow-950 bg-green-500" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default AddQueries;