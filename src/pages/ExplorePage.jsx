import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Card from '../components/Card';
function ExplorePage() {
  const params = useParams();
  const [pageNo, setpageNo] = useState(1);
  const [datas, setdatas] = useState([]);
  const [totalPages, setTotalPages] = useState(0)
  const { imageURL } = useSelector((state) => state.treadingMovie)
  const fetchData = async () => {
    try {
      const response = await axios.get(`discover/${params.explore}`, {
        params: {
          page: pageNo 
        }
      })
      setdatas((prev) => { return [...prev, ...response.data.results] }
      )
      // console.log(response.data.results)
      setTotalPages(response.data.total_pages)
    } catch (error) {
      console.log("error", error)
    }

  }

  const handleSrcoll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setpageNo(prev => prev + 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, [pageNo])
  useEffect(()=>{
    setdatas([])
    setpageNo(1)
    fetchData()
  },[params.explore])

  useEffect(() => {
    document.addEventListener('scroll', handleSrcoll)
  }, [])
  return (
    <div className='py-16'>
   <div className="container mx-auto px-3">
                <h2 className="text-xl md:text-3xl text-white font-bold text-pretty mb-3">
                    {`All Popular ${(params.explore).toUpperCase()}`}
                </h2>

                <div className=" relative ">
                    <div className="grid grid-cols-[repeat(auto-fit,230px)] scroll-smooth justify-center sm:justify-start relative z-10 gap-6 transition-all">
                        {datas.map((item, index) => (
                            <Card key={index + params.explore + "AllPopular"} data={item} imageURL={imageURL} index={index} media_type={params.explore}/>
                        ))}
                    </div>
                    
                </div>

            </div>
    </div>
  )
}

export default ExplorePage
