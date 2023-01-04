import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { increment, decrement, incrementByAmount } from "./redux/slices/counterSlice"
import { useAppSelector, useAppDispatch } from './redux/hooks'

export default function ImageSection3() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className='w-full h-[100vh] relative'>
        <div className="w-full h-full bg-[#131316] relative">
            <Image className="w-full h-full object-cover brightness-50 " alt='starfall' src={"/images/web/Chebra-Churchura.jpg"} fill />

        </div>
        <div className="flex flex-col min-w-[900px] items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-1 justify-center text-white m-auto p-10">
            <p className='text-[#ffffff99] text-sm font-light'>TRAVELLING HOTSPOTS</p>
            <h1 className='text-[5rem] leading-[5.3rem] text-center font-normal font-serif mb-8 mt-5'>Chebra Churchura</h1>
            {/* <h5 className='text-xl font-serif mb-10'>The perfect gifts to indulge yourself, your interior, and others</h5> */}
            <Link href="/" className='text-white py-2 border-b leading-[0.5rem] border-white'>Book an Adventure</Link>
            
          <div className="h-[30vh] w-full bg-white text-black">
            <span>{ count }</span>
            <br />
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
          </div>
        </div>
    </div>
  )
}
