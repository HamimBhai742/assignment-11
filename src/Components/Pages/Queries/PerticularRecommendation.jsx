import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PerticularRecommendCard from './PerticularRecommendCard';

const PerticularRecommendation = () => {
    // const [noFound, setNoFound] = useState(false)
    const lodRecommend = useLoaderData()
    console.log(lodRecommend);
    return (
        <div>
            {
                lodRecommend.map((reco, idx) => <PerticularRecommendCard reco={reco} key={idx}></PerticularRecommendCard>)
            }
        </div>
    );
};

export default PerticularRecommendation;