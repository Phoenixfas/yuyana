
import Link from 'next/link'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useAppSelector } from './redux/hooks'


export default function Hero() {
    const location = useAppSelector(state => state.location)

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
                <source src={location === "Local" ? "/videos/web/Ethiopia.mp4" : "/videos/NomNom.mp4"} type="video/mp4" />
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
        <div className="flex flex-col w-full text-center items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-1 justify-center text-[#fff4db] m-auto p-10">
            {/* <p>TOUR & TRAVEL</p> */}
            <h1 className='home-hero-h1 text-7xl font-serif italic my-8 enter'>Extraordinary Experience</h1>
            <h5 className='text-xl font-serif mb-10 enter-1'>Have an amazing adventure in the land of wonders</h5>
            <Link href="/" className='bg-[#fff4db] transition-colors hover:bg-[#FEA100] text-black px-4 py-2 rounded-full enter-2'>Find your next tour</Link>
        </div>
    </div>
  )
}
