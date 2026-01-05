import React, { useState } from 'react'
import { assets, cafesDD, facilityIcons } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'
import Footer from '../components/footer'

const CheckBox = ({label , selected = false , onChange = () =>{}})=>{
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm' >
            <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked , label)}/>
            <span className='font-light select-none '>{label}</span>
        </label>
    )
}

const RadioButton = ({label , selected = false , onChange = () =>{}})=>{
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm' >
            <input type="radio" name='sortOption' checked={selected} onChange={()=>onChange(label)}/>
            <span className='font-light select-none '>{label}</span>
        </label>
    )
}

const AllCafes = () => {

    const navigate= useNavigate()
    const [openFilters , setOpenFilters] = useState(false);

    const cafetypes = [
        "Nature Cafe",
        "Vintage Cafe",
        "Modern Cafe",
        "Bohemian Cafe",
    ];

    const pricePerPerson = [
        '0 to 200',
        '200 to 400',
        '400 to 600',
        '600 and above',
    ];

    const sortOptions = [
        "Price Low to High",
        "Price High to Low",
        "Newest First"
    ];
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16  
    lg:px-24 xl:px-32'>
        <div>
            <div className='flex flex-col items-start text-left'>
                <h1 className='font-playfair text-4xl md:text-[40px]'>Cafes</h1>
                <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'> Discover the city’s most delightful cafés, from cozy hideaways to stylish coffee lounges</p>
            </div>

            {cafesDD.map((cafe) => (
                <div key={cafe._id} className='flex flex-col md:flex-row items-start py-10  gap-6 border-b border-gray-300 last:pb-30 last:border-0 '>
                    <img onClick={()=> {navigate(`/cafe/${cafe._id}`) , scrollTo(0,0)}} src={cafe.images[0]} alt="img-cafe" title='View Cafe Details' 
                    className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
                     />
                    <div className='md:w-1/2 flex flex-col gap-2'>
                        <p className='text-gray-500'>{cafe.Cafe.city}</p>
                        <p onClick={()=> {navigate(`/cafe/${cafe._id}`) , scrollTo(0,0)}} className='text-3xl text-gray-800 font-playfair cursor-pointer'>{cafe.Cafe.name}</p>

                        {/* review div */}
                        <div className='flex items-center'>
                            <StarRating/>
                            <p className='ml-2 '>300+ reviews</p>
                        </div>

                        {/* address div */}
                        <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                            <img src={assets.locationIcon} alt="location-icon" />
                            <span>{cafe.Cafe.address}</span>
                        </div>

                        {/* cafe amenities */}
                        <div className='flex flex-wrap items-center mt-3 mb-6 gap-4 '>
                            {cafe.amenities.map((item , index)=>(
                                <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#D9EAFD] '>
                                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                    <p className='text-xs'>{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* pricing */}
                        <p className='text-xl font-medium text-gray-700'>${cafe.costPerPerson} /person</p>
                    </div>

                    

                
                </div>
            ))}
        </div>

        {/* filters */}
        <div className='w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 '>

            <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && "border-b"} `}>
                <p className='text-base font-medium text-gray-800'>FILTERS</p>
                <div className='text-xs cursor-pointer'>
                    <span onClick={()=> setOpenFilters(!openFilters)} className='lg:hidden'>
                        {openFilters ? 'HIDE' : 'SHOW'}</span>
                    <span className='hidden lg:block'>Clear</span>
                </div>
            </div>

            {/* popular filters */}
            <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto" } overflow-hidden transition-all duration-700`}>
                <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>Popular filters</p>
                    {cafetypes.map((cafe , index) => (
                        <CheckBox key={index} label={cafe} />
                    ))}
                </div>

            {/* price ranges */}
                <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>Price Range</p>
                    {pricePerPerson.map((range , index) => (
                        <CheckBox key={index} label={`$ ${range}`} />
                    ))}
                </div>

            {/* Sort options */}
                <div className='px-5 pt-5 pb-7'>
                    <p className='font-medium text-gray-800 pb-2'>Sort By</p>
                    {sortOptions.map((options , index) => (
                        <RadioButton key={index} label={options}/>
                    ))}
                </div>


            </div>
        </div>

        
        
    </div>


  )
}

export default AllCafes