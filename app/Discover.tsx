'use client'
import Image from 'next/image'
import { useEffect } from 'react'


export default function Discover() {

    useEffect(() => {
        const image = document.querySelectorAll('.discover-img');
        const container: any = document.getElementById('discover-container');
    
        // move effect on image based on mouse movement inside the container
        container.addEventListener('mousemove', (e: any) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
            let yAxis = (container.clientHeight * 5 - e.pageY) / 30;
            image.forEach(img => {
                // set the --img-move-x variable in css
                // @ts-ignore
                img.style.setProperty('--img-move-x', xAxis + 'px');
                // @ts-ignore
                img.style.setProperty('--img-move-y', yAxis + 'px');
            })
        })
    
        // remove the event listener
        return () => {
            container.removeEventListener('mousemove', () => { })
        }
    
    }, [])


    return (
    <div id='discover-container' className='w-full h-[100vh] felx flex-col items-center text-[#FEA100] pt-20 px-28'>
        <div className='w-full flex flex-col items-center mb-20'>
            <h1 className='text-[2.5rem]'>DISCOVER OUR MULTITOUR PREMIUM PACKAGES</h1>
            <p className='text-[1.2rem] text-center max-w-[400px] font-poppins font-light'>Click on a package to have an Extraordinary Experience </p>
        </div>
        <div className='flex flex-wrap gap-10 w-full items-center justify-center'>


            <div className='felx flex-col hover:scale-110 discover duration-300 ease-in-out'>
                <div className='flex items-center justify-center discover-image duration-300 mb-6 bg-gradient-to-br from-[#04ac3c] to-[#FEA100] rounded-[50%] w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center max-w-[140px] max-h-[140px] bg-gradient-to-br from-[#04ac3c] to-[#FEA100] rounded-[50%] overflow-hidden relative' >
                        <Image src='https://picsum.photos/300' alt='discover' className='object-cover discover-img rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center font-poppins text-[#fff4db]'>Beauty Blooms</p>
            </div>
            <div className='felx flex-col hover:scale-110 discover duration-300 ease-in-out'>
                <div className='flex items-center justify-center discover-image duration-300 mb-6 bg-gradient-to-br from-[#04ac3c] to-[#FEA100] rounded-[50%] w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center max-w-[140px] max-h-[140px] bg-gradient-to-br from-[#04ac3c] to-[#FEA100] rounded-[50%] overflow-hidden relative' >
                        <Image src='https://picsum.photos/301' alt='discover' className='object-cover discover-img rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center font-poppins text-[#fff4db]'>Beauty Blooms</p>
            </div>
            <div className='felx flex-col hover:scale-110 discover duration-300 ease-in-out'>
                <div className='flex items-center justify-center discover-image duration-300 mb-6 bg-gradient-to-br from-[#04ac3c] to-[#FEA100] rounded-[50%] w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center max-w-[140px] max-h-[140px] bg-gradient-to-br from-[#04ac3c] to-[#FEA100] rounded-[50%] overflow-hidden relative' >
                        <Image src='https://picsum.photos/302' alt='discover' className='object-cover discover-img rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center font-poppins text-[#fff4db]'>Beauty Blooms</p>
            </div>
            <div className='felx flex-col hover:scale-110 discover duration-300 ease-in-out'>
                <div className='flex items-center justify-center discover-image duration-300 mb-6 bg-gradient-to-br from-[#04ac3c] to-[#FEA100] rounded-[50%] w-[250px] h-[250px]'>
                    <div className='flex items-center justify-center max-w-[140px] max-h-[140px] bg-gradient-to-br from-[#04ac3c] to-[#FEA100] rounded-[50%] overflow-hidden relative' >
                        <Image src='https://picsum.photos/303' alt='discover' className='object-cover discover-img rounded-[50%]' width={300} height={300} />
                    </div>
                </div>
                <p className='text-center font-poppins text-[#fff4db]'>Beauty Blooms</p>
            </div>


        </div>
    </div>
  )
}
