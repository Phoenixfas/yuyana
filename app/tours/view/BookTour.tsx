'use client'
import Link from 'next/link'
import React from 'react'
import { useAppSelector } from '../../redux/hooks'

export default function BookTour() {
    const tour = useAppSelector(state => state.activeTour)
  return (
    <div className="mt-32 w-full overflow-hidden flex justify-center">
        <div className='border border-[#131316] rounded-xl py-10 px-20 flex flex-col items-center'>
            <h3 className='text-sm  mb-3'>Price is <span className='text-[#FEA100]'>${tour.price}</span></h3>
            <h1 className='text-3xl text-center text-[#131316] mb-7 font-bold'>Book This Tour</h1>
            <Link href='/tours/book' className='px-5 py-2 rounded-full bg-[#04ac3c] text-[#fff4db] hover:bg-[#FEA100] hover:text-[#fff4db] duration-300'>Book Now</Link>
        </div>
    </div>
  )
}
