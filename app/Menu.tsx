import React from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { toggleMenu } from './redux/slices/menuToggleSlice'

export default function Menu() {
  const menuToggle = useAppSelector((state) => state.menuToggle.value)
  const dispatch = useAppDispatch()

  return (
    <div className={`fixed left-1/2 bottom-4 translate-x-[-50%] flex items-center justify-center w-[95px] h-[95px] rounded-[50%] bg-[url(/images/web/Menu.jpg)] bg-no-repeat bg-cover z-[99999] text-[#fff4db] text-lg cursor-pointer transition-opacity duration-300 ${ menuToggle ? "opacity-0" : "opacity-100" }`} onClick={() => dispatch(toggleMenu())}></div>
  )
}

// border-dashed border-2 border-[#ffffff88]