import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card';
import { useSelector } from 'react-redux';

function SearchPage() {
  const location = useLocation();
  const [input,setInput] = useState(location.search.slice(3).split('%20').join(" "));
  const { imageURL } = useSelector((state) => state.treadingMovie)
  const navigate = useNavigate();
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (input.trim()) {
        navigate(`/search?q=${encodeURIComponent(input)}`);
    }
};
  console.log(location.search.slice(3))
  const [data, setData] = useState([])

  const fetch = async () => {
    try {
      const response = await axios.get('search/multi', {
        params: {
          query: location.search.slice(3),
          page: 1
        }
      })
      setData((prev) => { return [...prev, ...response.data.results] })

      console.log(response.data.results)
    } catch (error) {
      console.log("error", error);
    }

  }

  useEffect(() => {
    setData([])
    fetch()
  }, [location?.search])
  return (
    <div className='py-16 relative'>
      <div className='sticky top-14 z-30 px-2 md:hidden max-w-md mx-auto'>
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="search" id="default-search" class="block w-full p-3 ps-10 text-md bg-neutral-800 border border-white/5 outline-none rounded-lg text-white " placeholder="Search..." required />
            <button onClick={handleSearchSubmit} class="text-white outline-none absolute end-2.5 bottom-2.5 bg-gradient-to-l from-red-700 to-orange-500 hover:scale-110  focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
       

      </div>
      <div className="container mx-auto px-3">
        <h2 className="text-xl md:text-3xl text-white font-bold text-pretty mb-3">
          Search Result
        </h2>

        <div className=" relative ">
          <div className="grid grid-cols-[repeat(auto-fit,230px)] scroll-smooth justify-center sm:justify-start relative z-10 gap-6 transition-all">
            {data.map((item, index) => (
              <Card key={index + location.search.slice(3) + "AllPopular"} data={item} imageURL={imageURL} index={index} media_type={data.media_type} />
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

export default SearchPage
