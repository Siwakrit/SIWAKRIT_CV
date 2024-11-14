import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center p-5 
    border-t border-t-[#33353F]'>
        <ul>
            <li>Logo</li>
        </ul>

        <ul>
            <li className='text-sm hover:text-orange-500 hover:scale-110'>© 2024 Siwakrit Pattaveesin</li> 
        </ul>
    </div>
  )
}

export default Footer   