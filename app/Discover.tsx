import Image from 'next/image'
import React from 'react'

export default function Discover() {
  return (
    <div className='w-full h-[100vh] felx flex-col items-center text-[#fff4db] pt-20 px-28'>
        <div className='w-full flex flex-col items-center mb-20'>
            <h1 className='text-[2.5rem]'>DISCOVER OUR MULTITOUR PREMIUM PACKAGES</h1>
            <p className='text-[1.2rem] text-center max-w-[400px] font-poppins font-light'>Click on a package to have an Extraordinary Experience </p>
        </div>
        <div className='flex flex-wrap gap-10 w-full items-center justify-center'>


            <div className='felx flex-col hover:scale-110 discover duration-300 ease-in-out'>
                <div className='flex items-center justify-center discover-image duration-300 mb-6 bg-gradient-to-br from-[#fff4db] to-[#000] rounded-[50%] w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center w-[140px] h-[140px]  bg-gradient-to-br from-slate-500 to-slate-200 rounded-[50%] overflow-hidden relative' >
                        <Image src='https://picsum.photos/300' alt='discover' className='object-cover w-[130px] h-[130px] rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center font-poppins'>Beauty Blooms</p>
            </div>
            <div className='felx flex-col hover:scale-110 discover duration-300 ease-in-out'>
                <div className='flex items-center justify-center discover-image duration-300 mb-6 bg-gradient-to-br from-[#fff4db] to-[#000] rounded-[50%] w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center w-[140px] h-[140px]  bg-gradient-to-br from-slate-500 to-slate-200 rounded-[50%] overflow-hidden relative' >
                        <Image src='https://picsum.photos/301' alt='discover' className='object-cover w-[130px] h-[130px] rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center font-poppins'>Beauty Blooms</p>
            </div>
            <div className='felx flex-col hover:scale-110 discover duration-300 ease-in-out'>
                <div className='flex items-center justify-center discover-image duration-300 mb-6 bg-gradient-to-br from-[#fff4db] to-[#000] rounded-[50%] w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center w-[140px] h-[140px]  bg-gradient-to-br from-slate-500 to-slate-200 rounded-[50%] overflow-hidden relative' >
                        <Image src='https://picsum.photos/302' alt='discover' className='object-cover w-[130px] h-[130px] rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center font-poppins'>Beauty Blooms</p>
            </div>
            <div className='felx flex-col hover:scale-110 discover duration-300 ease-in-out'>
                <div className='flex items-center justify-center discover-image duration-300 mb-6 bg-gradient-to-br from-[#fff4db] to-[#000] rounded-[50%] w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center w-[140px] h-[140px]  bg-gradient-to-br from-slate-500 to-slate-200 rounded-[50%] overflow-hidden relative' >
                        <Image src='https://picsum.photos/303' alt='discover' className='object-cover w-[130px] h-[130px] rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center font-poppins'>Beauty Blooms</p>
            </div>


        </div>
    </div>
  )
}
