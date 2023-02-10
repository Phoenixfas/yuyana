import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaUser } from 'react-icons/fa'
import testimonials from '../data/testimonials'
import Image from 'next/image'
import { motion, useInView, useAnimationControls } from 'framer-motion'

const variants1 = {
    visible: { opacity: 1, y: 0, transition: { duration: .3, } },
    hidden: { opacity: 0, y: 100, transition: { duration: .3, } }
}

export default function Testimonials() {
    const options = { delay: 10000 } // Options
    const autoplayRoot = (emblaRoot:any) => emblaRoot.parentElement // Root node
    // @ts-ignore
    const autoplay = Autoplay(options, autoplayRoot)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])
    /////////////////////////////////////////////////////////////////////////////////

     
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "0px 0px -300px 0px", once: false})
    const controls = useAnimationControls()



    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
        if (emblaApi) {
          // Embla API is ready
        }
      }, [emblaApi, isInView])


  return (
    <motion.div ref={ref} variants={variants1} animate={controls} className='h-screen w-full py-14 flex flex-col items-center justify-end text-[#FEA100]'>
        <h1 className='text-4xl font-light mb-10 text-center'>What Our Customers Say</h1>
        <div ref={emblaRef} className='embla'>
            <div className='embla__container'>

                {testimonials.map((testimonial, index) => (
                    <div key={index} className='embla__slide flex justify-between items-center gap-10'>
                        <div className="testimonial-extra flex flex-col items-start w-[130px] h-[150px] bg-[#FEA100] rounded-r-xl">
                            <div className="w-[60px] h-[60px] bg-[#fff4db] rounded-full translate-y-[-50%] translate-x-[-50%] flex items-center justify-center">
                                <FaUser size={40} color="#FEA100" />
                            </div>
                            <div className="flex-[1] w-full pr-7">
                                <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                                <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                                <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                            </div>
                        </div>
                        <div className=" relative flex flex-col items-center p-10 pt-[70px] w-[500px] bg-[#04ac3c] rounded-xl">
                            <div className="absolute w-[120px] h-[120px] p-1 overflow-hidden bg-[#fff4db] rounded-full top-[-60px] flex items-center justify-center">
                                <Image className='rounded-full' src={testimonial.image} alt={testimonial.name} width={120} height={120} />
                            </div>
                            <div className="flex-[1] w-full text-[#fff4db] flex flex-col items-center justify-center">
                                <h1 className='text-2xl font-bold' >{testimonial.name}</h1>
                                <h2 className='text-lg text-[#fff4db88] mb-5' >{testimonial.title}</h2>
                                <p className='text-center text-sm'>{testimonial.description}</p>
                            </div>
                        </div>
                        <div className="testimonial-extra flex flex-col items-end w-[130px] h-[150px] bg-[#FEA100] rounded-l-xl">
                            <div className="w-[60px] h-[60px] bg-[#fff4db] rounded-full translate-y-[-50%] translate-x-[50%] flex items-center justify-center">
                                <FaUser size={40} color="#FEA100" />
                            </div>
                            <div className="flex-[1] w-full pl-7">
                                <p className='w-full h-[10px] bg-[#fff4db88] rounded-l-md mb-2'></p>
                                <p className='w-full h-[10px] bg-[#fff4db88] rounded-l-md mb-2'></p>
                                <p className='w-full h-[10px] bg-[#fff4db88] rounded-l-md mb-2'></p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </motion.div>
  )
}
