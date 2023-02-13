'use client'
import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { FaCheck } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variants1 = {
    visible: { opacity: 1, x: 0, transition: { duration: .7, damping: 10, bounce: 0.8, type: "spring" } },
    hidden: { opacity: 0, x: -300, transition: { duration: .7, damping: 10, bounce: 0.8, type: "spring" } }
}
const variants2 = {
    visible: { opacity: 1, x: 0, transition: { duration: .7, delay: .2, damping: 10, bounce: 0.8, type: "spring"  } },
    hidden: { opacity: 0, x: 300, transition: { duration: .7, delay: .2, damping: 10, bounce: 0.8, type: "spring" } }
}

export default function BottomSection() {
    const [animOnce, setAnimOnce] = useState(false)
    const tour = useAppSelector(state => state.activeTour)
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-200px", once: animOnce})
    const controls = useAnimationControls()

    const [margin, setMargin] = useState('-300px')
    const screenSize = window.innerWidth
    
    useEffect(() => {
        if (screenSize < 600) {
            setAnimOnce(true)
            controls.start("visible")
          }else{
            setAnimOnce(false)
            controls.start(isInView ? "visible" : "hidden")
          }
    }, [isInView]);


  return (
    <div ref={ref} className='mt-32 w-full overflow-hidden flex justify-center px-10'>
        <div className="tour-view-included max-w-[900px] flex items-center">
            <motion.div variants={variants1} animate={controls} className="flex-[1] bg-[#FEA100] rounded-xl p-16 flex flex-col">
                <h3 className='text-2xl font-bold mb-5'>What&apos;s Included?</h3>
                <div>
                    {tour.included.map((item: any, index: any) => (
                        <div key={index} className='flex items-center gap-3 mb-3 text-md'><div className='p-1 text-[#FEA100] bg-[#fff4db] rounded-full'><FaCheck size={25} /></div> {item}</div>
                    ))}
                </div>
            </motion.div>
            <motion.div variants={variants2} animate={controls} className="flex-[1] p-16 flex flex-col">
                <h3 className='text-2xl font-bold mb-5'>What&apos;s Not Included?</h3>
                <div>
                    {tour.not_included.map((item: any, index: any) => (
                        <div key={index} className='flex items-center gap-3 mb-3 text-md'><div className='p-1 text-[#fff4db] bg-[#FEA100] rounded-full'><MdClose size={25} /></div> {item}</div>
                    ))}
                </div>
            </motion.div>
        </div>
    </div>
  )
}
