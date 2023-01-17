import React from 'react'
import { IoLanguage } from 'react-icons/io5'
import { MdFoodBank } from 'react-icons/md'
import { GiSurferVan } from 'react-icons/gi'
import { TbBoxMultiple } from 'react-icons/tb'

export default function Everything() {
  return (
    <div className='text-[#fff4db] w-full  flex flex-col justify-center items-center py-48'>
        <h1 className='text-4xl font-bold mb-14'>We have Everything you need</h1>
        {/* <div className="flex w-full h-full justify-center items-center "> */}
            <div className='flex max-w-[70%] gap-10 flex-wrap'>
                <div className="flex items-center gap-4 hover:-translate-y-3 duration-300">
                    <div className="bg-white p-3 rounded-full"> <IoLanguage color='#000' size={30} /> </div>
                    <p>Awesome Translators</p>
                </div>
                <div className="flex items-center gap-4 hover:-translate-y-3 duration-300">
                    <div className="bg-white p-3 rounded-full"> <MdFoodBank color='#000' size={30} /> </div>
                    <p> Accomodations </p>
                </div>
                <div className="flex items-center gap-4 hover:-translate-y-3 duration-300">
                    <div className="bg-white p-3 rounded-full"> <GiSurferVan color='#000' size={30} /> </div>
                    <p>Ready to go Cars </p>
                </div>
                <div className="flex items-center gap-4 hover:-translate-y-3 duration-300">
                    <div className="bg-white p-3 rounded-full"> <TbBoxMultiple color='#000' size={30} /> </div>
                    <p>Multi-Tour Packages</p>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}
