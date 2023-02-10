'use client'

import { ParticlesContainer } from "../ParticlesContainer"
import Testimonials from "../Testimonials"
import HeroSection from "./HeroSection"
import Team from "./Team"
import WhyUs from "./WhyUs"

// import Test from "./Test"

function About() {
  return (
    <div className=" min-h-screen text-[#fff4db]">
      <ParticlesContainer />
      <HeroSection />
      <Team />
      <WhyUs />
      <Testimonials />
      {/* <Test /> */}
    </div>
  )
}

export default About