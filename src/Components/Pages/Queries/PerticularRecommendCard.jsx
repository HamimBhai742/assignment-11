import React from 'react';

const PerticularRecommendCard = ({ reco }) => {

    const { userEmail, userName, currentDateAndTime, recommendationProImg ,userPhoto} = reco
    return (
        <div className='mt-12 flex justify-center'>
            <div className='flex gap-5'>
                <div className="avatar online w-24 h-24">
                    <div className="w-24 h-24 rounded-full">
                        <img src={userPhoto} />
                    </div>
                </div>
                <div>
                    <div className='flex justify-between px-3'>
                        <p className='font-lato text-lg font-semibold'>{userName}</p>
                        <p className='font-lato text-lg font-semibold'>{currentDateAndTime}</p>
                    </div>
                  <div>
                  <img src={recommendationProImg} className='w-[550px] h-[450px] rounded-sm mt-3' alt="" />
                  <span className='ml-40 mt-3 font-lato font-medium'>Like</span>
                  <span className='ml-44 mt-3 font-lato font-medium'>Reply</span>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default PerticularRecommendCard;