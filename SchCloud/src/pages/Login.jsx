import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Login = () => {
  return (
    <div className='bg-blue-500 opacity h-screen w-screen items-center justify-center flex flex-col gap-3 '>
      <div className=' p-5 rounded-xl bg-white/90   '>
        <div className=' flex flex-col gap-2 justify-center items-center mb-7 '>
          <h2 className=' text-2xl text-blue-400 font-semibold  '>
            <img
              src='/pics/logo.png'
              className='w-15 h-15 inline'
            />
            SchCloud
          </h2>
          <h2 className='text-2xl font-black '>Welcome Back</h2>
          <p className='text-sm text-black/80'>
            Sign in to your SchCloud account to continue
          </p>
        </div>

        <div className='items-center justify-center'>
          <form
            action=''
            className='flex flex-col '
          >
            <label
              htmlFor='email'
              className='text-black/80  text-sm mb-3'
            >
              Email Address
              <input
                className='block bg-yellow-200 w-full h-10 border border-gray-300 rounded-sm mt-3'
                type='email'
                id='email'
              />
            </label>

            <label
              htmlFor='password'
              className='text-black/80  text-sm mb-3'
            >
              Password
              <input
                className='block bg-yellow-200 w-full h-10 border border-gray-300 rounded-sm mt-3'
                type='password'
                id='password'
              />
            </label>
            <div className='flex flex-row justify-between text-sm mb-3 '>
              <label
                htmlFor='checkbox'
                className='text-black/80'
              >
                <input
                  type='checkbox'
                  className='mr-1'
                />
                Remember me
              </label>
              <p>
                <a
                  href=''
                  className='text-blue-500  hover:text-blue-900'
                >
                  Forgot Password?
                </a>
              </p>
            </div>

            <button className=' bg-gradient-to-r from-blue-900 to-blue-400 rounded-sm h-10 w-full my-5 text-white '>
              Sign-in <FaArrowRight className='w-5 h-5 inline ml-2 ' />
            </button>
            <div className='text-sm '>
              <p className='text-black/80  '>
                Don't have an account?
                <a
                  href='#'
                  className='text-blue-500 hover:text-blue-900 ml-1 '
                >
                  Contact your administrator
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <p className='text-sm text-white/80  '>
        © 2025 SchCloud. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
