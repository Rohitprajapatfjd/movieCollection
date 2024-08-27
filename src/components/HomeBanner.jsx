import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GrFormPrevious ,GrFormNext } from "react-icons/gr";

const HomeBanner = ({data,loader , imageURL}) => {
  

  const [currentImage,setCurrent] = useState(0);

  const handlePrevious = ()=>{
   if(currentImage >0){
     setCurrent(prev => prev - 1);
   }
  }
  const handleNext = ()=>{
    if(currentImage < data.length - 1){
      setCurrent(prev => prev + 1);
    }
  }

 

  useEffect(()=>{
    const interval  = setInterval(() => {
      if(currentImage < data.length - 1){
        handleNext()
        
      }else{
        setCurrent(0)
      }
    }, 3000);
   return ()=> clearInterval(interval)
  },[data,imageURL,currentImage])

  if(loader == "Loading"){
    return <div className='min-h-[81vh] flex justify-center items-center'>{<div role="status">
      <svg aria-hidden="true" class="w-12 h-12 text-lime-500 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  </div>}</div>
  }
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[100vh] overflow-hidden">
        {data.map((item, index) => (
          <div key={index +"Trending"} className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all ease-in-out " style={{transform : `translateX(-${currentImage * 100}%)`}}>
            <div className="h-full w-full">
            <img src={imageURL + item.backdrop_path} className="h-full w-full object-cover" alt="" srcset="" />
            </div>
            {/* {next and previous button} */}
            <div className="absolute top-0 h-full w-full hidden justify-between items-center px-4 group-hover:md:flex">
                <button onClick={handlePrevious} className="bg-white p-1 rounded-full text-xl z-10" >
                   <GrFormPrevious/>
                </button>
                <button onClick={handleNext} className="bg-white p-1 rounded-full text-xl z-10">
                 <GrFormNext />
                </button>
            </div>
            <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900 to-transparent">
            </div>
            <div className="container mx-auto">
            <div className=" bottom-0 absolute max-w-md px-4">
                <h2 className="text-white font-bold text-3xl md:text-5xl drop-shadow-2xl"> {item.title || item.name}</h2>
                <p className="text-ellipsis line-clamp-3 my-4 text-gray-300">{item.overview} </p>
                <div className="flex item-center gap-4 text-gray-300">
                    <p> Rating : {Number( item.vote_average.toFixed(1))+ "+"}</p>
                    <span>|</span>
                    <p className="text-gray-300">Vote : {item.vote_count} </p>
                    
                </div>
                <button className="px-4 mb-1 py-2 bg-white text-black mt-4 font-bold transition-all shadow-md rounded hover:bg-gradient-to-l from-red-700 to-orange-500  hover:scale-105"> Play Now</button>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBanner;
