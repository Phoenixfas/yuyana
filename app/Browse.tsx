import React from 'react'
import Image from 'next/image'

export default function Browse() {
  return (
    <div className='px-[90px] py-[120px] bg-white flex flex-col items-center justify-center'>
        <h1 className='text-base font-bold text-slate-800 mb-8'>BROWSE OUR COLLECTION</h1>
        <div className="flex gap-5">
            <div className="flex flex-col items-center justify-between max-w-[230px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-slate-100 pt-1 pb-5 rounded-lg">
                <Image src="/images/bed.webp" alt="bed" className='object-contain mb-5' width={200} height={200} />
                <p className='text-lg text-slate-600 font-normal' >Bedding & Bath</p>
            </div>
            <div className="flex flex-col items-center justify-between max-w-[230px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-slate-100 pt-1 pb-5 rounded-lg">
                <Image src="/images/furniture.webp" alt="bed" className='object-contain mb-5' width={200} height={200} />
                <p className='text-lg text-slate-600 font-normal' >Furniture</p>
            </div>
            <div className="flex flex-col items-center justify-between max-w-[230px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-slate-100 pt-1 pb-5 rounded-lg">
                <Image src="/images/lighting.webp" alt="bed" className='object-contain mb-5' width={200} height={200} />
                <p className='text-lg text-slate-600 font-normal' >Lighting</p>
            </div>
            <div className="flex flex-col items-center justify-between max-w-[230px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-slate-100 pt-1 pb-5 rounded-lg">
                <Image src="/images/home.webp" alt="bed" className='object-contain mb-5' width={200} height={200} />
                <p className='text-lg text-slate-600 font-normal' >Home Accessories</p>
            </div>
            <div className="flex flex-col items-center justify-between max-w-[230px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-slate-100 pt-1 pb-5 rounded-lg">
                <Image src="/images/wall.webp" alt="bed" className='object-contain mb-5' width={200} height={200} />
                <p className='text-lg text-slate-600 font-normal' >Wall & Floor</p>
            </div>
            <div className="flex flex-col items-center justify-between max-w-[230px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-slate-100 pt-1 pb-5 rounded-lg">
                <Image src="/images/body.webp" alt="bed" className='object-contain mb-5' width={200} height={200} />
                <p className='text-lg text-slate-600 font-normal' >Body & Beauty</p>
            </div>
        </div>
    </div>
  )
}
