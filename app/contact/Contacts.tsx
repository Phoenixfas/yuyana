'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef} from 'react'
import { SiGmail } from "react-icons/si";
import { MdLocationPin, MdCall } from "react-icons/md";
import { motion, useInView, useAnimationControls } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player';

const variants1 = {
    visible: { opacity: 1, y: 0, transition: { duration: .3, } },
    hidden: { opacity: 0, y: 100, transition: { duration: .3, } }
}

const variants2 = {
    visible: { opacity: 1,  transition: { duration: .3,  } },
    hidden: { opacity: 0,  transition: { duration: .3,  } }
}

const variants3 = {
    visible: { opacity: 1, rotateX: 0, transition: { duration: .5, delay: .3, damping: 7, bounce: 0.8, type: "spring" } },
    hidden: { opacity: 0, rotateX: 90, transition: { duration: .5, delay: .3, damping: 7, bounce: 0.8, type: "spring" } }
}

const variants4 = {
    visible: { opacity: 1,  transition: { duration: .7, delay: .7 } },
    hidden: { opacity: 0,  transition: { duration: .7, delay: .7 } }
}

export default function Contacts() {
    
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "0px 0px -300px 0px", once: false})
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
      }, [isInView]);

    
  return (
    <div ref={ref} className="w-full h-screen flex flex-col items-center justify-center text-[#fff4db] gap-32">
        {/* <motion.h1 variants={variants1} animate={controls} className='text-6xl font-bold tracking-[.5rem] text-[#04ac3c]'>REACH US @</motion.h1> */}
        <div className="w-full relative flex  justify-center">

            <motion.div variants={variants2} animate={controls} className="about-team-back flex absolute w-full h-[300px] gap-[164px] justify-center items-center">
                <div className="w-[200px] h-[200px] rounded-2xl rotate-45 border-[30px] border-[#04ac3c55]"></div>
                <div className="w-[200px] h-[200px] rounded-2xl rotate-45 border-[30px] border-[#04ac3c55]"></div>
            </motion.div>
            <motion.div variants={variants3} animate={controls} className="relative flex  text-[#131316]">
                <div className="about-team-front flex items-center gap-16">
                    <div className="w-[300px] h-[300px] hover:scale-105 duration-300 rounded-2xl p-3 bg-[#04ac3c]">
                        <Link href={"mailto:hello@afriopia.com"}>
                            <div className="w-full h-full rounded-2xl bg-[#fff4db] flex flex-col gap-5 items-center  p-5">
                                <div className="">
                                    <Player autoplay loop src="https://assets5.lottiefiles.com/packages/lf20_wjqxlzth.json" style={{ height: '100px', width: '100px' }} />
                                </div>
                                <div className='flex flex-col items-center text-center'>
                                    <h3 className='font-bold'>Mail Here</h3>
                                    <p>hello@afriopia.com</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-[300px] h-[300px] hover:scale-105 duration-300 rounded-2xl p-3 bg-[#04ac3c]">
                        <Link href={"https://www.google.com.et/maps/place/Kaldi's+Coffee/@9.0003084,38.7877521,20z/data=!4m5!3m4!1s0x164b85ba01780cc5:0x6b9f759d06cec764!8m2!3d9.0003136!4d38.7879323?hl=en"}>
                            <div className="w-full h-full rounded-2xl bg-[#fff4db] flex flex-col gap-5 items-center  p-5">
                                <div className="">
                                    <Player autoplay loop src="https://assets8.lottiefiles.com/private_files/lf30_kxkxycqz.json" style={{ height: '100px', width: '100px' }} />
                                </div>
                                <div className='flex flex-col items-center text-center'>
                                    <h3 className='font-bold'>Visit Here</h3>
                                    <p>Edna Mall to 22 Road, on the building where kaldis is located, 4th Floor Nº 404</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-[300px] h-[300px] hover:scale-105 duration-300 rounded-2xl p-3 bg-[#04ac3c]">
                        <Link href={"tel:+251 911 023 143"}>
                            <div className="w-full h-full rounded-2xl bg-[#fff4db] flex flex-col gap-5 items-center  p-5">
                                <div className="">
                                    <Player autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_vmrq4mv1.json" style={{ height: '100px', width: '100px' }} />
                                </div>
                                <div className='flex flex-col items-center text-center'>
                                    <h3 className='font-bold'>Call Here</h3>
                                    <p>+251-911-023-143</p>
                                    <p>+251-939-506-897</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </motion.div>

        </div>
    </div>
  )
}
