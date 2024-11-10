"use client"

import React, { useState } from 'react';
import Button from './Button';
import { MenuIcon, X, XCircle } from 'lucide-react';
import logo from '@/app/images/2-removebg-preview.svg'
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-8 py-6 flex items-center shadow-lg bg-white text-black md:justify-between ">
      <Image src={logo} alt="logo" className=' h-[6rem] w-[12rem]  border-white' />
      <div className="flex justify-between w-full items-center">


        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-black ml-20"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-start mr-32 w-full ">
        <ul className="flex items-center gap-10">
          <li>Pricing</li>
          <li>Blog</li>
          <li>Features</li>
          <li>How it works</li>
        </ul>
      </nav>

      {/* Mobile Dropdown Navigation */}
      {isMenuOpen && (
        <div className="absolute top-0 flex flex-col items-center left-0 right-0 bg-white shadow-lg z-10 md:hidden  py-4">

          <div onClick={toggleMenu} className='w-full  flex justify-end  px-6 cursor-pointer'>
            <XCircle color='red' />
          </div>

          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="py-2 hover:bg-gray-200 cursor-pointer">Pricing</li>
            <li className="py-2 hover:bg-gray-200 cursor-pointer">Blog</li>
            <li className="py-2 hover:bg-gray-200 cursor-pointer">Features</li>
            <li className="py-2 hover:bg-gray-200 cursor-pointer">How it works</li>
          </ul>
          <div className="flex items-center justify-center gap-4  w-full max-w-[30rem]">
            <Button size="small">Login</Button>
            <Button variant="secondary" size="small">Start Selling</Button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="lg:flex items-center justify-center gap-4 ml-[-10rem] w-full max-w-[30rem] hidden ">
        <Button size="small">Login</Button>
        <Button variant="secondary" size="small">Start Selling</Button>
      </div>
    </header>
  );
};

export default Header;
