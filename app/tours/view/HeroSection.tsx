import Image from 'next/image'
import {useEffect, useRef} from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

const variants1 = {
    visible: { opacity: 1, x: 0, transition: { duration: 1, } },
    hidden: { opacity: 0, x: -300, transition: { duration: 1 } }
}
const variants2 = {
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: .2, damping: 10, bounce: 0.8, type: "spring"  } },
    hidden: { opacity: 0, x: -300, transition: { duration: 2, delay: .2, damping: 10, bounce: 0.8, type: "spring"  } }
}

const variants3 = {
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: .6, damping: 10, bounce: 0.8, type: "spring" } },
    hidden: { opacity: 0, x: 300, transition: { duration: 2, delay: .6, damping: 10, bounce: 0.8, type: "spring"  } }
}

const variants4 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, delay: .3 } },
    hidden: { opacity: 0, y: 100, transition: { duration: .7, delay: .3 } }
}

export default function HeroSection() {
    const tour = useAppSelector((state) => state.activeTour)


  return (
    <div className='tour-view-hero flex min-h-screen overflow-hidden'>
        <motion.div animate="visible" initial="hidden" variants={variants1}  className="tour-view-hero-img relative flex-[1] min-h-screen max-h-screen overflow-hidden rounded-r-2xl">
            <ParallaxProvider>
                <Parallax speed={-30} className="absolute w-full h-full" >
                    <Image src={tour.image} className=" w-full h-full object-cover brightness-[.7]" alt={tour.name} width={500} height={500} quality={100} unoptimized />
                </Parallax>
                <Parallax speed={50} className="tour-view-hero-name relative w-full h-full flex pr-20 items-center justify-center">
                        <motion.div animate="visible" initial="hidden" variants={variants2} className="p-10 text-[#fff4db] font-bold text-right text-[4rem]">{tour.name}</motion.div>
                </Parallax>
            </ParallaxProvider>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={variants4}  className='tour-view-hero-content flex flex-col flex-[1] py-32 min-h-screen justify-center'>
            <div className="relative flex flex-col p-10 items-center">
                <h3 className='text-4xl mb-3 text-center'>{tour.title}</h3>
                <motion.h4 animate="visible" initial="hidden" variants={variants3} className='text-sm mb-10 text-[#FEA100] text-center'>{tour.titleMotto}</motion.h4>
                <motion.p animate="visible" initial="hidden" variants={variants3} className='text-md font-light'>{tour.description}</motion.p>
            </div>
        </motion.div>
    </div>
  )
}
