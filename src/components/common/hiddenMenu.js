"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GraduationCap, HomeIcon } from "lucide-react";
import Link from 'next/link';

const HiddenMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            { isMenuOpen ? (
                <X className="absolute left-3 md:hidden" onClick={ toggleMenu } />
            ) : (
                <Menu className="absolute left-3 md:hidden" onClick={ toggleMenu } />
            ) }
            { isMenuOpen && (
                <div className='absolute bg-white p-7   rounded-md md:hidden w-[96%] top-[70px] left-2 border  h-[88vh]'>
                    <h2 className=' font-medium'>MAIN MENU</h2>
                    <br />
                    <ul className=' flex gap-6 flex-col '>
                        <Link href="/">
                            <li className=' flex items-center gap-3 text-base hover:text-blue-600 duration-200 ease-in-out cursor-pointer '><HomeIcon /> Home</li>
                        </Link>
                        <Link href="/new-courses">
                            <li className=' flex items-center gap-3 text-base hover:text-blue-600 duration-200 ease-in-out cursor-pointer '><GraduationCap /> Courses</li>
                        </Link>
                    </ul>
                </div>
            ) }
        </>
    );
}

export default HiddenMenu;
