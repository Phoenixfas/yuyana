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
    visible: { opacity: 1, y: 0, transition: { duration: .7, delay: 0.3 } },
    hidden: { opacity: 0, y: 100, transition: { duration: .7, delay: 0.3 } }
}

const variants3 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, delay: .6 } },
    hidden: { opacity: 0, y: 100, transition: { duration: .7, delay: .6 } }
}

export default function ImageSection3() {

  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-300px", once: false})
  const controls = useAnimationControls()

  useEffect(() => {
      controls.start(isInView ? "visible" : "hidden")
  }, [isInView]);


  return (
    <div ref={ref} className='w-full overflow-hidden h-[100vh] relative'>
      <ParallaxProvider>
        <div className="w-full h-full bg-[#131316] relative overflow-hidden">
          <Parallax speed={-30} className="w-full h-full relative">
            <Image className="w-full h-full object-cover brightness-50 " alt='starfall' src={"/images/web/Chebra-Churchura.jpg"} fill />
          </Parallax>
        </div>
        <div className="flex flex-col min-w-[900px] items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-1 justify-center text-white m-auto p-10">
          <Parallax speed={10} className="flex flex-col items-center" >
            <motion.p animate={controls} variants={variants1}  className={`text-[#ffffff99] text-sm font-light `} >TRAVELLING HOTSPOTS</motion.p>
            <motion.h1 animate={controls} variants={variants2} className={`text-[5rem] leading-[5.3rem] text-center font-normal font-serif mb-8 mt-5 `} >Chebra Churchura</motion.h1>
            {/* <h5 className='text-xl font-serif mb-10'>The perfect gifts to indulge yourself, your interior, and others</h5> */}
            <motion.div animate={controls} variants={variants3} >
              <Link href="/" className={`text-white py-2 border-b leading-[0.5rem] border-white `} >Book an Adventure</Link>
            </motion.div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  )
}
