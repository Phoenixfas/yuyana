'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useAppDispatch } from '../redux/hooks'
import { changeActiveTour } from '../redux/slices/activeTourSlice'

export default function MasonryList({t}: {t: any}) {
    const tours = t
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     fetch('https://test.afriopia.com/tours')
    //         .then(res => res.json())
    //         .then(data => console.log(data.data))
    //         .catch(err => console.log(err))
    // }, [])


  return (
    <div className='tours w-full px-28'>
        <h1 className='text-2xl text-slate-600 font-bold mb-10'>Browse</h1>
        {/* masonry grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1000: 4}} >
            <Masonry>
                {tours.length !== 0 && tours.map((tour: any, index: any) => (
                    <Link href={`/tours/view`} key={index} onClick={() => dispatch(changeActiveTour(tour))}>
                        <div className='hovanimcon brick w-[250px] mb-10  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                            <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>{tour.name}</div>
                            <Image className='w-full max-h-[500px] object-cover' src={tour.image} alt={tour.name} width={500} height={500} quality={100} />
                        </div>
                    </Link>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
