import React from 'react'

function NewsLetterBox() {
  return (
    <div className='text-center'>
        <p className='font-medium text-gray-800 text-2xl'>Subscribe & get 20% OFF</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ad? Ullam facilis eos nobis qui.</p>   
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 border'>
            <input className='w-full flex-1 outline-none' type="email" name="email" id="email" placeholder='Enter your email' required />
            <button className='bg-black px-10 py-4 text-white text-xs font-semibold' type='submit'>SUBSCRIBE</button>
        </form>   
    </div>
  )
}

export default NewsLetterBox;
