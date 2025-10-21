import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

function About() {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about_img" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolution</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. we are dedicated to providing a seamless shopping experience that exceeds expectation from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
        <div className='text-xl py-4'>
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We Meticulously select and vet each product to ensure it meets our stringent quality standards</p>
          </div>
          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>With our user-friendly interface and hassle free ordering precess.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Our team of dedicated professionals is here to help you resolve any queires 24/7.</p>
          </div>
        </div>

        <NewsLetterBox />

      </div>
  )
}

export default About
