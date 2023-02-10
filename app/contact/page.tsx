'use client'
import React from 'react'
import { ParticlesContainer } from '../ParticlesContainer'
import Contacts from './Contacts'
import HeroSection from './HeroSection'
import Map from './Map'
import Message from './Message'

export default function Contact() {
  return (
    <div className='min-h-screen text-[#fff4db]'>
      <ParticlesContainer />
      <HeroSection />
      <Contacts />
      <Map />
      <Message />
    </div>
  )
}
