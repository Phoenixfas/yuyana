'use client'
import React from 'react'
import { ParticlesContainer } from '../ParticlesContainer'
import Grid from './Grid'

export default function Gallery() {
  return (
    <div className="w-full overflow-hidden flex pt-20">
        <ParticlesContainer />
        <Grid />
    </div>
  )
}
