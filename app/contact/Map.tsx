'use client'
import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function Map() {
  return (
    <div className="contact-map h-[400px] w-full overflow-hidden">
        <ParallaxProvider>
            <Parallax speed={-20} className="w-full h-full relative">
                <div className="relative text-right w-full h-full">
                    <div className="overflow-hidden h-full w-full">
                    <iframe
                        className="gmap_iframe"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?width=650&amp;height=242&amp;hl=en&amp;q=9.000358217387392, 38.7879154142762&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                    </div>
                </div>
            </Parallax>
        </ParallaxProvider>
    </div>
  )
}
