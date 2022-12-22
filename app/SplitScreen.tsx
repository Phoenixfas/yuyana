import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SplitScreen() {
  return (
    <div className='w-full h-[100vh] flex'>
        <div className="flex-[1] flex px-14 py-32 items-center justify-center text-[#1F1F1F] bg-[#E3D9C6]">
            <div className='flex flex-col'>
                <p className='text-sm'>DESIGN DREAMS</p>
                <h1 className='text-[5rem] leading-[5.3rem] max-w-fit font-bold font-serif my-8'>Discover the Design Dreams podcast</h1>
                <Link href="/" className='py-2 max-w-fit border-b leading-[0.5rem] border-[#1F1F1F]'>Read the story</Link>
            </div>
        </div>
        <div className="flex-[1] min-w-[50%] relative">
            <Image className="w-full h-full object-cover" src={"/images/Phone.png"} alt={"phone"} fill />
        </div>
    </div>
  )
}
