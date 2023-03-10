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

const variants4 = {
  visible: { opacity: 1, x: 0, transition: { duration: .7 } },
  hidden: { opacity: 0, x: -100, transition: { duration: .7 } }
}

export default function SplitScreen2() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-300px 0px -200px 0px", once: false})
  const controls = useAnimationControls()
  
  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden")
  }, [isInView]);
  
  return (
    <div ref={ref} className='split-screen w-full h-[100vh] overflow-hidden flex flex-row-reverse gap-16'>
        <div className="split-screen-contentCon flex-[1] flex  py-32 items-center justify-center text-[#131316]">
            <div className='split-screen-content flex flex-col'>
                <motion.p animate={controls} variants={variants1} className='text-sm text-[#13131699]'>Blogs</motion.p>
                <motion.h1 animate={controls} variants={variants2} className='text-[6rem] leading-[6rem] max-w-[70%] font-normal font-serif my-8'>Ethiopia Restarting Tourism</motion.h1>
                <motion.div animate={controls} variants={variants3}><Link href="/" className='py-2 max-w-fit border-b leading-[0.5rem] border-[#131316]'>Read the story</Link></motion.div>
            </div>
        </div>
        <div className="split-screen-img flex-[1] relative flex items-center justify-end overflow-hidden ">
            <motion.div animate={controls} variants={variants4} className='w-[70%] h-[90%] relative overflow-hidden rounded-2xl'>
              <ParallaxProvider>
                <Parallax speed={-20} className="w-full h-full relative">
                  <Image className=" object-cover  rounded-2xl" src={"/images/web/tourism.jpg"} alt={"phone"} fill />
                </Parallax>
              </ParallaxProvider>
            </motion.div>
        </div>
    </div>
  )
}
