import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyQuries = () => {
    const queries = useLoaderData()
    console.log(queries);
    const { productName, productBrand, productImg, queryTitel, boycottingReason, _id } = queries
    const handelQueryUpdateBtn = (e) => {
        e.preventDefault()
        const form = e.target
        const productName = form.productName.value
        const productBrand = form.productBrand.value
        const productImg = form.productImg.value
        const queryTitel = form.queryTitel.value
        const boycottingReason = form.boycottingReason.value
        const myQueries = { productBrand, productImg, productName, queryTitel, boycottingReason }
        console.log(myQueries);
        axios.put(`http://localhost:5000/my-queries/update/${_id}`, myQueries)
            .then(res => {
                console.log(res.data);
            })
    }
    return (
        <section className='max-w-[1170px] lg:mx-auto  my-8 max-sm:mx-3 md:mx-5'>
            {/* <Helmet>
            <title>Add Queries</title>
        </Helmet> */}
            <div className="p-6 bg-amber-100 mt-5 rounded-xl">
                <form onSubmit={handelQueryUpdateBtn} noValidate="" action="" className="container font-poppins flex flex-col mx-auto space-y-12">
                    <fieldset className="py-5 px-10">
                        <div className="text-center">
                            <p className="font-palyfair text-3xl md:text-5xl text-[#374151] font-bold">Update My Queries</p>
                            {/* <p className="text-xs font-raleway max-w-[700px] mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mt-10 font-raleway">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Product Name</label>
                                <input id="firstname" type="text" defaultValue={productName} className="w-full pl-3 h-12 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='productName' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Product Brand</label>
                                <input id="lastname" type="text" defaultValue={productBrand} className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='productBrand' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Product Image-URL</label>
                                <input id="firstname" type="url" defaultValue={productImg} className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='productImg' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Query Title</label>
                                <input id="lastname" type="text" defaultValue={queryTitel} className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='queryTitel' />
                            </div>
                            {/* <div className="col-span-full">
                        <label htmlFor="address" className="text-xl font-semibold">Photo</label>
                        <input id="address" type="url" placeholder="Enter photo URL" className="w-full h-12   pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='photo' />
                    </div> */}

                            <div className="col-span-full">
                                <label htmlFor="address" className="text-xl font-semibold">Boycotting Reason Details</label>
                                {/* <input id="address" type="url" placeholder="Enter photo URL" className="w-full h-12  pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.photo} name='photo' /> */}
                                <textarea defaultValue={boycottingReason} id="description" name="boycottingReason" rows="4" cols="50" className="w-full mt-2 pt-1   pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                            </div>
                            <div className="col-span-full mt-3">
                                <input id="address" type="submit" value="Add Query" className="w-full text-2xl hover:bg-amber-600 font-rachno h-12 btn text-yellow-950 bg-amber-500" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default UpdateMyQuries;