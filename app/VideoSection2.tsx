import Link from 'next/link'
import React from 'react'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

export default function VideoSection2() {



  return (
    <div className='w-full h-[100vh] relative'>
        <div className="w-full h-full bg-[#131316]">
            <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src="/videos/NomNom.mp4" type="video/mp4" />
            </video>

            {/* add pause/play and mute buttons on the bottom left corner to control the video*/}

            <div className='flex gap-8 absolute bottom-14 left-14'>
                <button className='text-white'>
                    <FaPause className="text-xl"/>
                </button>
                <button className='text-white'>
                    <FaVolumeMute className="text-xl"/>
                </button>
            </div>

        </div>
        <div className="flex flex-col min-w-[850px] items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-1 justify-center text-white m-auto p-10">
            {/* <p className='text-[#ffffff99] text-sm'>PRODUCT STORY</p> */}
            <h1 className='text-[5rem] leading-[5.3rem] text-center font-normal font-sans my-8'>Explore The World Like Never Before</h1>
            {/* <h5 className='text-xl font-serif mb-10'>The perfect gifts to indulge yourself, your interior, and others</h5> */}
            <Link href="/" className='bg-white text-black px-4 py-2 rounded-full'>Explore Now</Link>
        </div>
    </div>
  )
}
