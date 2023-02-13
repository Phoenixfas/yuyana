import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { changeActiveBlog } from '../redux/slices/activeBlogSlice'

export default function MainBody() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [data, setData] = useState([])

    const dispatch = useAppDispatch()

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`
            }
        }
        const fetchData = async () => {
            try {
                const res = await fetch(`https://test.afriopia.com/blogs`, config)
                const data = await res.json()
                setData(data.all_articles)
                setLoading(false)
                console.log(data.all_articles)

            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
        
    }, [])

  return (
    <div className='w-full pt-20 flex flex-col items-center'>
        <div className="flex flex-wrap justify-center gap-10 max-w-[1000px]">
            {data.map((item: any) => (
                <Link href={`/blog/view`} key={item.id} onClick={() => dispatch(changeActiveBlog(item))}>
                    <div className="w-[270px] bg-[#fff4db] rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-[#fff4db88] duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <div className="flex-[1] w-full overflow-hidden">
                            <Image src={item.image} alt={item.title} className="w-full h-full object-cover" width={500} height={500} priority />
                        </div>
                        <div className="flex-[1] w-full flex flex-col items-center p-5 pt-0">
                            <div className="flex p-1 w-16 h-16 bg-[#FEA100] rounded-full relative translate-y-[-50%]">
                                <Image src={"/images/Logo.png"} alt={"yuyana"} className="w-full h-full object-contain bg-[#fff4db] rounded-full p-1" width={500} height={500} priority />
                            </div>
                            <div className="flex text-black text-sm text-center">{item.snippet}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}
