'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'


export default function ImageSection() {


  const [sectionVisible, setSectionVisible] = useState(false)
    const [scrollVer, setScrollVer] = useState(0)
    
    useEffect(() => {


        ////////////////////////////////////////////////
        const section = document.getElementById("image-sec-1") as HTMLElement;
        // Get Element height
        const secHeight = section.clientHeight;

        const ElementInView = () => {
        // get window height
        const windowHeight = window.innerHeight;

        // get number of pixels that the document is scrolled
        const scrollY = window.scrollY || window.pageYOffset;
        setScrollVer(scrollY)

        // get current scroll position (distance from the top of the page to the bottom of the current viewport)
        const scrollPosition = scrollY + windowHeight;

        // get element position (distance from the top of the page to the bottom of the element)
        const sectionPosition = section.getBoundingClientRect().top + scrollY + secHeight;

        // is scroll position greater than element position? (is element in view?)
        if (scrollPosition > sectionPosition) {
          return true;
        }
        
        return false;
      }

      // animateEntrance element when it is in view
      const animateEntrance = () => {
        if(ElementInView()){
          setSectionVisible(true)
        }
      }

      // listen for scroll event and call animateEntrance function
      document.addEventListener('scroll', animateEntrance);

      //remove event listener
      return () => {
        document.removeEventListener('scroll', animateEntrance);
      }


    }, [scrollVer]);



  return (
    <div className='w-full h-[100vh] relative'>
      <ParallaxProvider>
        <div className="w-full h-full bg-[#131316] relative overflow-hidden">
          <Parallax speed={-15} className="w-full h-full relative">
            <Image className="w-full h-full object-cover brightness-50 " alt='starfall' src={"/images/web/Addis.jpg"} fill />
          </Parallax>
        </div>
        <div className="flex flex-col min-w-[900px] items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-1 justify-center text-white m-auto p-10">
          <Parallax speed={10} className="flex flex-col items-center" id='image-sec-1'>
            <p className={`text-[#ffffff99] text-sm font-light ${sectionVisible ? "enter" : "hidden"}`} >TRAVELLING HOTSPOTS</p>
            <h1 className={`text-[5rem] leading-[5.3rem] text-center font-normal font-serif mb-8 mt-5 ${sectionVisible ? "enter-1" : "hidden"}`} >Addis At Night</h1>
            {/* <h5 className='text-xl font-serif mb-10'>The perfect gifts to indulge yourself, your interior, and others</h5> */}
            <Link href="/" className={`text-white py-2 border-b leading-[0.5rem] border-white ${sectionVisible ? "enter-3" : "hidden"}`} >Book an Adventure</Link>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  )
}
