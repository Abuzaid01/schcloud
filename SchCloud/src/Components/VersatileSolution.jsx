import React from 'react'
import { GoZap } from 'react-icons/go'
import { FaArrowRight } from 'react-icons/fa'
import { CiPlay1 } from 'react-icons/ci'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { LuSchool } from 'react-icons/lu'
import { TbSchool } from 'react-icons/tb'
import { SlCalender } from 'react-icons/sl'
import { FiAward } from 'react-icons/fi'
import { FiBriefcase } from 'react-icons/fi'
import { GoChevronRight } from 'react-icons/go'
import { GoChevronLeft } from 'react-icons/go'
import Carousel from './Carousel'

const VersatileSolution = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className=" flex flex-col gap-5 text-center justify-center items-center p-5 pt-20 ">
          <div className="flex flex-row gap-3 justify-center items-center bg-blue-100 text-blue-700 text-base rounded-3xl px-3 py-2">
            <GoZap className="size-5" />
            <div className=" ">Versatile Solutions</div>
          </div>

          <div className="flex gap-5 flex-col">
            <h2 className="text-4xl font-bold">
              Built for Every Type of Educational Institution
            </h2>
            <p className="text-xl text-gray-700 md:px-90">
              Our platform adapts seamlessly to your specific needs, regardless
              of your institution type or size
            </p>
          </div>
        </div>
        <div>
          {/* Carousel Section */}

          <div className="my-5 ">
            <div className="flex flex-row space-x-3 md:space-x-5 items-center overflow-hidden mx-10 md:mx-50 relative  ">
              {/* <div className="absolute top-50% left-0 z-50 w-10 h-10 bg-white  border-1 border-gray-300 hover:border-gray-700 hover:cursor-pointer shadow-xl shadow-gray-200 rounded-full items-center justify-center flex mr-5 ">
                <GoChevronLeft className="size-7 " />
              </div>

              <div className="absolute top-50% right-0 z-50 w-10 h-10 bg-white  border-1 border-gray-300 hover:border-gray-700 hover:cursor-pointer shadow-xl shadow-gray-200 rounded-full items-center justify-center flex space-x-10 ml-10 ">
                <GoChevronRight className="size-7 " />
              </div> */}
              <Carousel autoSlideInterval={5000}>
                <div
                  id="carousel1"
                  className="flex flex-col space-x-3 md:flex-row  space-y-5 p-5 mx-auto w-full flex-shrink-0  "
                >
                  <div className="flex flex-col  rounded-xl bg-white shadow-2xl border border-gray-100 p- mx-5 hover:-translate-y-3 transition-all ease-in-out overflow-hidden ">
                    <div className="flex flex-row justify-between bg-gradient-to-r from-pink-400 to-pink-600 px-7 py-5 rounded-t-xl items-center relative ">
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -top-10 -right-10  "></div>
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -bottom-13 -left-10  "></div>

                      <LuSchool className="size-11 text-white font-bold inline-flex " />
                      <p className="text-white/80">Ages 5-11</p>
                    </div>
                    <div className="px-5 py-5 space-y-3 ">
                      <h2 className="font-bold text-xl ">Elementary Schools</h2>
                      <p className="text-gray-500 text-base">
                        Nurturing young minds with age-appropriate management
                        tools
                      </p>
                      <ul className="text-gray-500 text-sm space-y-1">
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Complete Management Suite
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Custom Workflows
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          24/7 Support
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-row p-3 px-5 bg-pink-50 rounded-b-xl items-center justify-between text-gray-600">
                      <p className=" text-sm font-semibold">Learn More</p>
                      <FaArrowRight className="size-3 " />
                    </div>
                  </div>
                  <div className="flex flex-col  rounded-xl bg-white shadow-2xl border border-gray-100 p- mx-5 hover:-translate-y-3 transition-all ease-in-out overflow-hidden ">
                    <div className="flex flex-row justify-between bg-gradient-to-r from-blue-400 to-blue-600 px-7 py-5 rounded-t-xl items-center relative ">
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -top-10 -right-10  "></div>
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -bottom-13 -left-10  "></div>

                      <TbSchool className="size-11 text-white font-bold inline-flex " />
                      <p className="text-white/80">Ages 12-18</p>
                    </div>
                    <div className="px-5 py-5 space-y-3 ">
                      <h2 className="font-bold text-xl ">Secondary Schools</h2>
                      <p className="text-gray-500 text-base">
                        Comprehensive solutions for middle and high school
                        education
                      </p>
                      <ul className="text-gray-500 text-sm space-y-1">
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Complete Management Suite
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Custom Workflows
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          24/7 Support
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-row p-3 px-5 bg-blue-50 rounded-b-xl items-center justify-between text-gray-600">
                      <p className=" text-sm font-semibold">Learn More</p>
                      <FaArrowRight className="size-3 " />
                    </div>
                  </div>

                  <div className="flex flex-col  rounded-xl bg-white shadow-2xl border border-gray-100 p- mx-5 hover:-translate-y-3 transition-all ease-in-out overflow-hidden ">
                    <div className="flex flex-row justify-between bg-gradient-to-r from-purple-400 to-purple-600 px-7 py-5 rounded-t-xl items-center relative ">
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -top-10 -right-10  "></div>
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -bottom-13 -left-10  "></div>

                      <SlCalender className="size-11 text-white font-bold inline-flex " />
                      <p className="text-white/80">Ages 5-11</p>
                    </div>
                    <div className="px-5 py-5 space-y-3 ">
                      <h2 className="font-bold text-xl ">Private Schools</h2>
                      <p className="text-gray-500 text-base">
                        Exclusive features for premium educational institution
                      </p>
                      <ul className="text-gray-500 text-sm space-y-1">
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Complete Management Suite
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Custom Workflows
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          24/7 Support
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-row p-3 px-5 bg-purple-50 rounded-b-xl items-center justify-between text-gray-600">
                      <p className=" text-sm font-semibold">Learn More</p>
                      <FaArrowRight className="size-3 " />
                    </div>
                  </div>
                </div>
                <div
                  id="carousel2"
                  className="flex flex-col space-x-3 md:flex-row  space-y-5 p-5 mx-5 w-full flex-shrink-0 "
                >
                  <div className="flex flex-col  rounded-xl bg-white shadow-2xl border border-gray-100 p- mx-5 hover:-translate-y-3 transition-all ease-in-out overflow-hidden ">
                    <div className="flex flex-row justify-between bg-gradient-to-r from-green-400 to-green-600 px-7 py-5 rounded-t-xl items-center relative ">
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -top-10 -right-10  "></div>
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -bottom-13 -left-10  "></div>

                      <LuSchool className="size-11 text-white font-bold inline-flex " />
                      <p className="text-white/80">All pages</p>
                    </div>
                    <div className="px-5 py-5 space-y-3 ">
                      <h2 className="font-bold text-xl ">Public Schools</h2>
                      <p className="text-gray-500 text-base">
                        Scalable solutions for government educational systems
                      </p>
                      <ul className="text-gray-500 text-sm space-y-1">
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Complete Management Suite
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Custom Workflows
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          24/7 Support
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-row p-3 px-5 bg-green-50 rounded-b-xl items-center justify-between text-gray-600">
                      <p className=" text-sm font-semibold">Learn More</p>
                      <FaArrowRight className="size-3 " />
                    </div>
                  </div>
                  <div className="flex flex-col  rounded-xl bg-white shadow-2xl border border-gray-100 p- mx-5 hover:-translate-y-3 transition-all ease-in-out overflow-hidden ">
                    <div className="flex flex-row justify-between bg-gradient-to-r from-orange-400 to-orange-600 px-7 py-5 rounded-t-xl items-center relative ">
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -top-10 -right-10  "></div>
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -bottom-13 -left-10  "></div>

                      <FiAward className="size-11 text-white font-bold inline-flex " />
                      <p className="text-white/80">Global</p>
                    </div>
                    <div className="px-5 py-5 space-y-3 ">
                      <h2 className="font-bold text-xl ">
                        International Schools
                      </h2>
                      <p className="text-gray-500 text-base">
                        Multi-cultural and mUlti-language Systems
                      </p>
                      <ul className="text-gray-500 text-sm space-y-1">
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Complete Management Suite
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Custom Workflows
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          24/7 Support
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-row p-3 px-5 bg-orange-50 rounded-b-xl items-center justify-between text-gray-600">
                      <p className=" text-sm font-semibold">Learn More</p>
                      <FaArrowRight className="size-3 " />
                    </div>
                  </div>

                  <div className="flex flex-col  rounded-xl bg-white shadow-2xl border border-gray-100 p- mx-5 hover:-translate-y-3 transition-all ease-in-out overflow-hidden ">
                    <div className="flex flex-row justify-between bg-gradient-to-r from-teal-400 to-teal-600 px-7 py-5 rounded-t-xl items-center relative ">
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -top-10 -right-10  "></div>
                      <div className="absolute bg-white/20 w-20 h-20 rounded-full -bottom-13 -left-10  "></div>

                      <LuSchool className="size-11 text-white font-bold inline-flex " />
                      <p className="text-white/80">Adult</p>
                    </div>
                    <div className="px-5 py-5 space-y-3 ">
                      <h2 className="font-bold text-xl ">
                        Vocational Institution
                      </h2>
                      <p className="text-gray-500 text-base">
                        Specialized tools for technical and professional
                        training
                      </p>
                      <ul className="text-gray-500 text-sm space-y-1">
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Complete Management Suite
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          Custom Workflows
                        </li>
                        <li>
                          <IoMdCheckmarkCircleOutline className="size-5 inline-block mr-1 text-green-500" />
                          24/7 Support
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-row p-3 px-5 bg-teal-50 rounded-b-xl items-center justify-between text-gray-600">
                      <p className=" text-sm font-semibold">Learn More</p>
                      <FaArrowRight className="size-3 " />
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>

          {/* Stats Section */}

          <div className="bg-blue-900 text-white text-4xl p-15">
            <div className="grid grid-cols-2 gap-5 gap-y-10 md:flex md:gap-20 md:py-7 items-center justify-center ">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="font-bold">500+ </h1>
                <p className="text-base text-gray-200"> Schools Trust Us</p>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h1 className="font-bold">50,000+ </h1>
                <p className="text-base text-gray-200"> Students Managed</p>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h1 className="font-bold">99.9% </h1>
                <p className="text-base text-gray-200">Uptime Guarantee</p>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h1 className="font-bold">24/7 </h1>
                <p className="text-base text-gray-200"> Support Available</p>
              </div>
            </div>
          </div>

          {/* Call To action Section */}

          <div className="m-5 py-10 md:px">
            <div className=" items-center justify-center text-center">
              <h2 className="text-4xl text-black font-bold my-5 ">
                Ready to Transform Your School Management?
              </h2>
              <p className="items-center text-xl text-gray-500 md:px-90">
                Join hundreds of educational institutions already using SchCloud
                to streamline their operations and improve educational outcomes.
              </p>
            </div>
            <div className="my-5 mt-10">
              <div className="text-1xl flex gap-10 mb-5 items-center justify-center text-center">
                <div className=" text-blue">
                  <button className="text-white bg-gradient-to-r from-blue-600 to-blue-300 font-bold py-3 px-6 rounded-2xl transition relative overflow-hidden hover:translate-y-0.5 ">
                    Start Free Trial
                    <FaArrowRight className="inline-flex size-5 ml-3" />
                  </button>
                </div>
                <div className=" bg-transparent text-blue-900 font-bold">
                  <button className=" border-2  py-3 px-6 rounded-2xl transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-blue-900 hover:text-white hover:border-2">
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VersatileSolution
