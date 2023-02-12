import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Featured() {
  return (
    <div className="w-full px-28 flex flex-col">
        <h1 className='tours-featured-h1 text-3xl font-bold mb-10'>Featured Places</h1>
        <div className='tours-featured w-full flex flex-wrap items-center justify-start gap-5 mb-16'>
            <Link href={"/tours"} className='w-[200px] h-[200px] overflow-hidden rounded-md relative cursor-pointer'>
                <div className='absolute flex items-center p-3 w-full h-full bg-[#00000088] z-50 text-white font-light opacity-0  hover:opacity-100 duration-500'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <Image className='w-full h-full object-cover relative' src={'https://picsum.photos/400'} alt={'Logo'} width={100} height={100} quality={100} />
            </Link>
            <Link href={"/tours"} className='w-[200px] h-[200px] overflow-hidden rounded-md relative cursor-pointer'>
                <div className='absolute flex items-center p-3 w-full h-full bg-[#00000088] z-50 text-white font-light opacity-0  hover:opacity-100 duration-500'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium.</p>
                </div>
                <Image className='w-full h-full object-cover relative' src={'https://picsum.photos/401'} alt={'Logo'} width={100} height={100} quality={100} />
            </Link>
            <Link href={"/tours"} className='w-[200px] h-[200px] overflow-hidden rounded-md relative cursor-pointer'>
                <div className='absolute flex items-center p-3 w-full h-full bg-[#00000088] z-50 text-white font-light opacity-0  hover:opacity-100 duration-500'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.</p>
                </div>
                <Image className='w-full h-full object-cover relative' src={'https://picsum.photos/402'} alt={'Logo'} width={100} height={100} quality={100} />
            </Link>
            <Link href={"/tours"} className='w-[200px] h-[200px] overflow-hidden rounded-md relative cursor-pointer'>
                <div className='absolute flex items-center p-3 w-full h-full bg-[#00000088] z-50 text-white font-light opacity-0  hover:opacity-100 duration-500'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <Image className='w-full h-full object-cover relative' src={'https://picsum.photos/403'} alt={'Logo'} width={100} height={100} quality={100} />
            </Link>
        </div>
    </div>
  )
}
