import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const PerticularRecommendation = () => {
    const lod = useLoaderData()
    const pp=useParams()
    console.log(pp);
    console.log(lod);
    return (
        <div>

        </div>
    );
};

export default PerticularRecommendation;