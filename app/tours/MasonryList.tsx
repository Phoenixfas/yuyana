import Image from 'next/image'
import React from 'react'

export default function MasonryList() {
  return (
    <div>
        <h1 className='text-2xl text-slate-600 font-bold mb-10'>Browse</h1>
        {/* masonry grid */}
        <div className='columns-3 '>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/400/500"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/600/300"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/700/900"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/400/800"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/900/500"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/400/500"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/600/300"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/700/900"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/400/800"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
            <div className='hovanimcon w-full mb-4  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi?</div>
                <Image className='w-full max-h-[500px] object-cover' src={"https://picsum.photos/900/500"} alt={"Tour"} width={500} height={500} quality={100} />
            </div>
        </div>
    </div>
  )
}
