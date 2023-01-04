'use client'

import Browse from "./Browse"
import Discover from "./Discover"
import Hero from "./Hero"
import ImageSection from "./ImageSection"
import ImageSection2 from "./ImageSection2"
import ImageSection3 from "./ImageSection3"
import SplitScreen from "./SplitScreen"
import 
SplitScreen2 from "./SplitScreen2"
// import VideoSection2 from "./VideoSection2"


function Home() {

  return (
      <div>
        <Hero />
        <Browse />
        {/* <VideoSection2 /> */}
        <ImageSection />
        <SplitScreen />
        <ImageSection2 />
        <SplitScreen2 />
        <Discover />
        <ImageSection3 />
      </div>
  )
}

export default Home