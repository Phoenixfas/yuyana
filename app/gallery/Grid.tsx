import Image from 'next/image'
import React from 'react'
import gallery from '../../data/gallery'
import { useAppDispatch } from '../redux/hooks'
import { toggleGallery } from '../redux/slices/galleryToggleSlice'
import { changeActiveImage } from '../redux/slices/activeImageSlice'

export default function Grid() {
    const dispatch = useAppDispatch()
  return (
    <div className="w-full py-20 px-5 flex items-center justify-center">
        <div className="w-full flex flex-wrap gap-10 justify-center">
            {gallery.map((image, index) => (
                <div key={index} className="p-3 w-[250px] h-[250px] bg-slate-500 rounded-lg hover:scale-105 duration-300 cursor-pointer" onClick={() => {
                    dispatch(toggleGallery())
                    dispatch(changeActiveImage(image))
                }}>
                    <Image className='w-full h-full object-fit' src={image.src} alt={image.title} width={500} height={500} quality={100} />
                </div>
            ))}
        </div>
    </div>
  )
}
