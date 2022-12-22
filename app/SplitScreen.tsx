'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useState, useEffect} from 'react'

export default function SplitScreen() {

  const [sectionVisible, setSectionVisible] = useState(false)
    const [scrollVer, setScrollVer] = useState(0)
    
    useEffect(() => {


        ////////////////////////////////////////////////
        const section = document.getElementById("image-sec-2") as HTMLElement;
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
    <div className='w-full h-[100vh] flex'>
        <div className="flex-[1] flex px-14 py-32 items-center justify-center text-[#1F1F1F] bg-[#E3D9C6]">
            <div className='flex flex-col' id='image-sec-2'>
                <p className={`text-sm ${sectionVisible ? "enter-h" : "hidden"}`}>Blogs</p>
                <h1 className={`text-[5rem] leading-[5.3rem] max-w-fit font-bold font-serif my-8 enter-h ${sectionVisible ? "enter-h-1" : "hidden"}`}>Coffee. <br/> Have a taste from the originals </h1>
                <Link href="/" className={`py-2 max-w-fit border-b leading-[0.5rem] border-[#1F1F1F] ${sectionVisible ? "enter-h-3" : "hidden"}`}>Read the story</Link>
            </div>
        </div>
        <div className="flex-[1] min-w-[50%] relative">
            <Image className="w-full h-full object-cover" src={"/images/web/coffee.jpg"} alt={"phone"} fill />
        </div>
    </div>
  )
}
