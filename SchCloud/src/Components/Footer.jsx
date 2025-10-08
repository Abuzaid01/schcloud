import React from 'react'
import { IoSchool } from 'react-icons/io5'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-500 pt-16 px-6 pb-5 md:pb-15">
        <div className=" grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-4 items-start justify-start md: md:justify-center md:px-20  ">
          <div className="pr-70 md:px-3">
            {/* <div className="flex flex-cols items-center  gap-3 text-blue-700 ">
              <IoSchool className="size-5 text-blue-300 inline-block my-auto" />
              <h3 className=" text-xl  font-bold mb-5 inline-block my-auto">
                SchCloud
              </h3>
            </div> */}

            <div className="justify-items-start ">
              <h1 className="text-xl text-blue-700 hover:to-blue-400 font-bold my-auto  inline-block ">
                <a href="#home">
                  <img
                    className="w-15 h-15 object-contain inline-block"
                    src="/pics/logo.png "
                    alt="logo"
                  />{' '}
                  SchCloud
                </a>
              </h1>
            </div>

            <p className="">
              Empowering educational institutions with comprehensive school
              management solutions from registration to graduation.
            </p>
          </div>
          <div className="pr-70 md:px-3">
            <h3 className="text-lg text-white font-bold mb-3">Solutions</h3>
            <ul>
              <li className="hover:text-white">
                <a href="#">Student Management</a>{' '}
              </li>
              <li className="hover:text-white">
                <a href="#">Fee Management</a>{' '}
              </li>
              <li className="hover:text-white">
                <a href="#">Teacher Portal</a>{' '}
              </li>
              <li className="hover:text-white">
                <a href="#">Analytics</a>{' '}
              </li>
            </ul>
          </div>
          <div className="pr-70 md:px-3">
            <h3 className="text-lg text-white font-bold mb-3">Company</h3>
            <ul>
              <li className="hover:text-white">
                <a href="#">About Us</a>{' '}
              </li>
              <li className="hover:text-white">
                <a href="#">Contact</a>{' '}
              </li>
              <li className="hover:text-white">
                <a href="#">Support</a>{' '}
              </li>
              <li className="hover:text-white">
                <a href="#">FAQ</a>{' '}
              </li>
            </ul>
          </div>
          <div className="pr-70 md:px-3">
            <h3 className="text-lg text-white font-bold mb-3">Legal</h3>
            <ul>
              <li className="hover:text-white">
                <a href="#"> Privacy Policy</a>{' '}
              </li>
              <li className="hover:text-white">
                <a href="#">Terms of Service</a>{' '}
              </li>
              <li className="hover:text-white">
                <a href="#">Cookie Policy</a>{' '}
              </li>
            </ul>
          </div>
        </div>
        <div className="items-center justify-center text-center">
          <hr className="border-gray-700 mx-1 md:mx-23 my-7" />
          <p>© 2025 SchCloud. All rights reserved. Built for Smart Schools.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
