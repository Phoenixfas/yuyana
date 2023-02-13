'use client'
import React,{useEffect, useState} from 'react'
import ReactPaginate from "react-paginate";
import MasonryList from './MasonryList';
import tours from '../../data/tours'
// import RegisterersLoading from './RegistersLoading';
// import { useAppSelector } from '../../redux/hooks';


interface PackagePaginatorProps {
    d: any
}

export default function RegistererPaginator({path}: any) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [data, setData] = useState([])

    // const token = useAppSelector((state) => state.login.admin)

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`
            }
        }
        const fetchData = async () => {
            try {
                const res = await fetch(`https://test.afriopia.com/packages`, config)
                const data = await res.json()
                setData(data.data)
                setLoading(false)
                // console.log(data.data)

            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
        
    }, [])


    if (loading) return <div className='w-full flex items-center justify-center'><div className="w-10 h-10 rounded-full border-4 border-[#FEA100] border-t-[transparent] animate-spin"></div></div>
    if (error) return <div>{error}</div>
    
    return (
        <Paginator d={data} />
    )
}


const Paginator = ({d}: PackagePaginatorProps) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    const itemsPerPage = 15;
    const data = d
  
    useEffect(() => {
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
      
  
    }, [itemOffset, itemsPerPage]);
  
  
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  
  
  
    return (
      <>
          <MasonryList t={currentItems} />
  
          <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              // renderOnZeroPageCount={null}
              containerClassName={"pagination"}
              pageClassName={"pagination__page"}
              activeClassName={"pagination__pageActive"}
              previousClassName={"pagination__pagePrev"}
              nextClassName={"pagination__pageNext"}
          />
        </>
      )
  }