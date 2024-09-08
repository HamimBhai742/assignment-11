import React from 'react';
import imgbg from '../../../assets/img (3).jpg'
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Hello there'],
        typeSpeed: 150,
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [text1] = useTypewriter({
        words: ['A query can either be a request for data results from your database or for action on the data, or for both. A query can give you an answer to a simple question, perform calculations, combine data from different tables, add, change, or delete data from a database.'],
        typeSpeed: 30,
        loop: 1,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div className="hero immggg my-5 h-[400px] rounded-lg" >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[700px]">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold font-palyfair">{text}<Cursor cursorColor='violet'></Cursor></h1>
                    <p className="mb-8">{text1}</p>
                    <Link to='/queries' className="px-8 border-2 py-3 text-xl font-inter">Quries</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;