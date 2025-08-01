import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='bg-grey-100'>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-red-300 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Asansol,GT.Road <br /> Asansol, IN</p>
          <p className=' text-gray-500'>Tel: (34) 555-0132 <br /> Email: rtsm@gmail.com</p>
          <p className=' font-semibold text-lg text-blue-400'>CAREERS AT MediQ</p>
          <p className=' text-gray-400'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
