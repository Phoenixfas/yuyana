'use client'

import React from 'react'
import { ParticlesContainer } from '../../ParticlesContainer'
import BookTour from './BookTour'
import Details from './Details'
import MainBody from './MainBody'
import TopSection from './TopSection'

export default function page() {
  return (
    <div className='min-h-[100vh] w-full text-[#fff4db]'>

        <ParticlesContainer />
        <TopSection />
        <Details />
        <MainBody />
        <BookTour />
    </div>
  )
}
