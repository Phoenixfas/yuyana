'use client'
import { useEffect, useRef } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variants1 = {
    visible: { opacity: 1, rotateX: 0, transition: { duration: .7, } },
    hidden: { opacity: 0, rotateX: 100, transition: { duration: .7, } }
}


export default function MiddleSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "100px", once: true})
    const controls = useAnimationControls()
    
    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
    }, [isInView]);


    const tour = useAppSelector(state => state.activeTour)

  return (
    <motion.div ref={ref} variants={variants1} animate={controls} className='mt-32 w-full flex flex-col items-center px-10'>
        <h1 className='text-[#131316] font-bold text-5xl mb-5 text-center'>Tour Program</h1>
        <p className='text-[#FEA100] text-xl mb-20 text-center' >EXPERIENCE WORLD-CLASS TOUR SERVICE</p>
        <div className="flex flex-wrap max-w-[1000px] gap-10 justify-center">
            {tour.tour_program.map((item: any, index: any) => (
                <div key={index} className="flex flex-col w-[280px]">
                    <h3 className='text-xl font-bold text-[#04ac3c]'>Day {item.day}</h3>
                    <h2 className='text-xl font-light text-[#04ac3c] mb-3'>{item.activity}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
        
    </motion.div>
  )
}
