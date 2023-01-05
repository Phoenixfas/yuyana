import React from 'react'
import { useAppSelector, useAppDispatch } from './redux/hooks'
import { toggleLocation } from './redux/slices/locationToggleSlice'
import { changeLocation } from './redux/slices/locationSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { MdLocationOn } from 'react-icons/md'

export default function LgModal() {
    const dispatch = useAppDispatch()
    const locationToggle = useAppSelector(state => state.locationToggle.value)
    // console.log(locationToggle)

  return (
    <>
    {locationToggle && (
        <AnimatePresence>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .3}}} exit={{opacity: 0, transition: {duration: .3}}} className='w-full h-[100vh] fixed z-[1000] bg-[#00000099] flex items-center justify-center' >
                <div className='absolute w-full h-full' onClick={() => dispatch(toggleLocation())}></div>
                <div className='relative w-[400px] flex flex-col gap-5 justify-between bg-gradient-to-b from-[#FEA100] to-[#04AD39] rounded-xl overflow-hidden z-[10000] p-8 font-poppins'>
                    <MdLocationOn className='absolute right-[-20px] bottom-[0px] ' size={150} color={'#ffffff44'} />
                    <div className='flex gap-3 items-center justify-center h-12 w-full mb-3 text-center text-4xl font-bold z-[9999] text-white'>
                        Choose Location
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 w-full font-light text-white z-[9999]'>
                        <div className='border border-white h-[50px] w-full cursor-pointer hover:rounded-lg duration-300 hover:bg-white hover:text-black text-center flex items-center justify-center' onClick={() => {
                            dispatch(changeLocation("Local"))
                            dispatch(toggleLocation())
                            window.location.reload()
                        }}>ETHIOPIA</div>
                        <div className='border border-white h-[50px] w-full cursor-pointer hover:rounded-lg duration-300 hover:bg-white hover:text-black text-center flex items-center justify-center' onClick={() => {
                            dispatch(changeLocation("International"))
                            dispatch(toggleLocation())
                            window.location.reload()
                        }}>INTERNATIONAL</div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )}
    </>
  )
}
