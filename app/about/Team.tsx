import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef} from 'react'
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variants1 = {
    visible: { opacity: 1, y: 0, transition: { duration: .3, } },
    hidden: { opacity: 0, y: 100, transition: { duration: .3, } }
}

const variants2 = {
    visible: { opacity: 1,  transition: { duration: .3,  } },
    hidden: { opacity: 0,  transition: { duration: .3,  } }
}

const variants3 = {
    visible: { opacity: 1, y: 0, transition: { duration: .5, delay: .3, damping: 7, bounce: 0.8, type: "spring" } },
    hidden: { opacity: 0, y: 100, transition: { duration: .5, delay: .3, damping: 7, bounce: 0.8, type: "spring" } }
}

const variants4 = {
    visible: { opacity: 1,  transition: { duration: .7, delay: .7 } },
    hidden: { opacity: 0,  transition: { duration: .7, delay: .7 } }
}

export default function Team() {
    
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "0px 0px -300px 0px", once: false})
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
      }, [isInView]);

    
  return (
    <div ref={ref} className="w-full mt-52 flex flex-col items-center text-[#131316] gap-32">
        <motion.h1 variants={variants1} animate={controls} className='about-team-h1 text-6xl font-bold tracking-[.5rem] text-[#04ac3c]'>MEET OUR TEAM</motion.h1>
        <div className="w-full relative flex  justify-center">

            <motion.div variants={variants2} animate={controls} className="about-team-back flex absolute w-full h-[250px] gap-24 justify-center items-center">
                <div className="w-[200px] h-[200px] rounded-full border-[40px] border-[#FEA10055]"></div>
                <div className="w-[200px] h-[200px] rounded-full border-[40px] border-[#FEA10055]"></div>
            </motion.div>
            <motion.div variants={variants3} animate={controls} className="about-team-front relative flex gap-10 ">
                <div className="flex flex-col items-center gap-16">
                    <div className="w-[250px] h-[250px] rounded-full p-3 bg-[#FEA100]">
                        <Image src="/images/about/team/muna.jpg" className='w-full h-full object-cover rounded-full' alt='Muna Seifu' width={300} height={300} priority quality={100} unoptimized />
                    </div>
                    <div className='flex flex-col items-center gap-7'>
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl font-bold">Muna Seifu</h1>
                            <h2 className='text-md font-light'>FOUNDER & CEO</h2>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href='https://twitter.com/'>
                                <FaTwitter className='text-3xl' />
                            </Link>
                            <Link href='https://www.linkedin.com/in/'>
                                <FaLinkedin className='text-3xl' />
                            </Link>
                            <Link href='mailto:muna@afriopia.com'>
                                <FaEnvelope className='text-3xl' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-16">
                    <div className="w-[250px] h-[250px] rounded-full p-3 bg-[#FEA100]">
                        <Image src="/images/about/team/brook.jpg" className='w-full h-full object-cover rounded-full' alt='Brook Seifu' width={300} height={300} priority quality={100} unoptimized />
                    </div>
                    <div className='flex flex-col items-center gap-7'>
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl font-bold">Brook Seifu</h1>
                            <h2 className='text-md font-light'>CO FOUNDER & CTO</h2>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href='https://twitter.com/SeifuBrook'>
                                <FaTwitter className='text-3xl' />
                            </Link>
                            <Link href='https://www.linkedin.com/in/brook-seifu-b18552181/'>
                                <FaLinkedin className='text-3xl' />
                            </Link>
                            <Link href='mailto:brook@afriopia.com'>
                                <FaEnvelope className='text-3xl' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-16">
                    <div className="w-[250px] h-[250px] rounded-full p-3 bg-[#FEA100]">
                        <Image src="/images/about/team/negash.webp" className='w-full h-full object-cover rounded-full' alt='Negash Jemal' width={300} height={300} priority quality={100} unoptimized />
                    </div>
                    <div className='flex flex-col items-center gap-7'>
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl font-bold">Negash Jemal</h1>
                            <h2 className='text-md font-light'>COO</h2>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href='https://twitter.com/'>
                                <FaTwitter className='text-3xl' />
                            </Link>
                            <Link href='https://www.linkedin.com/in/'>
                                <FaLinkedin className='text-3xl' />
                            </Link>
                            <Link href='mailto:brook@afriopia.com'>
                                <FaEnvelope className='text-3xl' />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    </div>
  )
}
