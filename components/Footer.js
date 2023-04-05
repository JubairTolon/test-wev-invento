import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='h-20 flex justify-center items-center bg-white'>
            <h1 className='text-gray-800 text-2xl'>Test case <Link href='/'><span className='text-blue-900 font-semibold'>Wev invento</span></Link></h1>
        </footer>
    );
};

export default Footer;