import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoSchool } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className='my-15 mb-20 rounded-50%'>
    <header className='fixed  top-0 left-0 my-3 w-full bg-white shadow-md z-70 opacity rounded-2xl '>
      <nav className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        {/* Logo */}
        <div className='justify-items-start '>
          <h1 className='text-xl text-blue-700 hover:to-blue-400 font-bold my-auto  inline-block '>
            <a href='#home'>
              <img
                className='w-10 h-10 object-contain inline-block'
                src='/pics/logo.png '
                alt='logo'
              />
              SchCloud
            </a>
          </h1>
        </div>
        {/* Desktop Nav */}
        <div className='hidden md:flex space-x-11 items-center justify-center px-6 mx-5'>
          <ul className='hidden md:flex space-x-6'>
            <li>
              <a
                href='#aboutUs'
                className='hover:text-blue-500'
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href='#ourSolution'
                className='hover:text-blue-500'
              >
                OUR SOLUTION
              </a>
            </li>
            <li>
              <a
                href='#faq'
                className='hover:text-blue-500'
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href='#contactUs'
                className='hover:text-blue-500'
              >
                CONTACT US
              </a>
            </li>
          </ul>
          <div className=' text-1xl flex gap-10 mb-5 items-center justify-center text-center h-5 pt-5'>
            <div className=' text-blue'>
              <Link
                to='/Login'
                className='bg-transparent text-blue-900 font-bold py-3 px-6 rounded-2xl transition relative overflow-hidden hover:translate-y-0.5  border hover:bg-blue-600 hover:text-white'
              >
                LOGIN
              </Link>
            </div>
            <div className='  text-white   font-bold'>
              <Link
                to='/Login'
                className=' bg-gradient-to-r from-blue-600 to-blue-300 border  py-3 px-6 rounded-2xl transition relative overflow-hidden hover:-translate-y-0.5   hover:border-2'
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white border-t shadow-lg flex flex-col p-4 overflow-hidden w-full '>
          <ul className='flex flex-col p-4 space-y-4'>
            <li>
              <a
                href='#aboutUs'
                onClick={() => setIsOpen(false)}
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href='#ourSolution'
                onClick={() => setIsOpen(false)}
              >
                OUR SOLUTION
              </a>
            </li>
            <li>
              <a
                href='#aboutUs'
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href='#contactUs'
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </a>
            </li>
          </ul>
          <div className=' text-lg flex-col  space-y-1  justify-items-start  text-center w-full'>
            <div className=' text-blue w-full '>
              <Link
                to='/Login'
                className='flex justify-center bg-transparent text-blue-900 font-bold py-1 px-6 rounded-xl transition relative overflow-hidden hover:translate-y-0.5  border hover:bg-blue-600 hover:text-white w-full'
              >
                LOGIN
              </Link>
            </div>
            <div className=' text-white   font-bold w-full '>
              <Link
                to='/Login'
                className=' flex justify-center bg-gradient-to-r from-blue-600 to-blue-300 border  py-3 px-6 rounded-xl transition relative overflow-hidden hover:-translate-y-0.5   hover:border-2 w-full'
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    //  </div>
  );
};

export default Header;
