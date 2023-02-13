import React from 'react'

export default function Filter() {
  return (
    <div className='absolute min-h-[60px] border-[5px] border-[#fff4db] p-2 rounded-md bg-[#FEA100] translate-y-[50%] '>
        <form action="">
            <div className='flex flex-wrap justify-center items-center gap-5'>
                <div className='flex items-center'>
                    <select name="location" id="location" className='py-2 px-5 text-xl bg-transparent outline-none text-[#fff4db] border border-[#fff4db] rounded-md'>
                        <option className='text-black'>Location</option>
                        <option className='text-black' value="local">Local</option>
                        <option className='text-black' value="international">International</option>
                    </select>
                </div>
                <div className='flex items-center'>
                    <select name="price" id="price" className='py-2 px-5 text-xl bg-transparent outline-none text-[#fff4db] border border-[#fff4db] rounded-md'>
                        <option className='text-black'>Max Budget</option>
                        <option className='text-black' value={400}>$400</option>
                        <option className='text-black' value={600}>$600</option>
                        <option className='text-black' value={800}>$800</option>
                        <option className='text-black' value={1000}>$1000</option>
                        <option className='text-black' value={1500}>$1500</option>
                    </select>
                </div>

                <button type='submit' className='px-5 py-2 rounded-md bg-[#fff4db] text-[#FEA100]'>Apply</button>
            </div>
        </form>
    </div>
  )
}
