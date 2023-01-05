import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect, useRef} from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variants1 = {
    visible: { opacity: 1, x: 0, transition: { duration: .7, } },
    hidden: { opacity: 0, x: 100, transition: { duration: .7, } }
}

const variants2 = {
    visible: { opacity: 1, x: 0, transition: { duration: .7, delay: 0.3 } },
    hidden: { opacity: 0, x: 100, transition: { duration: .7, delay: 0.3 } }
}

const variants3 = {
    visible: { opacity: 1, x: 0, transition: { duration: .7, delay: .6 } },
    hidden: { opacity: 0, x: 100, transition: { duration: .7, delay: .6 } }
}

export default function SplitScreen2() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-300px 0px -200px 0px", once: false})
  const controls = useAnimationControls()
  
  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden")
  }, [isInView]);
  
  return (
    <div ref={ref} className='w-full h-[100vh] flex flex-row-reverse'>
        <div className="flex-[1] flex px-14 py-32 items-center justify-center text-white bg-[#4C363A]">
            <div className='flex flex-col'>
                <motion.p animate={controls} variants={variants1} className='text-sm text-[#ffffff99]'>Blogs</motion.p>
                <motion.h1 animate={controls} variants={variants2} className='text-[5rem] leading-[5.3rem] max-w-fit font-normal font-serif my-8'>Ethiopia Restarting Tourism</motion.h1>
                <motion.div animate={controls} variants={variants3}><Link href="/" className='py-2 max-w-fit border-b leading-[0.5rem] border-white'>Read the story</Link></motion.div>
            </div>
        </div>
        <div className="flex-[1] min-w-[50%] relative overflow-hidden">
          <ParallaxProvider>
            <Parallax speed={-20} className="w-full h-full relative">
              <Image className="w-full h-full object-cover" src={"/images/web/tourism.jpg"} alt={"phone"} fill />
            </Parallax>
          </ParallaxProvider>
        </div>
    </div>
  )
}
