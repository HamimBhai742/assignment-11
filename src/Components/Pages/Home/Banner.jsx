import React from 'react';
import imgbg from '../../../assets/img (3).jpg'

const Banner = () => {
    return (
        <div className="hero immggg my-5 h-[400px]">
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="px-8 border-2 py-3 text-xl font-inter">Quries</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;