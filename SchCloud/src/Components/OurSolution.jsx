import React from 'react'
import { GoPeople } from 'react-icons/go'
import { TbSchool } from 'react-icons/tb'
import { LuChartColumn } from 'react-icons/lu'
import { SlCalender } from 'react-icons/sl'
import { BsCurrencyDollar } from 'react-icons/bs'
import { LuShield } from 'react-icons/lu'

const OurSolution = () => {
  return (
    <div id="ourSolution" className=" bg-gray-100  mt-10 p-3 pt-10 ">
      <div className="flex flex-col">
        <div className=" text-gray-700 mx-auto items-center p-5 ">
          <div className=" text-center">
            <h1 className="text-3xl text-black font-bold justify-self-center mb-5 md:pt-10">
              Comprehensive School Management Solution
            </h1>
            <p className=" text-lg justify-center md:px-85">
              Everything you need to run your educational institution
              efficiently, from student enrollment to graduation ceremonies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols md:grid-cols-3 justify-center md:p-10 md:px-30 gap-7 m-5 ">
          <div className="rounded-2xl text-base bg-white p-7 border border-none shadow-xl hover:-translate-y-1 transition-all">
            <div className=" rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 w-15 h-15 flex items-center justify-center text-white ">
              <GoPeople className="size-10 " />
            </div>
            <h2 className="text-xl font-bold my-3">Student Management</h2>
            <p className="text-gray-600 ">
              Complete student lifecycle management from admission to graduation
              with comprehensive profiles and tracking.
            </p>
          </div>
          <div className="rounded-2xl text-base bg-white p-7 border border-none shadow-xl hover:-translate-y-1 transition-all">
            <div className=" rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 w-15 h-15 flex items-center justify-center text-white ">
              <TbSchool className="size-10 " />
            </div>
            <h2 className="text-xl font-bold my-3">Teacher Portal</h2>
            <p className="text-gray-600 ">
              Empower educators with tools for lesson planning, grading,
              attendance, and student progress monitoring.
            </p>
          </div>
          <div className="rounded-2xl text-base bg-white p-5 border border-none shadow-xl hover:-translate-y-1 transition-all">
            <div className=" rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 w-15 h-15 flex items-center justify-center text-white ">
              <LuChartColumn className="size-10 " />
            </div>
            <h2 className="text-xl font-bold my-3">Analytics & Reports</h2>
            <p className="text-gray-600 ">
              Data-driven insights for better decision making with comprehensive
              reporting and analytics.
            </p>
          </div>
          <div className="rounded-2xl text-base bg-white p-7 border border-none shadow-xl hover:-translate-y-1 transition-all">
            <div className=" rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 w-15 h-15 flex items-center justify-center text-white ">
              <SlCalender className="size-10 " />
            </div>
            <h2 className="text-xl font-bold my-3">Academic Calendar</h2>
            <p className="text-gray-600 ">
              Streamlined scheduling and calendar management for all school
              activities and events.
            </p>
          </div>
          <div className="rounded-2xl text-base bg-white p-7 border border-none shadow-xl hover:-translate-y-1 transition-all">
            <div className=" rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 w-15 h-15 flex items-center justify-center text-white ">
              <BsCurrencyDollar className="size-10 " />
            </div>
            <h2 className="text-xl font-bold my-3">Fee Management</h2>
            <p className="text-gray-600 ">
              Automated fee collection, invoicing, and financial tracking with
              multiple payment options.{' '}
            </p>
          </div>
          <div className="rounded-2xl text-base bg-white p-7 border border-none shadow-xl hover:-translate-y-1 transition-all">
            <div className=" rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 w-15 h-15 flex items-center justify-center text-white ">
              <LuShield className="size-10 " />
            </div>
            <h2 className="text-xl font-bold my-3">Security & Privacy</h2>
            <p className="text-gray-600 ">
              Enterprise-grade security ensuring data protection and privacy
              compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurSolution
