import React, { useState } from 'react'
import Title from '../components/Title'
import { userBookingsDummyData } from '../assets/assets'
import { assets } from '../assets/assets'

const MyBookings  = () => {


    const [bookings , setBookings] = useState(userBookingsDummyData)
  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
        <Title title='My Bookings' subTitle='Easily manage your past , current , and upcoming 
        cafe reservation in one place . Plan your bookings seamlessly with just a few clicks.' align='left'/>

        <div className='max-w--6xl mt-8 w-full text-gray-800'>
            <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                <div className='w-1/3'>Cafes</div>
                <div>Date & Timings</div>
                <div>Payment</div>
            </div>

            {bookings.map((booking)=>(
                <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                    {/* cafe details */}
                    <div className='flex flex-col md:flex-row'>
                        {/* cafe image */}
                        <img src={booking.cafeName.images[0]} alt="cafe-img" className='min-md:w-44 rounded shadow object-cover '/>
                        {/* cafe name , address , theme */}
                        <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                            <p className='font-playfair text-2xl'>
                            {booking.cafeName.Cafe.name}
                            <span className='font-inter text-sm'>({booking.cafeName.cafeTheme})</span>
                            </p>

                            <div className='flex items-center gap-1 text-sm text-gray-500'>
                                <img src={assets.locationIcon} alt="location-icon" />
                                <span>{booking.cafeName.Cafe.address}</span>
                            </div>

                            {/* guests */}
                            <div className='flex items-center gap-1 text-sm text-gray-500'>
                                <img src={assets.guestsIcon} alt="guest-icon" />
                                <span>Guests: {booking.guests}</span>
                            </div>
                            {/* price */}
                            <p className='text-base'>Total:${booking.totalPrice}</p>
                        </div>
                    </div>
                    {/* date & timings */}
                    <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                        <div>
                            <p>Booked-On:</p>
                            <p className='text-gray-500 text-sm'>
                                {new Date(booking.BookOnDate).toDateString()}
                            </p>
                        </div>
                        <div>
                            <p>Booked-For:</p>
                            <p className='text-gray-500 text-sm'>
                                {new Date(booking.BookForDate).toDateString()}
                            </p>
                        </div>
                    </div>
                    {/* payment status */}
                    <div></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyBookings 