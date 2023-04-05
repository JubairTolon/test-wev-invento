import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <nav className='h-20 text-blue-900 flex justify-between items-center bg-white px-10'>
            <div>
                <Link href='/'><Image height={80} width={80} alt='' src='/../public/logo.jpg'></Image></Link>
            </div>
            <div className='font-semibold text flex gap-8 text-xl'>
                <Link href='/'>Posts</Link>
                <Link href='/'>Comments</Link>
                <Link href='/'>Todos</Link>
            </div>
        </nav>
    );
};

export default Header;