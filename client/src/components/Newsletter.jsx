import React from 'react'
import { assets } from '../assets/assets'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20 '>
        <div className='md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl'>
            <img className='hidden md:block w-full max-w-lg rounded-xl' src={assets.cafeImg4} alt="newsletter-img" />
            <div className='relative flex items-center justify-center'>
                <div className='max-md:py-20 px-6 md:px-10 text-center'>
                    <h1 className='text-3xl font-rubik'>
                            Subscribe to Our Newsletter
                    </h1>
                    <p className='mt-4 text-gray-500'>
                            Get early access to new menu launches, seasonal specials, and exclusive café updates.
                    </p>
                    <form className='mt-8 flex'>
                        <input type="email" placeholder='Your email address'
                           className='w-full outline-none rounded-l-md border 
                                    border-r-0 border-gray-300 p-4 text-gray-900 ' />
                        <button className='rounded-r-md bg-blue-600 px-7 py-2 text-white'>
                            Submit
                        </button>
                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Newsletter