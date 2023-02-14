'use client'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player';


export default function HeroSection() {

  return (
    <div className='about-hero w-full overflow-hidden flex pt-40 text-[#131316]'>
        <div className="about-hero-img flex-[1] flex flex-col items-end">
            <motion.div initial={{x: -300, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 2, damping: 10, bounce: 0.8, type: "spring" }} className="flex-[1] relative flex items-center justify-start overflow-hidden ">
                <div className='w-full h-[500px] relative overflow-hidden rounded-2xl flex '>
                    {/* <ParallaxProvider>
                        <Parallax speed={-20} className="w-full h-full relative"> */}
                            <Player src={"https://assets5.lottiefiles.com/packages/lf20_XxstMkDU6c.json"}  background="transparent"  speed={1}  style={{ width: '100%', height: '100%' }}  loop  autoplay />
                        {/* </Parallax>
                    </ParallaxProvider> */}
                </div>
            </motion.div>
        </div>
        <div className="flex-[1] relative ">
            <motion.div initial={{x: 300, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 2, damping: 10, bounce: 0.8, type: "spring", delay: .3 }} className="about-hero-h1 flex-[1] flex flex-col items-start tracking-[1rem] text-[5rem] text-[#FEA100] font-bold left-[-25%] relative">
                CONTACT US
            </motion.div>
            <motion.div initial={{x: 300, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1}} className="about-hero-content flex-[1] flex flex-col items-start text-lg pr-40">
                <p>Our travel experts are here to assist you in making important decisions regarding your adventure to Ethiopia. We are travelers too and can answer any questions you might have about the trip you&apos;re considering. Don&apos;t be hesitant; call us today to see how we can assist you in making the best decision possible.</p>
            </motion.div>
        </div>
    </div>
  )
}
