'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { changeActiveTour } from '../../redux/slices/activeTourSlice'

export default function Featured() {
    const dispatch = useAppDispatch()
    const [data, setData] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const res = await fetch(`https://test.afriopia.com/tours`)
                const data = await res.json()
                setData(data.data.slice(0, 4))
            } catch (error: any) {
                console.log(error)
            }
        }

        fetchData()
        
    }, [])


  return (
    <div className="max-w-[300px] flex flex-col px-5 py-10 rounded-xl bg-[#fff4db33] h-fit">
        <h1 className='text-3xl text-center font-bold mb-10'>Featured Places</h1>
        <div className='w-full flex flex-col items-center gap-5'>
            {data.map((item: any, index: any) => (
                <Link key={index} href={"/tours/view"} className='min-w-[200px] h-[100px] overflow-hidden rounded-md relative cursor-pointer' onClick={() => dispatch(changeActiveTour(item))}>
                    <div className='absolute flex items-center justify-center p-3 w-full h-full bg-[#00000055] z-50 text-white font-light hover:opacity-0 opacity-100 duration-500'>
                        <p className='text-sm text-center'>{item.name}</p>
                    </div>
                    <Image className='w-full h-full object-cover relative' src={item.image} alt={item.name} width={100} height={100} quality={100} />
                </Link>
            ))}
        </div>
    </div>
  )
}
