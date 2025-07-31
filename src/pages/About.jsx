import React from 'react'
import { assets } from '../assets/assets'
// import { motion } from 'framer-motion' // Optional: for animation

const About = () => {
  return (
    <div className="px-4 md:px-20">

      {/* Section Header */}
      <h2 className='text-center text-2xl md:text-3xl pt-10 text-[#707070] font-medium'>
        ABOUT <span className='text-blue-600 font-semibold'>US</span>
      </h2>

      {/* About Content */}
      <div className='my-10 flex flex-col md:flex-row gap-12 items-center'>
        <img
          className='w-full md:max-w-[360px] rounded-lg shadow-md'
          src={assets.about_image}
          alt="MediQ about us illustration"
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to <strong>MediQ</strong> — your reliable companion for simplifying doctor appointments and managing health effortlessly. At MediQ, we recognize how challenging it can be to navigate healthcare schedules and keep track of medical information.
          </p>
          <p>
            We're dedicated to transforming the way healthcare is accessed and managed. Our platform leverages cutting-edge technology to provide a user-friendly experience, ensuring that booking appointments, accessing medical details, and connecting with doctors is as smooth as possible. From your very first visit to ongoing health management, MediQ stands with you at every stage.
          </p>
          <h3 className='text-gray-800 font-semibold text-base'>Our Vision</h3>
          <p>
            At MediQ, our vision is to revolutionize digital healthcare by making quality medical access fast, easy, and personalized. We strive to connect patients and doctors seamlessly, empowering individuals to take control of their health with confidence and convenience.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <h2 className='text-xl md:text-2xl font-medium mb-6 text-center'>
        WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 rounded-lg shadow-sm cursor-pointer'>
          <h4 className='font-semibold'>EFFICIENCY</h4>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 rounded-lg shadow-sm cursor-pointer'>
          <h4 className='font-semibold'>CONVENIENCE</h4>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 rounded-lg shadow-sm cursor-pointer'>
          <h4 className='font-semibold'>PERSONALIZATION</h4>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
