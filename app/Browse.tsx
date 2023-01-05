import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Browse() {
    const [localTours, setLocalTours] = useState<any[]>([])

    useEffect(() => {
        fetch('https://test.afriopia.com/tours')
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    setLocalTours(data.data.filter((tour: any) => tour.type === 'local'))
                }
            }).catch(err => console.log(err))
    }, [])

    // console.log(localTours)

  return (
    <div className='px-[90px] py-[120px] bg-white flex flex-col items-center justify-center'>
        <h1 className='text-xl font-black text-slate-800 mb-8'>CHOOSE YOUR NEXT DESTINATION</h1>
        <div className="flex gap-5">
            {localTours.map((tour: any, index) => (
                <div key={index} className="flex flex-col items-center justify-between text-center w-[200px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-[#FEA100] pb-5 rounded-lg">
                    <Image src={tour.image} alt="bed" className='object-contain mb-5 w-full rounded-lg' width={200} height={200} />
                    <p className='text-lg text-slate-600 font-normal capitalize h-full' >{tour.name.toLowerCase()}</p>
                </div>
            ))}
            
            
        </div>
    </div>
  )
}
