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
    <div className='w-full h-[100vh] flex bg-[#fff4db] text-slate-900'>
        <div className="flex-[1] flex flex-col gap-24 w-1/2 h-full py-[150px] pl-10">
            <div className="flex flex-wrap gap-y-5 w-full text-2xl font-poppins">
                <Link href="/" className='w-1/2'> Store Locator </Link>
                <Link href="/" className='w-1/2'> Newsletter </Link>
                <Link href="/" className='w-1/2'> Material Library </Link>
                <Link href="/" className='w-1/2'> Press Area </Link>
                <Link href="/" className='w-1/2'> Shipping & Returns </Link>
                <Link href="/" className='w-1/2'> Jobs </Link>
                <Link href="/" className='w-1/2'> FAQs </Link>
            </div>
            <div className='flex gap-10'>
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
        <div className="flex-[1] min-w-[50%] w-1/2 h-full flex flex-col items-end justify-between pb-[150px] pt-10 pr-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-[50%] bg-[#FFC322] text-white">
                <button onClick={scrollToTop} >
                    <FaArrowUp size={30} />
                </button>
            </div>
            <div className="flex flex-col text-end text-slate-900 font-light font-poppins">
                <p>Designed and Developed by <Link href={"https://afriopia.com"} className='text-[#04AD39]'>Afriopia Unified Systems</Link></p>
                <p>&#169;2023 YUYANA</p>
            </div>
        </div>
    </div>
  )
}

// #FEA100
// #04AD39