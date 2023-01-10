import React from 'react'
import Featured from './Featured'
import MasonryList from './MasonryList'

export default function Tours() {
  return (
    <>
        <div className="bg-slate-900 h-52 w-full relative flex justify-center items-end">
            <div className='absolute w-[80%] h-[60px] border-[5px] border-[#fff4db] rounded-md bg-yellow-500 translate-y-[50%] '></div>
        </div>


        <div className='py-12 px-28 pt-32'>
            <h1 className='text-3xl font-bold mb-10'>Featured Places</h1>
            <div className='grid grid-cols-4  gap-10'>

            <div className='w-full col-[1/4] '>
                <Featured />
                <MasonryList />
            </div>

            <div className='bg-slate-300 w-full h-[500px] rounded-md'></div>

            </div>
        </div>
    </>
  )
}
