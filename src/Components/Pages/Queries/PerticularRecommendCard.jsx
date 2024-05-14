import React from 'react';

const PerticularRecommendCard = ({ reco }) => {

    const { userEmail, recommenderName, currentDateAndTime, recommendationProImg, recommenderPhoto } = reco

    console.log(reco);
    console.log('ccccccccccc');
    // if (reco) {

    // }
    return (
        <div className='max-sm:mx-3'>
            <div className='mt-12 flex justify-center'>
                <div className='flex md:gap-5 gap-2'>
                    <div className="avatar online md:w-24 md:h-24 w-16 h-16">
                        <div className="md:w-24 md:h-24 w-16 h-16 rounded-full">
                            <img src={recommenderPhoto} />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between md:px-3 max-sm:gap-5'>
                            <p className='font-lato md:text-lg md:font-semibold'>{recommenderName}</p>
                            <p className='font-lato md:text-lg md:font-semibold'>{currentDateAndTime}</p>
                        </div>
                        <div>
                            <img src={recommendationProImg} className='md:w-[550px] w-[350px] md:h-[450px] rounded-sm mt-3' alt="" />
                            <span className='md:ml-40 ml-16 mt-3 font-lato font-medium'>Like</span>
                            <span className='md:ml-44 ml-16 mt-3 font-lato font-medium'>Reply</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerticularRecommendCard;