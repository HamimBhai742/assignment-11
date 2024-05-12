import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QueryCard from './QueryCard';

const Queries = () => {
    const loderQueries = useLoaderData()
    console.log(loderQueries);
    return (
        <div className='grid grid-cols-3 gap-5 mx-5 my-10'>
            {
                loderQueries.map((query, idx) => <QueryCard key={idx} query={query}></QueryCard>)
            }
        </div>
    );
};

export default Queries;