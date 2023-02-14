'use client'
import Image from 'next/image'
import React from 'react'
import { useAppSelector } from '../../redux/hooks'

export default function Blog() {
    const activeBlog = useAppSelector(state => state.activeBlog)
  return (
    <div className='flex-grow flex flex-col max-w-[800px]'>
        <h1 className='text-5xl font-bold mb-10'>{activeBlog.title}</h1>
        <p className='text-xs text-[#04ac3c]'>{new Date(parseInt(activeBlog.updatedAt)).toDateString()}</p>
        <Image src={activeBlog.image} alt={activeBlog.title} width={800} height={400} className="rounded-2xl mt-5 mb-10 w-full object-contain h-auto" />
        <p className='mb-10 text-lg'>{activeBlog.snippet}</p>
        <div className="blog-modal-sanitized" dangerouslySetInnerHTML={{ __html: activeBlog.sanitizedHtml }} ></div>
    </div>
  )
}
