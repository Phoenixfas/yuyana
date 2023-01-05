import { useEffect, useState } from 'react'
import { motion, useInView, useAnimationControls  } from 'framer-motion'
import { useRef } from 'react'

const variants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 1,
        }
    }
}

export default function Test() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-300px", once: false})
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
    }, [isInView])

  return (
    <div ref={ref} className='w-full h-[50vh] bg-orange-400 flex items-center justify-center'>
        <motion.div animate={controls} variants={variants} className={`w-[200px] h-[100px] bg-white rounded-lg`}>

        </motion.div>
    </div>
  )
}
