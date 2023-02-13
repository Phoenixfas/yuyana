import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch } from '../redux/hooks'
import { changeActivePackage } from '../redux/slices/activePackageSlice'

export default function Featured() {
    const dispatch = useAppDispatch()
    const [data, setData] = useState([])
    const [t, setT] = useState([])

    useEffect(() => {
        const fetchTour = async () => {
            const res = await fetch(`https://test.afriopia.com/tours`)
            const t = await res.json()
            setT(t.data)
        }
        
        const fetchData = async () => {
            try {
                const res = await fetch(`https://test.afriopia.com/packages`)
                const data = await res.json()
                setData(data.data.slice(0, 4))
            } catch (error: any) {
                console.log(error)
            }
        }

        fetchTour()
        fetchData()
        
    }, [])

    const getTour = (id: any) => {
        const tour: any = t.find((tour: any) => tour._id === id)
        if (tour) {
            return tour.image
        }else {
            return '/images/Logo.png'
        }
    }

  return (
    <div className="tours-featuredCon w-full px-28 flex flex-col">
        <h1 className='tours-featured-h1 text-3xl font-bold mb-10'>Featured Packages</h1>
        <div className='tours-featured w-full flex flex-wrap items-center justify-start gap-5 mb-16'>
            {data.map((item: any, index: any) => (
                <Link key={index} href={"/packages/view"} className='w-[200px] h-[200px] overflow-hidden rounded-md relative cursor-pointer'  onClick={() => dispatch(changeActivePackage(item))}>
                    <div className='absolute flex items-center p-3 w-full h-full bg-[#00000088] z-50 text-white font-light opacity-0  hover:opacity-100 duration-500'>
                        <p>{item.name}</p>
                    </div>
                    <Image className='w-full h-full object-cover relative' src={getTour(item.tour_ids[0])} alt={'Logo'} width={100} height={100} quality={100} />
                </Link>
            ))}
        </div>
    </div>
  )
}
