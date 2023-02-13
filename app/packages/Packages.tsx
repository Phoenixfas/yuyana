'use client'
import Image from 'next/image'
import React from 'react'
import Featured from './Featured'
import Filter from './Filter'
import PackagesPaginator from './PackagesPaginator'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function Packages() {
  return (
    <>
        <div className=" h-52 w-full relative flex justify-center items-end">
          <ParallaxProvider>
            <div className="relative h-full w-full overflow-hidden">
              <Parallax speed={30} className="w-full h-[600px] relative">
                <Image src={"/images/tour/serene.jpg"} alt="tours" layout="fill" objectFit="cover" />
              </Parallax>
            </div>
          </ParallaxProvider>
          <Filter />
        </div>


        <div className='py-12  pt-32'>
            
            <div className='w-full flex flex-col'>
                <Featured />
                <PackagesPaginator />
            </div>

        </div>
    </>
  )
}
