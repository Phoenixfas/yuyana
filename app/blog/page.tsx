'use client'

import React from 'react'
import { ParticlesContainer } from '../ParticlesContainer'
import MainBody from './MainBody'
import TopSection from './TopSection'

export default function Blog() {
  return (
    <div className='min-h-[100vh] w-full text-[#fff4db]'>

        <ParticlesContainer />
        <TopSection />
        <MainBody />
    </div>
  )
}
