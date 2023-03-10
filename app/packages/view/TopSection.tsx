'use client'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useAppSelector } from '../../redux/hooks'

export default function TopSection() {
  const pkg = useAppSelector(state => state.activePackage)

  return (
    <div className=" h-60 w-full relative flex justify-center items-center">
          <ParallaxProvider>
            <div className="relative h-full w-full overflow-hidden">
              <Parallax speed={30} className="w-full h-[600px] relative">
                <Image src={"/images/tour/serene.jpg"} className="brightness-75" alt="tours" layout="fill" objectFit="cover" />
              </Parallax>
            </div>
          </ParallaxProvider>

          <h1 className='absolute text-center font-bold text-[#fff4db] text-5xl'>
            {pkg.name}
          </h1>
    </div>
  )
}
