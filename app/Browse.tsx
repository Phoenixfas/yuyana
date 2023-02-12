import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useAppSelector } from './redux/hooks'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variants1 = {
    visible: { opacity: 1, y: 0, transition: { duration: .3, } },
    hidden: { opacity: 0, y: 100, transition: { duration: .3, } }
}

const variants2 = {
    visible: { opacity: 1, rotateX: 0, rotateY: 0,  transition: { duration: .3, delay: .2 } },
    hidden: { opacity: 0, rotateX: 0, rotateY: 90,  transition: { duration: .3, delay: .2 } }
}

export default function Browse() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "0px 0px -300px 0px", once: false})
    const controls = useAnimationControls()


    const [localTours, setLocalTours] = useState<any[]>([])
    const location = useAppSelector(state => state.location)

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")


        fetch('https://test.afriopia.com/tours')
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    setLocalTours(data.data)
                }
            }).catch(err => console.log(err))
    }, [isInView])

    // console.log(localTours)

  return (
    <div ref={ref} className='px-[90px] py-32 text-[#FEA100] flex flex-col items-center justify-center'>
        <motion.h1 variants={variants1} animate={controls} className='text-md font-bold mb-14 text-center'>CHOOSE YOUR NEXT DESTINATION</motion.h1>
        <motion.div variants={variants2} animate={controls} className="w-full flex flex-wrap justify-center gap-10">
            {localTours.map((tour: any, index) => (
                <div key={index} className="flex flex-col items-center justify-between text-center w-[230px] transition-colors cursor-pointer max-h-[250px] box-border  rounded-lg browse-hover">
                    <Image src={tour.image} alt="bed" className='object-contain duration-300 w-full rounded-lg browse-hover-img' width={200} height={200} />
                    <p className='text-sm font-normal capitalize w-[85%] h-full text-[#fff4db] bg-[#ffffff22] rounded-lg duration-300 flex items-center justify-center p-3 browse-hover-p' >{tour.name.toLowerCase()}</p>
                </div>
            ))}
            
        
            <div className="flex flex-col items-center justify-between text-center w-[230px] transition-colors cursor-pointer max-h-[250px] box-border  rounded-lg browse-hover">
                <Image src={"https://picsum.photos/300/200"} alt="bed" className='object-contain duration-300 w-full rounded-lg browse-hover-img' width={200} height={200} />
                <p className='text-sm font-normal capitalize w-[85%] h-full text-[#fff4db] bg-[#ffffff22] rounded-lg duration-300 flex items-center justify-center p-3 browse-hover-p' >Lorem ipsum dolor sit.</p>
            </div>
            <div className="flex flex-col items-center justify-between text-center w-[230px] transition-colors cursor-pointer max-h-[250px] box-border  rounded-lg browse-hover">
                <Image src={"https://picsum.photos/300/201"} alt="bed" className='object-contain duration-300 w-full rounded-lg browse-hover-img' width={200} height={200} />
                <p className='text-sm font-normal capitalize w-[85%] h-full text-[#fff4db] bg-[#ffffff22] rounded-lg duration-300 flex items-center justify-center p-3 browse-hover-p' >Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col items-center justify-between text-center w-[230px] transition-colors cursor-pointer max-h-[250px] box-border  rounded-lg browse-hover">
                <Image src={"https://picsum.photos/400/202"} alt="bed" className='object-contain duration-300 w-full rounded-lg browse-hover-img' width={200} height={200} />
                <p className='text-sm font-normal capitalize w-[85%] h-full text-[#fff4db] bg-[#ffffff22] rounded-lg duration-300 flex items-center justify-center p-3 browse-hover-p' >Lorem, ipsum dolor.</p>
            </div>
            
        </motion.div>
    </div>
  )
}
