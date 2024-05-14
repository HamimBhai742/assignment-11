import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 mt-5">
            <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <a className=' flex gap-3 items-center'>
                    <img className="w-auto h-8" src="/web-logo.png" alt="" />
                    <h3 className='text-4xl font-bold font-palyfair text-white'>Goods Galaxy</h3>
                </a>

                <p className="text-sm text-gray-400 pt-6">© Copyright 2023. All Rights Reserved.</p>

                <div className="flex pr-5 gap-5 text-4xl text-blue-600">
                    <a href="https://www.facebook.com/profile.php?id=100067749370411" target='_blank'><FaFacebook></FaFacebook></a>
                    <a href="https://www.linkedin.com/in/md-hamim-9047b6307/" target='_blank'><FaLinkedin></FaLinkedin></a>
                    <a href="https://twitter.com/" target='_blank'><FaTwitter></FaTwitter></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;