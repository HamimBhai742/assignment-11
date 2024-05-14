import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QueryCard from './QueryCard';
import { TfiLayoutGrid2, TfiLayoutGrid3 } from 'react-icons/tfi';

const Queries = () => {
    const loderQueries = useLoaderData()
    const [queriesData, setQueriesData] = useState(loderQueries)
    const [layout, setLayout] = useState(false)
    console.log(loderQueries);
    const handleToggle = () => {
        setLayout(!layout)
    }
    console.log(layout);
    const handelSearchBtn = () => {
        // e.preventDefault()
        // console.log(e.target);
        const input = document.getElementById('seaarchValue')
        const inputValue = input.value
        const searchData = queriesData.filter(que => que.productName === inputValue)
        setQueriesData(searchData)
        console.log(input.value);

    }
    return (
        <div className='md:mx-5 mx-3 mt-28'>
            <div className=' flex justify-around mb-5'>

                <label className="input input-bordered flex items-center gap-2">
                    <input id='seaarchValue' type="text" className="grow" placeholder="Search" />

                    <svg onClick={handelSearchBtn} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70 hover:cursor-pointer"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    {/* <input xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70 hover:cursor-pointer"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg> */}
                </label>

                <div className='flex gap-3 items-center max-sm:hidden'>
                    <h4 className='font-lato font-semibold'>Change Layout</h4>
                    {/* <input type="checkbox"  className="toggle theme-controller" /> */}
                    <label className="flex cursor-pointer gap-3 items-center">
                        <span className="label-text text-xl"><TfiLayoutGrid3></TfiLayoutGrid3></span>
                        <input onChange={handleToggle} type="checkbox" value="" className="toggle theme-controller" />
                        <span className="label-text text-xl"><TfiLayoutGrid2></TfiLayoutGrid2></span>
                    </label>
                </div>
            </div>
            <div className={layout ? 'grid grid-cols-2 gap-8' : 'grid md:grid-cols-3 gap-5 grid-cols-1'} >
                {
                    queriesData.map((query, idx) => <QueryCard key={idx} query={query}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default Queries;