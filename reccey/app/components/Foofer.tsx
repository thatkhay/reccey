// components/Footer.tsx
import Image from 'next/image';
import React from 'react';
import xLogo from '@/app/images/x_logo.svg.svg'
import tiktokLogo from '@/app/images/LOGOS.svg'
const Footer: React.FC = () => {
  return (
    <footer className=" text-white p-4 mt-auto bg-[#036C20] px-8 py-12 flex flex-col lg:flex-row justify-around gap-6">
      <div className=" flex flex-col items-center lg:w-[20%] md:w-[20%] w-[90%] mr-8">
        <div className=" flex  items-center mb-9 gap-4">
          <Image src={xLogo} alt='xLogo' />
          <Image src={tiktokLogo} alt='tiktokLogo' />
        </div>

        <p>Join the growing community of creators <br />
          who trust reccey to power their businesses</p>
      </div>
      <div className=" flex flex-col items-start lg:w-[20%] md:w-[20%] w-[90%]">
        <div className=" flex  items-center mb-9">
          <p className='text-white font-semibold'>Navigation Links</p>
        </div>

        <ul className='flex flex-col items-start gap-4'>
          <li>Blog</li>
          <li>Features</li>
          <li>How it works </li>
        </ul>
      </div>
       <div className=" flex flex-col items-start lg:w-[20%] md:w-[20%] w-[90%]">
        <div className=" flex  items-center mb-9">
          <p className='text-white font-semibold'>Legal Links</p>
        </div>

        <ul className='flex flex-col items-start gap-4'>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Copyright Policy </li>
          <li>Cookies Policy</li>
          <li>Affiliate Terms </li>
        </ul>
      </div>
       <div className=" flex flex-col items-start lg:w-[20%] md:w-[20%] w-[90%]">
        <div className=" flex  items-center mb-9">
          <p className='text-white font-semibold'>Support</p>
        </div>

        <ul className='flex flex-col items-start gap-4'>
          <li>FAQ</li>
          <li>Contact Support</li>
         
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
