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
    <div className='px-[90px] py-32 text-[#FEA100] flex flex-col items-center justify-center'>
        <h1 className='text-md font-bold mb-14 text-center'>CHOOSE YOUR NEXT DESTINATION</h1>
        <div className="w-full flex flex-wrap justify-center gap-10">
            {localTours.map((tour: any, index) => (
                <div key={index} className="flex flex-col items-center justify-between text-center w-[230px] transition-colors cursor-pointer max-h-[250px] box-border  rounded-lg browse-hover">
                    <Image src={tour.image} alt="bed" className='object-contain duration-300 w-full rounded-lg browse-hover-img' width={200} height={200} />
                    <p className='text-sm font-normal capitalize w-[85%] h-full text-[#fff4db] bg-[#ffffff22] rounded-lg duration-300 flex items-center justify-center p-3 browse-hover-p' >{tour.name.toLowerCase()}</p>
                </div>
            ))}
            
        
            <div className="flex flex-col items-center justify-between text-center w-[230px] transition-colors cursor-pointer max-h-[250px] box-border  rounded-lg browse-hover">
                <Image src={"https://picsum.photos/300/200"} alt="bed" className='object-contain duration-300 w-full rounded-lg browse-hover-img' width={200} height={200} />
                <p className='text-sm font-normal capitalize w-[85%] h-full text-[#fff4db] bg-[#ffffff22] rounded-lg duration-300 flex items-center justify-center p-3 browse-hover-p' >Lorem ipsum dolor sit.</p>
            </div>
            <div className="flex flex-col items-center justify-between text-center w-[230px] transition-colors cursor-pointer max-h-[250px] box-border  rounded-lg browse-hover">
                <Image src={"https://picsum.photos/300/201"} alt="bed" className='object-contain duration-300 w-full rounded-lg browse-hover-img' width={200} height={200} />
                <p className='text-sm font-normal capitalize w-[85%] h-full text-[#fff4db] bg-[#ffffff22] rounded-lg duration-300 flex items-center justify-center p-3 browse-hover-p' >Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col items-center justify-between text-center w-[230px] transition-colors cursor-pointer max-h-[250px] box-border  rounded-lg browse-hover">
                <Image src={"https://picsum.photos/400/202"} alt="bed" className='object-contain duration-300 w-full rounded-lg browse-hover-img' width={200} height={200} />
                <p className='text-sm font-normal capitalize w-[85%] h-full text-[#fff4db] bg-[#ffffff22] rounded-lg duration-300 flex items-center justify-center p-3 browse-hover-p' >Lorem, ipsum dolor.</p>
            </div>
            
        </div>
    </div>
  )
}
