'use client'
import React from 'react'
import { ParticlesContainer } from '../../ParticlesContainer'
import MiddleSection from './MiddleSection'
import HeroSection from './HeroSection'
import BottomSection from './BottomSection'
import BookTour from './BookTour'

export default function View() {
  return (
    <div className='min-h-[100vh] w-full text-[#131316]'>
      <ParticlesContainer />
      <HeroSection />
      <MiddleSection />
      <BottomSection />
      <BookTour />
    </div>
  )
}
