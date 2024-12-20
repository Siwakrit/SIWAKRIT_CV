import React from 'react'
import { WiAlien } from "react-icons/wi";

const Footer = () => {
  return (
    <div className='flex justify-between items-center p-2 w-[100%] 
    border-t-[#7f8188]  border-t md:mt-[5rem]'>
      <ul>
        <li>
          <WiAlien className='hover:scale-110 hover:text-red-500' size={60} />
        </li>
      </ul>

      <ul>
        <li className='text-sm'>© 2024 Siwakrit Pattaveesin</li>
      </ul>
    </div>
  )
}

export default Footer   