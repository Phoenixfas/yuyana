import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAppSelector } from './redux/hooks'

export default function Browse() {
    const [localTours, setLocalTours] = useState<any[]>([])
    const location = useAppSelector(state => state.location)

    useEffect(() => {
        fetch('https://test.afriopia.com/tours')
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    setLocalTours(data.data.filter((tour: any) => tour.type.toLowerCase() === location.toLowerCase()))
                }
            }).catch(err => console.log(err))
    }, [])

    // console.log(localTours)

  return (
    <div className='px-[90px] py-[100px] bg-[#fff4db] flex flex-col items-center justify-center'>
        <h1 className='text-xl font-black text-slate-800 mb-10'>CHOOSE YOUR NEXT DESTINATION</h1>
        <div className="w-full flex justify-between">
            {localTours.map((tour: any, index) => (
                <div key={index} className="flex flex-col items-center justify-between text-center w-[200px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-[#FEA100] pb-5 rounded-lg">
                    <Image src={tour.image} alt="bed" className='object-contain mb-5 w-full rounded-lg' width={200} height={200} />
                    <p className='text-lg font-normal capitalize h-full text-[#04AD39]' >{tour.name.toLowerCase()}</p>
                </div>
            ))}
            
            <div className="flex flex-col items-center justify-between text-center w-[200px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-[#FEA100] pb-5 rounded-lg">
                <Image src={"https://picsum.photos/300/200"} alt="bed" className='object-contain mb-5 w-full rounded-lg' width={200} height={200} />
                <p className='text-lg font-normal capitalize h-full text-[#04AD39]' >Test Tour</p>
            </div>
            <div className="flex flex-col items-center justify-between text-center w-[200px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-[#FEA100] pb-5 rounded-lg">
                <Image src={"https://picsum.photos/300/201"} alt="bed" className='object-contain mb-5 w-full rounded-lg' width={200} height={200} />
                <p className='text-lg font-normal capitalize h-full text-[#04AD39]' >Test Tour</p>
            </div>
            <div className="flex flex-col items-center justify-between text-center w-[200px] transition-colors cursor-pointer max-h-[250px] box-border hover:bg-[#FEA100] pb-5 rounded-lg">
                <Image src={"https://picsum.photos/300/202"} alt="bed" className='object-contain mb-5 w-full rounded-lg' width={200} height={200} />
                <p className='text-lg font-normal capitalize h-full text-[#04AD39]' >Test Tour</p>
            </div>
        </div>
    </div>
  )
}
