import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyQueriesDetails from './MyQueriesDetails';
import useAuth from '../../../hooks/useAuth';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const MyQueries = () => {
    const loderQueries = useLoaderData()
    const { user } = useAuth()
    const myQueriesData = loderQueries.filter(myQuery => myQuery.userEmail === user?.email)
    const [myQueries, setMyQueries] = useState(myQueriesData)
    // console.log(myQueriesData);
    console.log(myQueries);
    const [text] = useTypewriter({
        words: ['Hello there'],
        typeSpeed:200,
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div className='md:mx-5 mx-3 z-10 md:mt-28 mt-20'>
            {myQueries.length > 0 &&
                <div className="hero immggg1 my-5 h-[400px] rounded-lg">
                    {/* <div className="hero-overlay bg-opacity-60"></div> */}
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-[550px]">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold font-palyfair">{text} <Cursor cursorColor='amber'></Cursor></h1>
                            <p className="mb-5 font-lato text-xl text-gray-400">You can add query about any product of your choice. You can add the product by showing a valid reason why the product should be boycotted. After you add or post this product, many people will recommend it to you as an alternative.</p>
                            <Link to='/add-queries' className="px-5 py-3 font-semibold font-inter text-xl bg-amber-700 rounded-lg">Add Queries</Link>
                        </div>
                    </div>
                </div>}

            <div>
                {
                    myQueries.length === 0 &&
                    <div className='flex flex-col gap-8 justify-center items-center min-h-screen'>
                        <h3 className='text-3xl font-bold capitalize font-lato'>No query found Please add query</h3>
                        <Link to='/add-queries' className="px-5 py-3 font-semibold font-inter text-xl bg-green-600 rounded-lg text-amber-950 w-40">Add Queries</Link>
                    </div>
                }
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-10'>
                {
                    myQueries.map((myQuery, idx) => <MyQueriesDetails key={idx} myQuery={myQuery} myQueries={myQueries} setMyQueries={setMyQueries}></MyQueriesDetails>)
                }
            </div>
        </div>
    );
};

export default MyQueries;