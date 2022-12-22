import Image from 'next/image'
import React from 'react'

export default function Discover() {
  return (
    <div className='w-full h-[100vh] felx flex-col items-center bg-white pt-20 px-28'>
        <div className='w-full flex flex-col items-center mb-20'>
            <h1 className='text-[2.5rem]'>DISCOVER A LIFE EXTRAORDINARY</h1>
            <p className='text-[1.2rem] text-[#00000088] text-center max-w-[400px] font-poppins font-light'>Click on an interior Mood to step through The Portal and into A Life Extraordinary</p>
        </div>
        <div className='flex gap-10'>


            <div className='felx flex-col '>
                <div className='flex items-center justify-center mb-6 bg-gradient-to-br from-[#ddd] to-[#fefefe] rounded-[50%] shadow-2xl w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center w-[140px] h-[140px]  bg-gradient-to-br from-slate-500 to-slate-200 rounded-[50%] overflow-hidden relative' >
                        <Image src='/images/web/danakil.jpg' alt='discover' className='object-cover w-[130px] h-[130px] rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center text-[#00000099] font-poppins'>Beauty Blooms</p>
            </div>
            <div className='felx flex-col '>
                <div className='flex items-center justify-center mb-6 bg-gradient-to-br from-[#ddd] to-[#fefefe] rounded-[50%] shadow-2xl w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center w-[140px] h-[140px]  bg-gradient-to-br from-slate-500 to-slate-200 rounded-[50%] overflow-hidden relative' >
                        <Image src='/images/web/danakil.jpg' alt='discover' className='object-cover w-[130px] h-[130px] rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center text-[#00000099] font-poppins'>Beauty Blooms</p>
            </div>
            <div className='felx flex-col '>
                <div className='flex items-center justify-center mb-6 bg-gradient-to-br from-[#ddd] to-[#fefefe] rounded-[50%] shadow-2xl w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center w-[140px] h-[140px]  bg-gradient-to-br from-slate-500 to-slate-200 rounded-[50%] overflow-hidden relative' >
                        <Image src='/images/web/danakil.jpg' alt='discover' className='object-cover w-[130px] h-[130px] rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center text-[#00000099] font-poppins'>Beauty Blooms</p>
            </div>
            <div className='felx flex-col '>
                <div className='flex items-center justify-center mb-6 bg-gradient-to-br from-[#ddd] to-[#fefefe] rounded-[50%] shadow-2xl w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center w-[140px] h-[140px]  bg-gradient-to-br from-slate-500 to-slate-200 rounded-[50%] overflow-hidden relative' >
                        <Image src='/images/web/danakil.jpg' alt='discover' className='object-cover w-[130px] h-[130px] rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center text-[#00000099] font-poppins'>Beauty Blooms</p>
            </div>


        </div>
    </div>
  )
}
