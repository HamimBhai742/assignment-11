import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import PerticularRecommendCard from './PerticularRecommendCard';
import { Helmet } from 'react-helmet';

const PerticularRecommendation = () => {
    // const [noFound, setNoFound] = useState(true)
    const lodRecommend = useLoaderData()
    // console.log(lodRecommend);
    // if (lodRecommend.length > 0) {
    //     setNoFound(false)
    // }
    return (
        <div className='mt-28'>
            <Helmet>
                <title>Perticular Recommendation</title>
            </Helmet>
            {lodRecommend.length === 0 &&
                <div className='flex flex-col gap-8 justify-center items-center min-h-screen'>
                    <p className=' text-5xl font-bold font-poppins'>No Recommend Data Found</p>
                    <Link to='/queries' className='btn btn-accent font-lato'>Back To Queries</Link>
                </div>

            }

            {
                lodRecommend.map((reco, idx) => <PerticularRecommendCard reco={reco} key={idx}></PerticularRecommendCard>)
            }
        </div >
    );
};

export default PerticularRecommendation;