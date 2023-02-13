'use client'

import React from 'react'
import { ParticlesContainer } from '../ParticlesContainer'
import Packages from './Packages'

export default function page() {
  return (
    <div className='min-h-[100vh] w-full text-[#fff4db]'>

      <ParticlesContainer />
      <Packages />


    </div>
  )
}
