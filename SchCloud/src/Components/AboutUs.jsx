import React from 'react'
import { PiBookOpen } from 'react-icons/pi'
import { BsStar } from 'react-icons/bs'
import { GoPeople } from 'react-icons/go'
import { TbTimeDuration0 } from 'react-icons/tb'

const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      className=" relative flex flex-col md:gap- md:flex-row items-center justify-center mx-5 md:mx-30 md:p-10"
    >
      <div className=" md: flex flex-col items-center flex-1 md:mr-20">
        <div className="flex flex-col border-l-4 border-blue-500 pl-5 md:pr-">
          <h2 className=" font-bold text-3xl my-5 md:pt-10">About SchCloud</h2>
          <div className="flex flex-col gap-4 text-lg text-gray-600 md:pr-30 ">
            <p>
              SchCloud is a comprehensive school management platform designed to
              revolutionize educational administration. We understand the unique
              challenges faced by educational institutions in managing their
              day-to-day operations efficiently.
            </p>
            <p>
              Our cloud-based solution streamlines every aspect of school
              management, from student registration and attendance tracking to
              fee collection and academic reporting. Built with modern
              technology and user-centric design, SchCloud empowers schools to
              focus on what matters most - providing quality education.
            </p>
            <p>
              With features tailored for administrators, teachers, students, and
              parents, we create a connected educational ecosystem that enhances
              communication, improves efficiency, and drives better learning
              outcomes for all stakeholders.
            </p>
          </div>
        </div>
        <div className=" flex ">
          <div className="flex flex-row gap-6 items-center -ml-80 md:-ml-85 my-10 md:">
            <div className="flex flex-col text-blue-500 text-l ">
              <div className=" font-bold text-3xl ">2019</div>
              <div className="text-gray-700 text-sm">Founded</div>
            </div>

            <div className="flex flex-col text-blue-500 text-l ">
              <div className=" font-bold text-3xl ">500+</div>
              <div className="text-gray-700 text-sm">Schools</div>
            </div>
            <div className="flex flex-col text-blue-500 text-l ">
              <div className=" font-bold text-3xl ">50K+</div>
              <div className="text-gray-700 text-sm">Students</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md: relative flex items-center justify-center bg-gray-300 rounded-full w-80 h-80 ">
        <div className="  items-center justify-center rounded-full flex w-64 h-64 bg-white">
          <img
            src="./src/assets/logo.png"
            alt=" logo "
            className="object-contain w-32 h-32 "
          />
        </div>
        <div className="absolute flex rounded-full w-15 h-15 items-center justify-center -top-3 -right-3 bg-gradient-to-r from-blue-700 to-blue-300 motion-safe:animate-bounce motion-reduce: text-white">
          <PiBookOpen className="size-10" />
        </div>
        <div className="absolute flex rounded-full w-10 h-10 items-center justify-center  -left-9 bg-gradient-to-r to-orange-500 from-orange-300 text-white transition-transform translate-x-1 ease-in-out">
          <BsStar className="size-5" />
        </div>
        <div className="absolute flex rounded-full w-13 h-13 items-center justify-center -bottom-5 -left-5 bg-gradient-to-r from-blue-700 to-blue-300 motion-safe:animate-bounce motion-reduce: text-white">
          <GoPeople className="size-7" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
