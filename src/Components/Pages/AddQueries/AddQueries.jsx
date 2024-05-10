import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AddQueries = () => {
    const { user } = useAuth()
    const handelQueryAddBtn = () => {

    }
    return (
        <section className='max-w-[1170px] lg:mx-auto  my-8 max-sm:mx-3 md:mx-5'>
            {/* <Helmet>
                <title>Add Queries</title>
            </Helmet> */}
            <div className="p-6 bg-green-100 mt-5 rounded-xl">
                <form onSubmit={handelQueryAddBtn} noValidate="" action="" className="container font-poppins flex flex-col mx-auto space-y-12">
                    <fieldset className="py-5 px-10">

                        <div className="text-center">
                            <p className="font-palyfair text-3xl md:text-5xl text-[#374151] font-bold mb-5">Add New Queries</p>
                            {/* <p className="text-xs font-raleway max-w-[700px] mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mt-5 font-raleway">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Product Name</label>
                                <input id="firstname" type="text" placeholder="Product Name" className="w-full pl-3 h-12 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='itemName' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Product Brand</label>
                                <input id="lastname" type="text" placeholder="Product Brand" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='subcategoryName' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-xl font-semibold">Product Image-URL</label>
                                <input id="firstname" type="url" placeholder="Product Image Url" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='price' />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-xl font-semibold">Query TItle</label>
                                <input id="lastname" type="text" placeholder="Query TItle" className="w-full pl-3 h-12  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='photo' />
                            </div>
                            {/* <div className="col-span-full">
                            <label htmlFor="address" className="text-xl font-semibold">Photo</label>
                            <input id="address" type="url" placeholder="Enter photo URL" className="w-full h-12   pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" name='photo' />
                        </div> */}

                            <div className="col-span-full">
                                <label htmlFor="address" className="text-xl font-semibold">Boycotting Reason Details</label>
                                {/* <input id="address" type="url" placeholder="Enter photo URL" className="w-full h-12  pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={loderCraft?.photo} name='photo' /> */}
                                <textarea placeholder="Boycotting Reason Details..." id="description" name="description" rows="4" cols="50" className="w-full mt-2 pt-1   pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                            </div>
                            <div className="col-span-full mt-3">
                                <input id="address" type="submit" value="Add Query" className="w-full text-2xl hover:bg-green-600 font-rachno h-12 btn text-yellow-950 bg-green-500" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default AddQueries;