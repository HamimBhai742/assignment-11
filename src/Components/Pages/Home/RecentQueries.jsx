import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';
import RecntOueryCard from './RecntOueryCard';

const RecentQueries = () => {
    const { user } = useAuth()
    const loD = useLoaderData()
    const newD = loD.slice(0, 6)
    console.log(newD);
    console.log(loD);
    return (
        <div className='md:p-5 grid grid-cols-1 md:grid-cols-3 gap-5 mt-8'>
            {
                newD.map((que,idx)=><RecntOueryCard key={idx} que={que}></RecntOueryCard>)
            }
        </div>
    );
};

export default RecentQueries;