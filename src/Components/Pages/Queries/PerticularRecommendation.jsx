import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import PerticularRecommendCard from './PerticularRecommendCard';

const PerticularRecommendation = () => {
    // const [noFound, setNoFound] = useState(true)
    const lodRecommend = useLoaderData()
    // console.log(lodRecommend);
    // if (lodRecommend.length > 0) {
    //     setNoFound(false)
    // }
    return (
        <div>
            {lodRecommend.length === 0 &&
                <div>
                    <p className='relative min-h-screen flex justify-center items-center text-5xl font-bold font-poppins'>No Recommend Data Found</p>

                    <Link to='/queries' className='absolute top-96 left-[600px] btn btn-accent font-lato'>Back To Queries</Link>
                </div>
                
            }

{
    lodRecommend.map((reco, idx) => <PerticularRecommendCard reco={reco} key={idx}></PerticularRecommendCard>)
}
        </div >
    );
};

export default PerticularRecommendation;