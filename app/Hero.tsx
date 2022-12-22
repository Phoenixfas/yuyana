
'use client'

import Link from 'next/link'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Hero() {

    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const [video, setVideo] = useState<HTMLVideoElement | null>(null)

    useEffect(() => {
        const video = document.getElementById('hero-video') as HTMLVideoElement
        setVideo(video)
    }, [])


    const handlePlay = () => {
        if (video) {
            if (video.paused) {
                video.play()
                setIsPlaying(true)
            } else {
                video.pause()
                setIsPlaying(false)
            }
        }
    }

    const handleMute = () => {
        if (video) {
            if (video.muted) {
                video.muted = false
                setIsMuted(false)
            } else {
                video.muted = true
                setIsMuted(true)
            }
        }
    }


  return (
    <div className='w-full h-[100vh]'>
        <div className="w-full h-full bg-[#131316]">
            <video id='hero-video' className="w-full h-full object-cover brightness-50" autoPlay loop muted>
                <source src="/videos/web/Ethiopia.mp4" type="video/mp4" />
            </video>

            {/* add pause/play and mute buttons on the bottom left corner to control the video*/}

            <div className='flex gap-8 absolute bottom-14 left-14'>
                <button className='text-[#fff4db]' onClick={handlePlay}>
                    {isPlaying ? <FaPlay className="text-xl"/> : <FaPause className="text-xl"/>}
                </button>
                <button className='text-[#fff4db]' onClick={handleMute}>
                    {isMuted ? <FaVolumeMute className="text-xl"/> : <FaVolumeUp className="text-xl"/>}
                </button>
            </div>

        </div>
        <div className="flex flex-col min-w-[800px] items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-1 justify-center text-[#fff4db] m-auto p-10">
            <p>GIFT GUIDE</p>
            <h1 className='text-7xl font-serif italic my-8'>Extraordinary Gift guide</h1>
            <h5 className='text-xl font-serif mb-10'>The perfect gifts to indulge yourself, your interior, and others</h5>
            <Link href="/" className='bg-[#fff4db] text-black px-4 py-2 rounded-full'>Find your perfect gift</Link>
        </div>
    </div>
  )
}
