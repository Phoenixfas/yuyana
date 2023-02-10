import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Image from 'next/image'

export default function WhyUs() {
  return (
    <div className=" h-[70vh] mt-52 flex flex-col items-center justify-center">
        <ParallaxProvider>
            <div className='w-full h-full relative overflow-hidden'>
                <Parallax speed={-20} className="w-full h-full relative">
                    <Image src="/images/about/lake.jpg" className='w-full h-full object-cover' alt='about-1' width={300} height={300} priority quality={100} unoptimized />
                </Parallax>
            </div>

            <Parallax speed={10} className="absolute flex flex-wrap justify-center items-center text-[#04ac3c] gap-10" >
                <div className="p-3 max-w-[350px] bg-gradient-to-r from-[#FEA100] to-[#04ac3c] rounded-lg">
                    <div className="flex flex-col items-center p-5 gap-3 bg-[#fff4db] ">
                        <h1 className='text-2xl font-bold text-center'>Stress Free Experience</h1>
                        <p className='text-sm text-center text-[#131316]'>We handle the details of your travel planning so you can sit back and relax.</p>
                    </div>
                </div>
                <div className="p-3 max-w-[350px] bg-gradient-to-r from-[#FEA100] to-[#04ac3c] rounded-lg">
                    <div className="flex flex-col items-center p-5 gap-3 bg-[#fff4db] ">
                        <h1 className='text-2xl font-bold text-center'>World Class Service</h1>
                        <p className='text-sm text-center text-[#131316]'>We are highly confident in our promise to serve you better.</p>
                    </div>
                </div>
                <div className="p-3 max-w-[350px] bg-gradient-to-r from-[#FEA100] to-[#04ac3c] rounded-lg">
                    <div className="flex flex-col items-center p-5 gap-3 bg-[#fff4db] ">
                        <h1 className='text-2xl font-bold text-center'>Best Price Guarantee</h1>
                        <p className='text-sm text-center text-[#131316]'>You can be sure of booking at the best rate.</p>
                    </div>
                </div>
            </Parallax>
        </ParallaxProvider>
    </div>
  )
}
