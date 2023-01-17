import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaUser } from 'react-icons/fa'

export default function Testimonials() {
    const options = { delay: 5000 } // Options
    const autoplayRoot = (emblaRoot:any) => emblaRoot.parentElement // Root node
    // @ts-ignore
    const autoplay = Autoplay(options, autoplayRoot)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])

    useEffect(() => {
        if (emblaApi) {
          // Embla API is ready
        }
      }, [emblaApi])


  return (
    <div className='h-screen w-full py-14 flex flex-col items-center justify-center text-[#fff4db]'>
        <h1 className='text-4xl font-light mb-10'>What Our Customers Say</h1>
        <div ref={emblaRef} className='embla'>
            <div className='embla__container'>



                <div className='embla__slide flex justify-between items-center gap-10'>
                    <div className="flex flex-col items-start w-[130px] h-[150px] bg-[#FEA100] rounded-r-xl">
                        <div className="w-[60px] h-[60px] bg-[#fff4db] rounded-full translate-y-[-50%] translate-x-[-50%] flex items-center justify-center">
                            <FaUser size={40} color="#FEA100" />
                        </div>
                        <div className="flex-[1] w-full pr-7">
                            <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                            <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                            <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[500px] h-[300px] bg-[#fff4db] rounded-xl">
                        <div className="w-[120px] h-[120px] bg-[#FEA100] rounded-full translate-y-[-50%] flex items-center justify-center">
                            <FaUser size={80} color="#fff4db" />
                        </div>
                    </div>
                    <div className="flex flex-col items-end w-[130px] h-[150px] bg-[#FEA100] rounded-l-xl">
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


                <div className='embla__slide flex justify-between items-center gap-10'>
                    <div className="flex flex-col items-start w-[130px] h-[150px] bg-[#FEA100] rounded-r-xl">
                        <div className="w-[60px] h-[60px] bg-[#fff4db] rounded-full translate-y-[-50%] translate-x-[-50%] flex items-center justify-center">
                            <FaUser size={40} color="#FEA100" />
                        </div>
                        <div className="flex-[1] w-full pr-7">
                            <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                            <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                            <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[500px] h-[300px] bg-[#fff4db] rounded-xl">
                        <div className="w-[120px] h-[120px] bg-[#FEA100] rounded-full translate-y-[-50%] flex items-center justify-center">
                            <FaUser size={80} color="#fff4db" />
                        </div>
                    </div>
                    <div className="flex flex-col items-end w-[130px] h-[150px] bg-[#FEA100] rounded-l-xl">
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


                <div className='embla__slide flex justify-between items-center gap-10'>
                    <div className="flex flex-col items-start w-[130px] h-[150px] bg-[#FEA100] rounded-r-xl">
                        <div className="w-[60px] h-[60px] bg-[#fff4db] rounded-full translate-y-[-50%] translate-x-[-50%] flex items-center justify-center">
                            <FaUser size={40} color="#FEA100" />
                        </div>
                        <div className="flex-[1] w-full pr-7">
                            <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                            <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                            <p className='w-full h-[10px] bg-[#fff4db88] rounded-r-md mb-2'></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[500px] h-[300px] bg-[#fff4db] rounded-xl">
                        <div className="w-[120px] h-[120px] bg-[#FEA100] rounded-full translate-y-[-50%] flex items-center justify-center">
                            <FaUser size={80} color="#fff4db" />
                        </div>
                    </div>
                    <div className="flex flex-col items-end w-[130px] h-[150px] bg-[#FEA100] rounded-l-xl">
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


            </div>
        </div>
    </div>
  )
}
