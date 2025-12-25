import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    //full height of div hero image
    <div
      className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24
     xl:px-32 text-white bg-[url("/src/assets/heroCoffe3.jpg")] bg-no-repeat bg-cover bg-center h-screen'
    >
      <p className="text-black md:text-white bg-[#CBE290]/50 px-3.5 py-1 rounded-full mt-20 ">
        Good Food Starts with a Reservation
      </p>
      <h1
        className="font-playfair text-3xl  md:text-5xl md:text-[56px] md:leading-[56px]  font-bold md:font-extrabold  mt-4 w-full md:w-auto"
      >
        Book Your Table.<br/>
       Skip the Wait.
      </h1>
      <p className='max-w-130 mt-2 text-sm md:text-base'>
        Discover and reserve tables at the best cafés, hotels, and restaurants
        near you — instantly.
      </p>

        {/* <div className='flex items-center w-full md:h-48 justify-center max-md:py-5 size-full'> */}
            {/* <div> */}
                <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="destination-cal" className='h-4' />
                            <label htmlFor="destinationInput">Destination</label>
                        </div>
                        <input list="destination" id="destinationInput" className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' placeholder="Type here" type="text" />
                        <datalist id="destination">
                            {cities.map((city , index)=>(
                                <option value={city} key={index} />
                            ))}
                        </datalist>
                    </div>

                    <div>
                        <div className='flex items-center gap-2'>
                             <img src={assets.calenderIcon} alt="checkIn-cal" className='h-4'/>
                             <label htmlFor="checkIn" >Booking Date</label>
                        </div>
                        <input id="checkIn" className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' type="date" />
                    </div>

                    <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                        <label htmlFor="guests">Guests</label>
                        <input min="1" max="10" className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16' placeholder="0" type="number"/>
                    </div>

                    <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
                        {/* <img src="" alt="" /> */}
                        <span>Search</span>
                    </button>



                </form>
            {/* </div> */}
        {/* </div> */}
     
    </div>
  );
};

export default Hero;
