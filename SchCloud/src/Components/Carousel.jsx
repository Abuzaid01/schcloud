import React from 'react'
import { GoZap } from 'react-icons/go'
import { FaArrowRight } from 'react-icons/fa'
import { CiPlay1 } from 'react-icons/ci'

const Carousel = () => {
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

          <div className="my-5">
            <div className="grid grid-cols-1 md:gird-cols-4 gap-5 "></div>
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
                {' '}
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

export default Carousel
