import React from 'react'
import { FaMicrophoneAlt, FaSearch, FaShoppingBag, FaWindows } from "react-icons/fa"

export default function Header() {
  return (
    <div className='flex items-center justify-between h-[90px] w-full absolute top-0 left-0 z-[10000] text-white'>
      <div className="flex flex-1 items-center h-full p-10">
        <FaMicrophoneAlt className="text-2xl" color='#fff'/>
      </div>
      <div className="flex flex-1 items-center justify-center h-full p-10 text-[2rem] font-medium tracking-[0.6rem] font-poppins">moooi</div>
      <div className="flex flex-1 items-center justify-end gap-10 h-full p-10">
        <FaSearch className="text-2xl" color='#fff'/>
        <FaWindows className="text-2xl" color='#fff'/>
        <FaShoppingBag className="text-2xl" color='#fff'/>
      </div>
    </div>
  )
}
