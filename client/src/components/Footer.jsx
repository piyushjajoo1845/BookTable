import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div>
        <footer className='px-6 md:px-16 lg:px-24 xl:px-2 w-full'>
            <div className='flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30'>
                <div className='max-w-96'>
                    <img src={assets.logo1} alt="logo-footer" />
                    <p className='mt-6 text-sm text-gray-500 font-playfair font-bold'>
                        Discover the city’s most delightful cafés, from cozy hideaways to stylish coffee lounges.
                    </p>

                    <div className='flex items-center gap-2 mt-3'>
                        <a href="linkdin-footer-icon">
                            <img src={assets.linkendinIcon} alt="" />
                        </a>
                        <a href="instagram-footer-icon">
                            <img src={assets.instagramIcon} alt="" />
                        </a>
                        <a href="twitter-footer-icon">
                            <img src={assets.twitterIcon} alt="" />
                        </a>
                        <a href="github-footer-icon">
                            <img src={assets.githubIcon} alt="" />
                        </a>
                    </div>
                </div>

                <div className='w-1/2 flex flex-wrap md:flex-nowrap justify-between'>
                    <div>
                        <h2 className='font-playfair font-bold mb-5 text-gray-900'>Company</h2>
                        <ul className='text-sm text-gray-500 space-y-2 list-none'>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Partners</li>
                        </ul>
                    </div>

                    <div  className='w-1/2 flex flex-wrap md:flex-nowrap justify-between'>
                        <div>
                            <h2 className='font-playfair font-bold mb-5 text-gray-900'>Support</h2>
                            <ul className='text-sm text-gray-500 space-y-2 list-none'>
                                <li>Help Center</li>
                                <li>Safety Information</li>
                                <li>Cancellation Options</li>
                                <li>Contact Us</li>
                                <li>Accessibility</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <p className='py-4 text-center text-xs md:text-sm text-gray-500'>
                Copyright 2025 © 
                <a> 
                    BookTable
                </a>
                . All Right Reserved. 
            </p>
        </footer>
    </div>
  )
}

export default Footer