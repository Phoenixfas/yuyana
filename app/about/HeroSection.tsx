'use client'
import Image from 'next/image'
import { useEffect, useRef} from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { motion } from 'framer-motion'


export default function HeroSection() {
  return (
    <div className='about-hero w-full overflow-hidden flex pt-40 gap-32'>
        <div className="about-hero-img flex-[1] flex flex-col items-end">
            <motion.div initial={{x: -300, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 2, damping: 10, bounce: 0.8, type: "spring" }} className="flex-[1] relative flex items-center justify-start overflow-hidden ">
                <div className='w-[550px] h-[600px] relative overflow-hidden rounded-2xl'>
                    <ParallaxProvider>
                        <Parallax speed={-20} className="w-full h-full relative">
                            <Image src="/images/about/about-1.jpg" className='w-[550px] h-[600px] object-cover rounded-xl' alt='about-1' width={300} height={300} priority quality={100} unoptimized />
                        </Parallax>
                    </ParallaxProvider>
                </div>
            </motion.div>
        </div>
        <div className=" flex-[1]  relative ">
            <motion.div initial={{x: 300, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 2, damping: 10, bounce: 0.8, type: "spring", delay: .3 }} className="about-hero-h1 flex-[1] flex flex-col items-start tracking-[1rem] text-[7rem] text-[#FEA100] font-bold left-[-40%] relative">
                ABOUT US
            </motion.div>
            <motion.div initial={{x: 300, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1}} className="about-hero-content flex-[1] flex flex-col items-start text-sm pr-20">
                <p>Welcome to Yuyana, your one-stop destination for all your travel needs! We are a tour and travel company that offers a wide range of travel services and packages to help you make the most of your travel experiences.</p>
                <p>Founded by a group of experienced travelers and industry experts, Yuyana was created with a vision to bring the world closer to travelers and help them explore new destinations and cultures in a unique and exciting way.</p>
                <p>At Yuyana, we believe that travel is more than just visiting a new place; it's an opportunity to immerse yourself in new cultures, learn new things, and make memories that will last a lifetime. That's why we strive to provide personalized travel experiences that cater to your specific interests, needs, and budget.</p>
                <p>We offer a wide range of travel services, including airfare booking, hotel reservation, tour packages, and travel insurance, to ensure that every aspect of your trip is taken care of. Whether you're looking for a romantic getaway, a family vacation, or an adventure-filled trip, we have something for everyone.</p>
            </motion.div>
        </div>
    </div>
  )
}
