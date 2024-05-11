import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QueryCard from './QueryCard';

const Queries = () => {
    const loderQueries = useLoaderData()
    console.log(loderQueries);
    return (
        <div>
            {
                loderQueries.map((query, idx) => <QueryCard key={idx} query={query}></QueryCard>)
            }
        </div>
    );
};

export default Queries;