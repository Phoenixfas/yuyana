'use client'
import React from 'react'
import emailjs from "@emailjs/browser";
import Image from 'next/image'
import { useEffect, useState, useRef} from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { motion, useInView, useAnimationControls } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player';

const variants1 = {
    visible: { opacity: 1, x: 0, transition: { duration: .3, } },
    hidden: { opacity: 0, x: -200, transition: { duration: .3, } }
}

const variants2 = {
    visible: { opacity: 1, x: 0, transition: { duration: .3, delay: .3  } },
    hidden: { opacity: 0, x: 200, transition: { duration: .3, delay: .3 } }
}

const variants3 = {
    visible: { opacity: 1, y: 0, transition: { duration: .3 } },
    hidden: { opacity: 0, y: 100, transition: { duration: .3 } }
}

export default function Message() {
    const [done, setDone] = useState(false);
    const [user_name, setName] = useState("");
    const [user_email, setEmail] = useState("");
    const [user_subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: any) => {
        
        e.preventDefault();
        // console.log("message sent")
        setTimeout(() => setDone(true), 2000);
        setTimeout(() => {
            setDone(false)
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
        }, 7000);
    };


    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "0px 0px -300px 0px", once: false})
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
      }, [isInView]);


  return (
    <div ref={ref} className="w-full mt-32 overflow-hidden flex flex-col gap-20 items-center">
        {/* <h1 className='text-5xl font-bold text-[#04ac3c] tracking-[.5rem]'>SEND A MESSAGE</h1> */}
        <motion.h1 variants={variants3} animate={controls} className='text-5xl font-bold text-[#FEA100] tracking-[.5rem]'>SEND A MESSAGE</motion.h1>
        <div className="flex flex-wrap w-3/4">
            <motion.div variants={variants1} animate={controls} className="flex-[1] flex items-center justify-center">
                <div className='w-[500px] h-[500px] relative overflow-hidden'>
                    <Player src={"https://assets1.lottiefiles.com/packages/lf20_zj3qnsfs.json"}  background="transparent"  speed={1}  style={{ width: '100%', height: '100%' }}  loop  autoplay />
                </div>
            </motion.div>
            <motion.div variants={variants2} animate={controls} className='flex-[1] flex-col'>
                {done && (
                    <p className="text-sm p-3 rounded-lg bg-yellow-400 text-[#fff4db] mb-10 text-center">Your message has been sent. Thank you!</p>
                )}
                <form className="w-full flex flex-col gap-7 text-[#131316]" onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label className='text-md font-light text-[#fff4db]'>Name</label>
                        <input value={user_name} onChange={(e) => setName(e.target.value)} className='text-sm bg-[#fff4db] p-3 outline-none border-none w-full rounded-md' required type="text" name="user_name" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-md font-light text-[#fff4db]'>Email</label>
                        <input value={user_email} onChange={(e) => setEmail(e.target.value)} className='text-sm bg-[#fff4db] p-3 outline-none border-none w-full rounded-md' required type="email" name="user_email"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-md font-light text-[#fff4db]'>Subject</label>
                        <input value={user_subject} onChange={(e) => setSubject(e.target.value)} className='text-sm bg-[#fff4db] p-3 outline-none border-none w-full rounded-md' required type="text" name="user_subject"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-md font-light text-[#fff4db]'>Message</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='text-sm bg-[#fff4db] p-3 outline-none border-none w-full rounded-md' required name="message"></textarea>
                    </div>
                    <button type='submit' className='bg-[#FEA100] text-[#fff4db] rounded-md py-3 px-10 w-fit text-xl font-bold'>Send</button>
                </form>
            </motion.div>
        </div>

    </div>
  )
}
