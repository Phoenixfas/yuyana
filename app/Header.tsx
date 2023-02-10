import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaMicrophoneAlt, FaSearch, FaImages, FaGlobe } from "react-icons/fa"
import { useAppDispatch } from './redux/hooks'
import { toggleLocation } from './redux/slices/locationToggleSlice'

export default function Header() {
  const dispatch = useAppDispatch()
  const [searchActive, setSearchActive] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState<any>([])
  const [filteredData, setFilteredData] = useState([]);


  const onChange = (e: any) => {
    const keyword = e.target.value;
        // const newFilter = data.articles.filter((article: any) => {
        //   return article.title.toLowerCase().includes(keyword.toLowerCase())
        // })
        if(keyword === "") {
          setFilteredData([])
          setSearchText("")
        }

        setFilteredData( data.data.filter((tour: any) => tour.name.toLowerCase().includes(keyword.toLowerCase())))
    setSearchText(keyword)
  }
  const checkEmpty = (e: any) => {
    if(e.target.value === "") {
        setFilteredData([])
        setSearchText("")
    }
}

const clearSearch = () => {
  setFilteredData([])
  setSearchText("")
}



  // hide and show the header based on the scroll direction
  useEffect(() => {
    var lastScrollTop = 0
    const header: HTMLElement|any = document.getElementById('header')
    window.addEventListener("scroll", function(){
      var st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        header.style.transform = 'translateY(-100%)'
      } else {
        header.style.transform = 'translateY(0%)'
      }
      lastScrollTop = st;
    })

    const config = {
      headers: {
          'Content-Type': 'application/json'
      }
    }
    const fetchData = async () => {
        const res = await fetch(`https://test.afriopia.com/tours`, config)
        const data = await res.json()
        setData(data)
    }
    fetchData()

    return removeEventListener('scroll', () => {})
  }, [])

    
  // console.log(searchText)

  return (
    <div id='header' className={`header flex sm:flex-col flex-wrap items-center h-[90px] w-full fixed top-0 left-0 z-[10000] text-white duration-500`}>
      <div className="flex w-1/3 items-center h-full p-10">
        <Link href="/gallery">
          <FaImages className="text-2xl" color='#fff'/>
        </Link>
      </div>
      <div className="flex w-1/3 items-center justify-center h-full py-10 text-[2rem] font-medium tracking-[0.6rem] font-poppins">
        <Link href="/">
          <Image src={"/images/Logo.png"} alt={"Logo"} className='object-contain w-[100px] h-[70px]' width={200} height={100} />
        </Link>
      </div>
      <div className="header-search flex w-1/3 items-center justify-end gap-10 h-full p-10">
        <div className='flex items-center gap-5'>
          <div className={`${searchActive ? 'scale-100' : 'scale-0'} duration-300`}>
            <input className='min-w-[250px] outline-none border-none rounded-full placeholder:text-sm px-3 py-2 text-black text-sm' placeholder='Search here' type="text" name='search' value={searchText} onChange={onChange} onKeyDown={checkEmpty} />
            {filteredData.length != 0 && (
                <div className="absolute bottom-0 w-full translate-y-[110%] bg-white text-black shadow-xl rounded-xl p-3" >
                  {data && filteredData.slice(0, 10).map((tour: any, index: any) => (
                      <div className='px-5 py-3 duration-300 hover:bg-gray-100 hover:shadow-md hover:rounded-xl cursor-pointer' key={index}>
                          <p id='blog-search' onClick={() => {
                              clearSearch()
                              }} 
                          >
                              {tour.name.charAt(0).toUpperCase() + tour.name.slice(1)}
                          </p>
                      </div>
                  ))}
                </div>
            )}
          </div>
          <Link href="/" onClick={() => setSearchActive(!searchActive)}>
            <FaSearch className="text-2xl" color='#fff'/>
          </Link>
        </div>
        {/* <Link href="/">
          <FaImages className="text-2xl" color='#fff'/>
        </Link> */}
      </div>
    </div>
  )
}
