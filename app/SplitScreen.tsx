import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect, useRef} from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variants1 = {
    visible: { opacity: 1, x: 0, transition: { duration: .7, } },
    hidden: { opacity: 0, x: -100, transition: { duration: .7, } }
}

const variants2 = {
    visible: { opacity: 1, x: 0, transition: { duration: .7, delay: 0.3 } },
    hidden: { opacity: 0, x: -100, transition: { duration: .7, delay: 0.3 } }
}

const variants3 = {
    visible: { opacity: 1, x: 0, transition: { duration: .7, delay: .6 } },
    hidden: { opacity: 0, x: -100, transition: { duration: .7, delay: .6 } }
}

const variants4 = {
    visible: { opacity: 1, x: 0, transition: { duration: .7 } },
    hidden: { opacity: 0, x: 100, transition: { duration: .7 } }
}

export default function SplitScreen() {

  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-300px 0px -200px 0px", once: false})
  const controls = useAnimationControls()
  
  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden")
  }, [isInView]);


  return (
    <div ref={ref} className='w-full h-[100vh] overflow-hidden flex  gap-16 mb-20'>
        <div className="flex-[1] flex  py-32 items-center justify-center text-[#fff4db]">
            <div className='flex flex-col pr-14 text-right'>
                <motion.p animate={controls} variants={variants1} className='text-sm text-[#ffffff99]'>Blogs</motion.p>
                <motion.h1 animate={controls} variants={variants2} className='text-[6rem] leading-[6rem] font-normal font-serif my-8'>Coffee. <br/> Have a taste from the originals </motion.h1>
                <motion.div animate={controls} variants={variants3}><Link href="/" className='py-2 max-w-fit border-b leading-[0.5rem] border-white'>Read the story</Link></motion.div>
            </div>
        </div>
        <div className="flex-[1] relative flex items-center justify-start overflow-hidden ">
            <motion.div animate={controls} variants={variants4} className='w-[70%] h-[90%] relative overflow-hidden rounded-2xl'>
              <ParallaxProvider>
                <Parallax speed={-20} className="w-full h-full relative">
                  <Image className=" object-cover  " src={"/images/web/coffee.jpg"} alt={"phone"} fill />
                </Parallax>
              </ParallaxProvider>
            </motion.div>
        </div>
    </div>
  )
}
