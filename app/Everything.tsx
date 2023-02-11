import React from 'react'
import { IoLanguage } from 'react-icons/io5'
import { MdFoodBank } from 'react-icons/md'
import { GiSurferVan } from 'react-icons/gi'
import { TbBoxMultiple } from 'react-icons/tb'

export default function Everything() {
  return (
    <div className='text-[#FEA100] w-full  flex flex-col justify-center items-center py-48'>
        <h1 className='text-4xl text-center font-bold mb-14'>We have Everything you need</h1>
        {/* <div className="flex w-full h-full justify-center items-center "> */}
            <div className='flex max-w-[70%] gap-10 flex-wrap justify-center'>
                <div className="flex items-center gap-4 hover:-translate-y-3 hover:scale-110 cursor-pointer duration-300">
                    <div className="bg-[#04ac3c] p-3 rounded-full"> <IoLanguage color='#fff4db' size={30} /> </div>
                    <p className='text-[#fff4db]'>Awesome Translators</p>
                </div>
                <div className="flex items-center gap-4 hover:-translate-y-3 hover:scale-110 cursor-pointer duration-300">
                    <div className="bg-[#04ac3c] p-3 rounded-full"> <MdFoodBank color='#fff4db' size={30} /> </div>
                    <p className='text-[#fff4db]'> Accomodations </p>
                </div>
                <div className="flex items-center gap-4 hover:-translate-y-3 hover:scale-110 cursor-pointer duration-300">
                    <div className="bg-[#04ac3c] p-3 rounded-full"> <GiSurferVan color='#fff4db' size={30} /> </div>
                    <p className='text-[#fff4db]'>Ready to go Cars </p>
                </div>
                <div className="flex items-center gap-4 hover:-translate-y-3 hover:scale-110 cursor-pointer duration-300">
                    <div className="bg-[#04ac3c] p-3 rounded-full"> <TbBoxMultiple color='#fff4db' size={30} /> </div>
                    <p className='text-[#fff4db]'>Multi-Tour Packages</p>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}
