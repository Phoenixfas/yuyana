'use client'

import React from 'react'
import { ParticlesContainer } from '../../ParticlesContainer'
import BookTour from './BookTour'
import Details from './Details'
import MainBody from './MainBody'
import TopSection from './TopSection'

export default function page() {
  return (
    <div className='min-h-[100vh] w-full text-[#131316]'>

        <ParticlesContainer />
        <TopSection />
        <Details />
        <MainBody />
        <BookTour />
    </div>
  )
}
