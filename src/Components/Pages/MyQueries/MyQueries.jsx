import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyQueriesDetails from './MyQueriesDetails';

const MyQueries = () => {
    const myQueries = useLoaderData()
    console.log(myQueries);
    return (
        <div className='mx-5'>
            <div className="hero immggg1 my-5 h-[400px]">
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/add-queries' className="px-8 border-2 py-3 font-semibold font-inter text-xl">Add Quries</Link>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-5 '>
                {
                    myQueries.map((myQuery, idx) => <MyQueriesDetails key={idx} myQuery={myQuery}></MyQueriesDetails>)
                }
            </div>
        </div>
    );
};

export default MyQueries;