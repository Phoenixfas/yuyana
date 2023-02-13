import React from 'react'
import Featured from './Featured'
import Blog from './Blog'

export default function View() {
  return (
    <div className='blog w-full min-h-screen pt-36  gap-20 text-[#fff4db] overflow-hidden flex justify-center'>
        <Blog />
        <Featured />
    </div>
  )
}
