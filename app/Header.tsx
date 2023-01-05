import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMicrophoneAlt, FaSearch, FaImages, FaGlobe } from "react-icons/fa"
import { useAppDispatch } from './redux/hooks'
import { toggleLocation } from './redux/slices/locationToggleSlice'

export default function Header() {
  const dispatch = useAppDispatch()
  return (
    <div className='flex items-center justify-between h-[90px] w-full absolute top-0 left-0 z-[10000] text-white'>
      <div className="flex flex-1 items-center h-full p-10">
        <Link href="/">
          <FaGlobe className="text-2xl" color='#fff' onClick={() => dispatch(toggleLocation())}/>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center h-full p-10 text-[2rem] font-medium tracking-[0.6rem] font-poppins">
        <Link href="/">
          <Image src={"/images/Logo.png"} alt={"Logo"} className='object-contain w-[100px] h-[70px]' width={200} height={100} />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end gap-10 h-full p-10">
        <Link href="/">
          <FaSearch className="text-2xl" color='#fff'/>
        </Link>
        <Link href="/">
          <FaImages className="text-2xl" color='#fff'/>
        </Link>
      </div>
    </div>
  )
}
