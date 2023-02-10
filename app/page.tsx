'use client'

import Browse from "./Browse"
import Discover from "./Discover"
import Everything from "./Everything"
import Hero from "./Hero"
import ImageSection from "./ImageSection"
import ImageSection2 from "./ImageSection2"
import ImageSection3 from "./ImageSection3"
import { ParticlesContainer } from "./ParticlesContainer"
import SplitScreen from "./SplitScreen"
import 
SplitScreen2 from "./SplitScreen2"
import Testimonials from "./Testimonials"
import VideoSection2 from "./VideoSection2"


function Home() {

  return (
      <div>
        <ParticlesContainer />
        <Hero />
        <Browse />
        <SplitScreen />
        <VideoSection2 />
        <Everything />
        <ImageSection />
        <Discover />
        <ImageSection2 />
        <Testimonials />
        <SplitScreen2 />
        {/* <ImageSection3 /> */}
      </div>
  )
}

export default Home