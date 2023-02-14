'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useAppDispatch } from '../redux/hooks'
import { changeActivePackage } from '../redux/slices/activePackageSlice'

export default function MasonryList({t}: {t: any}) {
    const packages = t
    const dispatch = useAppDispatch()
    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('https://test.afriopia.com/tours')
            .then(res => res.json())
            .then(data => setTours(data.data))
            .catch(err => console.log(err))
    }, [])

    const getImage = (id: any) => {
        const tour: any = tours.find((tour: any) => tour._id === id)
        if (tour) {
            return tour.image
        }else {
            return '/images/Logo.png'
        }
    }
    


  return (
    <div className='tours w-full px-28'>
        <h1 className='text-2xl text-slate-600 font-bold mb-10'>Browse</h1>
        {/* masonry grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 1, 900: 2, 1000: 3}} >
            <Masonry>
                {packages.length !== 0 && packages.map((pkg: any, index: any) => (
                    <Link href={`/packages/view`} key={index} onClick={() => dispatch(changeActivePackage(pkg))}>
                        <div className='hovanimcon brick w-[300px] mb-10  hover:shadow-[0_10px_15px_5px_rgb(15,23,42,0.6)] hover:-translate-y-3  rounded-2xl duration-300 cursor-pointer overflow-hidden relative'>
                            <div className='absolute w-full h-full p-4 bg-[#00000088] text-white text-xl hovanim flex items-center'>{pkg.name}</div>
                            {pkg.tour_ids.map((id: any, index: any) => (
                                <Image key={index} className='flex-[1] max-h-[100px] object-cover' src={ getImage(id) } alt={pkg.name} width={500} height={500} quality={100} />
                            ))}
                        </div>
                    </Link>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
