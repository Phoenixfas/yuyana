import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeActiveTour } from '../../redux/slices/activeTourSlice'

export default function MainBody() {
    const pkg = useAppSelector(state => state.activePackage)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [data, setData] = useState([])

    const dispatch = useAppDispatch()

    useEffect(() => {

        
        const fetchData = async () => {
            try {
                const res = await fetch(`https://test.afriopia.com/tours`)
                const data = await res.json()
                setData(data.data)
                setLoading(false)

            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
        
    }, [])

    const getTour =  (id: any) => {
        const tour: any = data.find((tour: any) => tour._id === id)
        if (tour) {
            return tour
        }else {
            return {
                name: 'Yuyana Tours',
                image: '/images/Logo.png'
            }
        }
    }

    if (loading) return <div className='w-full h-52 flex items-center justify-center'><div className="w-10 h-10 rounded-full border-4 border-[#FEA100] border-t-[transparent] animate-spin"></div></div>
    if (error) return <div className='w-full flex items-center justify-center'>{error}</div>

  return (
    <div className='w-full pt-20 flex flex-col items-center'>
        <div className="flex flex-wrap justify-center gap-10 max-w-[1000px]">
            {pkg.tour_ids.map((item: any, index: any) => (
                <Link href={`/tours/view`} key={index} onClick={() => dispatch(changeActiveTour(getTour(item)))}>
                    <div className="relative w-[350px] rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-[#fff4db88] duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <div className='absolute flex items-center justify-center p-3 w-full h-full bg-[#00000088] text-center z-50 text-white font-light opacity-0  hover:opacity-100 duration-500'>
                            <p>{getTour(item).name}</p>
                        </div>
                        <Image src={getTour(item).image} alt={getTour(item).name} className="relative w-full h-full object-cover" width={500} height={500} priority />
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}
