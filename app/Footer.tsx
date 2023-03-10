'use client'

import Link from 'next/link'
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaTelegramPlane, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
  return (
    <div className='footer w-full h-[100vh] flex text-[#131316]'>
        <div className="flex-[1] mb-5 flex flex-col gap-24 h-full py-[150px] pl-10">
            <div className="flex flex-wrap gap-20 w-full text-2xl font-poppins">
                <div className="flex flex-col gap-y-5">
                    <Link href="/" className=''> Home </Link>
                    <Link href="/about" className=''> About Us </Link>
                    <Link href="/contact" className=''> Contact </Link>
                    <Link href="/blog" className=''> Blog </Link>
                </div>
                <div className="flex flex-col gap-y-5">
                    <Link href="/tours" className=''> Tours </Link>
                    <Link href="/packages" className=''> Packages </Link>
                </div>
            </div>
            <div className='flex flex-wrap gap-10'>
                <Link href="/">
                    <FaInstagram size={25} />
                </Link>
                <Link href="/">
                    <FaFacebook size={25} />
                </Link>
                <Link href="/">
                    <FaLinkedin size={25} />
                </Link>
                <Link href="/">
                    <FaWhatsapp size={25} />
                </Link>
                <Link href="/">
                    <FaTelegramPlane size={25} />
                </Link>
            </div>
        </div>
        <div className="flex-[1] min-w-[50%] h-full flex flex-col items-end justify-between pb-[150px] pt-10 pr-10">
            <div className="flex items-center justify-center w-10 h-10 text-[#131316]">
                <button onClick={scrollToTop} >
                    <FaArrowUp size={30} />
                </button>
            </div>
            <div className="flex flex-col text-end font-light font-poppins">
                <p>Designed and Developed by <Link href={"https://afriopia.com"} className='text-[#04AD39]'>Afriopia Unified Systems</Link></p>
                <p>&#169;2023 YUYANA</p>
            </div>
        </div>
    </div>
  )
}

// #FEA100
// #04AD39