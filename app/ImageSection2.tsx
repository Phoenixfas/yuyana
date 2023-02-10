import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef} from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variants1 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, } },
    hidden: { opacity: 0, y: 100, transition: { duration: .7, } }
}

const variants2 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, delay: 0.5 } },
    hidden: { opacity: 0, y: 100, transition: { duration: .7, delay: 0.5 } }
}

const variants3 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, delay: .8 } },
    hidden: { opacity: 0, y: 100, transition: { duration: .7, delay: .8 } }
}

export default function ImageSection2() {
  
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-200px", once: false})
  const controls = useAnimationControls()

  useEffect(() => {
      controls.start(isInView ? "visible" : "hidden")
  }, [isInView]);

  return (
    <div ref={ref} className='w-full overflow-hidden h-[100vh] relative'>
      <ParallaxProvider>
          <div className="w-full h-full bg-[#131316] relative overflow-hidden">
            <Parallax speed={-30} className="w-full h-full relative">
              <Image className="w-full h-full object-cover brightness-[.75] " alt='starfall' src={"/images/web/Danakil.jpg"} fill />
            </Parallax>
          </div>
          <div className="flex flex-col min-w-[900px] items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-1 justify-center text-white m-auto p-10">
          <Parallax speed={10} className="flex flex-col items-center" >
              <motion.p animate={controls} variants={variants1}  className='text-[#ffffff] text-sm font-light'>TRAVELLING HOTSPOTS</motion.p>
              <motion.h1 animate={controls} variants={variants2} className='text-[5rem] leading-[5.3rem] text-center font-normal font-sans mb-8 mt-5'><motion.span animate={controls} variants={variants1} >THE </motion.span><motion.span animate={controls} variants={variants2} >DANAKIL </motion.span><motion.span animate={controls} variants={variants3} >DESERT</motion.span></motion.h1>
              {/* <h5 className='text-xl font-serif mb-10'>The perfect gifts to indulge yourself, your interior, and others</h5> */}
              <motion.div animate={controls} variants={variants3} >
                <Link href="/" className='bg-[#fff4db] text-black px-4 py-2 rounded-full'>Book an Adventure</Link>
              </motion.div>
            </Parallax>
          </div>
        </ParallaxProvider>
    </div>
  )
}
