import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
        <div>
            <img className='mb-5 w-32' src={assets.logo} alt="logo" />
            <p className='w-full sm:w-2/3 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis iste adipisci totam ea, accusamus architecto at incidunt libero quod deleniti. Ipsum distinctio cum modi?</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-123-345-6789</li>
                <li>forever@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr/>
        <p className='text-center py-5 text-sm'>Copyrights 2025@forever. All Rights Are Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
