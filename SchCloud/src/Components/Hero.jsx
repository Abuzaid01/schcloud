import React from 'react';
import Header from './Header';
import { TbLayoutDashboard } from 'react-icons/tb';
import { CiPlay1 } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { PiDotsThreeOutlineDuotone } from 'react-icons/pi';
import { GoPeople } from 'react-icons/go';
import { TbSchool } from 'react-icons/tb';
import { FaRegBell } from 'react-icons/fa6';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BsCurrencyDollar } from 'react-icons/bs';
import { LuChartColumn } from 'react-icons/lu';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router';

const Hero = () => {
  return (
    // opacity-30
    //before:absolute before:inset-0 before:bg-black/50
    <div
      id='home'
      className=' items-center bg-[url(/public/pics/studentsGroup-4.jpg)] overflow-auto min-h-screen w-full  bg-cover bg-center bg-no-repeat justify-center align-center py-30 px-5 md:pt-30 md:px-30 md pb-5 -mt-30 mb-10  bg-black/30 bg-blend-color '
    >
      <Header />
      <div className=' mx-auto md:mt-40 grid grid-flow-cols cols-1 md:grid-cols-2 gap-6 mt-30'>
        <div
          id='firstContainer'
          className=' rounded-xl '
        >
          <h1
            className='
          text-5xl md:text-5xl font-bold mb-5 text-white '
          >
            Transform Your School with{' '}
            <span className='bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent leading-right'>
              Smart Management
            </span>
          </h1>
          <p className='text-xl text-white font-bold-200 mb-2'>
            From registration to graduation, manage every aspect of your
            educational institution on one powerful, cloud-based platform
            designed for modern schools.
          </p>
          <ul className='list text-xl text-white font-bold-100 my-10 space-y-3'>
            <div className='flex items-center gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-blue-500 to-white/90 text-gray-200 rounded-full w-6 h-6  mr-1'>
                <IoMdCheckmarkCircleOutline className='size-5 ' />
              </div>
              <li>Complete Student Lifecycle Management</li>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-blue-500 to-white/90from-blue-500 to-white/90 text-gray-200 rounded-full w-6 h-6  mr-1'>
                <IoMdCheckmarkCircleOutline className='size-5 ' />
              </div>
              <li>Seamless Parent-Teacher Communication</li>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-blue-500 to-white/90 text-gray-200 rounded-full w-6 h-6  mr-1'>
                <IoMdCheckmarkCircleOutline className='size-5 ' />
              </div>
              <li>Real-time Analytics & Reporting</li>
            </div>
          </ul>
          <div className='text-1xl flex gap-10 mb-5'>
            <div className=' bg-white text-blue-600 font-bold py-3 px-6 rounded-2xl transition relative overflow-hidden hover:translate-y-0.5 hover:bg-white/90 '>
              <Link
                to='/Login'
                className=''
              >
                Start Free Trial
              </Link>
              <FaArrowRight className='inline-flex size-5 ml-3' />
            </div>
            <div className=' bg-transparent text-white font-bold border-2  py-3 px-6 rounded-2xl transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white hover:border-none'>
              <CiPlay1 className='inline-flex size-5 mr-3' />
              <Link
                to='/Login'
                className=' '
              >
                Watch Demo
              </Link>
            </div>
          </div>
          <hr className='border-white mx-3 my-5' />
          <div
            id='stat'
            className='flex flex-row gap-6 items-center mb-5'
          >
            <div className='flex flex-col text-white text-l '>
              <div className=' font-bold text-2xl '>99.9%</div>
              <div className='text-white/70 text-sm'>Uptime</div>
            </div>

            <div className='flex flex-col text-white text-l '>
              <div className=' font-bold text-2xl '>50K+</div>
              <div className='text-white/70 text-sm'>Students</div>
            </div>
            <div className='flex flex-col text-white text-l '>
              <div className=' font-bold text-2xl '>24/7</div>
              <div className='text-white/70 text-sm'>Support</div>
            </div>
          </div>
        </div>
        <div
          id='secondContainer'
          className=' relative flex flex-col rounded-xl border border-white mx-5  md:max-h-100 md: my-20'
        >
          <div className=''>
            <div className='flex flex-row items-center justify-center text-white font-semibold text-l bg-gradient-to-r from-blue-700 to-blue-300 rounded-t-xl p-3'>
              <div className='bg-gray-500 mr-3 rounded-sm flex items-center justify-center w-6 h-6 '>
                <TbLayoutDashboard className=' size-5' />
              </div>
              <div className=' grow'>
                <h4 className=' '>SchCloud Dashboard</h4>
              </div>

              <div className='font-white bg-clip-text'>
                <PiDotsThreeOutlineDuotone className=' size-10 text-gray-400' />
              </div>
            </div>
            <div className='grid grid-flow-row gap-5 bg-gray-100 p-5 rounded-b-xl'>
              <div className='grid grid-flow-col gap-5'>
                <div className='flex flex-row-2 text-blue-600 bg-blue-100 rounded-xl p-3 text-l '>
                  <div className=' grow'>
                    <div className=' font-bold text-2xl '>1,250</div>
                    <div className='text-gray-600'>Students</div>
                  </div>
                  <div className='  '>
                    <GoPeople className='size-7 ' />
                  </div>
                </div>

                <div className='flex flex-row text-l text-green-600 bg-green-100 rounded-xl p-3 '>
                  <div className='grow'>
                    <div className=' font-bold text-2xl '>85</div>
                    <div className='text-gray-600'>Teachers</div>
                  </div>
                  <TbSchool className='size-7' />
                </div>
              </div>
              <div className='bg-white rounded-xl text-gray-400 p-10'>
                <LuChartColumn className=' size-15 not-last:justify-self-center mx-auto' />
              </div>
              <div className='flex flex-col gap-2 mb-2'>
                <div className=' flex p-1 bg-white rounded-md text-sm text-gray-500'>
                  <div className='text-green-500'>
                    <GoDotFill className='inline size-5' />
                  </div>{' '}
                  New student enrolled
                </div>

                <div className=' flex p-1 bg-white rounded-md text-sm text-gray-500'>
                  <div className='text-blue-500'>
                    <GoDotFill className='inline size-5' />
                  </div>
                  Fee payment received
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center text-black bg-white rounded-xl p-2 absolute -top-7 -right-7 motion-safe:animate-bounce delay-500 ease-in-out justify-items-center align-items-center text-sm '>
            <div className='flex items-center justify-center bg-gradient-to-r from-green-700 to-green-300 text-gray-200 rounded-full w-6 h-6  mr-1'>
              <IoMdCheckmarkCircleOutline className='size-5 ' />
            </div>

            <div className=' grow'>
              <div className='font-semibold '>98.5%</div>
              <div className='text-gray-500'>Attendance</div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center text-black bg-white rounded-xl p-2 absolute -bottom-10 md:-bottom-16 -left-7  motion-safe:animate-bounce text-sm'>
            <div className=' bg-gradient-to-r from-blue-700 to-blue-300 text-gray-200 rounded-full flex items-center justify-center w-6 h-6 mr-1'>
              <BsCurrencyDollar className='size-5' />
            </div>
            <div className='grow '>
              <div className=' font-semibold '>$125K</div>
              <div className='text-gray-500'>Collected</div>
            </div>
          </div>
          <div className='absolute -right-5 top-[50%] p-3 bg-white rounded-full motion-reduce:animate-spin'>
            <FaRegBell className='size-5 text-blue-400 animate-pulse' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
