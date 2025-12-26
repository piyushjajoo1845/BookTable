import React from 'react'
import { assets } from '../assets/assets'

const StarRating = () => {
  return (
    <div className='flex'>
        <img src={assets.starIconFilled} alt="" />
        <img src={assets.starIconFilled} alt="" />
        <img src={assets.starIconFilled} alt="" />
        <img src={assets.starIconFilled} alt="" />
        <img src={assets.starIconOutlined} alt="" />
    </div>
  )
}

export default StarRating