import React from 'react'
import Title from './Title'
import ReviewCard from './ReviewCard'
import { testimonialCardData } from '../assets/assets'

const Testimonial = () => {
  return (
    <>
     <style>{`
        @keyframes marqueeScroll {
            0% { transform : translateX(0%); }
            100% {transform : translateX(-50%); }
        }

        .marquee-inner {
            animation : marqueeScroll 10s linear infinite;
        }

        .marquee-reverse {
            animation-direction: reverse;
        }
        
     `}</style>
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-100 py-20 overflow-hidden'>

        <Title title="What Our Customer Says"/>

        <div className='border-4 border-gray-200'>
             <div className='marquee-row  mx-auto max-w-5xl relative overflow-hidden'>
        <div className='absolute left-0 top-0 h-full w-20  z-10  pointer-events-none bg-gradient-to-r from-white to-transparent'></div>
        <div className='marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5 '>
            { testimonialCardData.slice(0,4).map((card,index) => (
                    <ReviewCard key={index} card={card}/>
            ))}
        </div>
        <div className='absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-1 from-white to-transparent'></div>
     </div>

     <div className='marquee-row w-full mx-auto max-w-5xl overflow-hidden relative'>
        <div className='absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent'></div>
        <div className='marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5'>
            { testimonialCardData.slice(0,4).map((card,index) => (
                    <ReviewCard key={index} card={card}/>
            ))}
        </div>
        <div className='absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-1 from-white to-transparent'></div>
     </div>
        </div>
       
    </div>
     


    </>
  )
}

export default Testimonial