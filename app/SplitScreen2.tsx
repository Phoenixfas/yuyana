import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SplitScreen2() {
  return (
    <div className='w-full h-[100vh] flex flex-row-reverse'>
        <div className="flex-[1] flex px-14 py-32 items-center justify-center text-white bg-[#4C363A]">
            <div className='flex flex-col'>
                <p className='text-sm text-[#ffffff99]'>MOOOI ORIGINALS</p>
                <h1 className='text-[5rem] leading-[5.3rem] max-w-fit font-normal font-serif my-8'>The eternal growth of the Heracleum</h1>
                <Link href="/" className='py-2 max-w-fit border-b leading-[0.5rem] border-white'>Read the story</Link>
            </div>
        </div>
        <div className="flex-[1] min-w-[50%] relative">
            <Image className="w-full h-full object-cover" src={"/images/Lamps.webp"} alt={"phone"} fill />
        </div>
    </div>
  )
}
