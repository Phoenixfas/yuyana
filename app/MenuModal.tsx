import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { toggleMenu } from './redux/slices/menuToggleSlice';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';


export default function MenuModal() {
    const menuToggle = useAppSelector((state) => state.menuToggle.value);
    const dispatch = useAppDispatch();
  return (
    <>
    {menuToggle && (
        <AnimatePresence>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .3}}} exit={{opacity: 0, transition: {duration: .3}}} className='w-full h-[100vh] fixed z-[1000] bg-[#00000077] flex items-center justify-center' >
                <div className='absolute w-full h-full' onClick={() => dispatch(toggleMenu())}></div>
                <div className='flex flex-col justify-center h-[420px] w-[350px] bg-gradient-to-r from-[#fea100] to-[#04AD39] text-[#fff4db] rounded-xl overflow-hidden z-[10000] p-4'>
                    {/* <div className='flex gap-3 items-center justify-between h-12 w-full mb-10'>
                        <FaSearch size={20} color={"#fff"} />
                        <input className='bg-transparent outline-none border-b border-b-[#fff] text-white w-full placeholder-[#ddb]' type="text" placeholder='Search for Locations, Packages, and Tour spots' />
                    </div> */}
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='flex flex-col items-center justify-center gap-4 text-3xl font-poppins font-bold'>
                            <Link onClick={() => dispatch(toggleMenu())} className='hover:text-[#fff4db77] duration-300' href={"/tours"}>Tours</Link>
                            <Link onClick={() => dispatch(toggleMenu())} className='hover:text-[#fff4db77] duration-300' href={"/packages"}>Packages</Link>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 text-xl font-poppins font-light'>
                            <Link onClick={() => dispatch(toggleMenu())} className='hover:text-[#fff4db77] duration-300' href={"/"}>Home</Link>
                            <Link onClick={() => dispatch(toggleMenu())} className='hover:text-[#fff4db77] duration-300' href={"/about"}>About Us</Link>
                            <Link onClick={() => dispatch(toggleMenu())} className='hover:text-[#fff4db77] duration-300' href={"/contact"}>Contact</Link>
                            <Link onClick={() => dispatch(toggleMenu())} className='hover:text-[#fff4db77] duration-300' href={"/blog"}>Blog</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )}
    </>
  )
}
