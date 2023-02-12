import React from 'react'
import Featured from './Featured'
import ToursPaginator from './ToursPaginator'

export default function Tours() {
  return (
    <>
        <div className=" h-52 w-full relative flex justify-center items-end">
            <div className='absolute w-[80%] h-[60px] border-[5px] border-[#fff4db] rounded-md bg-yellow-500 translate-y-[50%] '></div>
        </div>


        <div className='py-12  pt-32'>
            
            <div className='w-full flex flex-col'>
                <Featured />
                <ToursPaginator />
            </div>

        </div>
    </>
  )
}
