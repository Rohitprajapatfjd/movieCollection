import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import fetchData from '../customHooks/fetchData';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Divider from '../components/Divider';
import HorizontalCard from "../components/HorizontalCard"
function DetailsPage() {
  const param = useParams()
  const parameter = param.explore + "/" + param.id;
  const { imageURL } = useSelector((state) => state.treadingMovie)
  const { data } = fetchData(parameter);
  const { data: cast } = fetchData(parameter + "/credits");
  const { data: similarData } = fetchData(parameter + "/similar")
  const { data: recommendationData } = fetchData(parameter + "/recommendations")
  const { data: videosData } = fetchData(parameter + "/videos")
  console.log()
  const Duration = (Number(data?.runtime) / 60).toFixed(2).split(".");
  const [display, setdisplay] = useState(false)
  return (
    <div className='py-16 text-neutral-200 '>
        {
          display && videosData && (
            <div className='flex justify-center items-center relative'>
            <div className='w-5/6 md:w-4/6 h-[40vh]  lg:h-[75vh] absolute overflow-hidden top-44 z-40'>
              <p onClick={()=>setdisplay(false)} className=' absolute -top-1 right-0  px-1 cursor-pointer text-md hover:rotate-180 transition-all text-white'>X</p>
              <iframe
                className='w-full h-full'
                src={`https://www.youtube.com/embed/${videosData[0].key}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'         
              ></iframe>
            </div>
          </div>
          )
        }   


      <div className="w-full h-[200px] relative hidden md:block">
        <div className='h-full w-full'>
          <img className='h-full w-full object-cover ' src={imageURL + data?.backdrop_path} alt="" />
        </div>
        <div className='w-full h-full absolute top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
      </div>

      <div className='container mx-auto px-3 py-20 md:py-0 flex flex-col sm:flex-row gap-5 md:gap-10'>
        <div className='-mt-20 relative mx-auto md:mx-0 w-fit'>
          <img className='h-80 w-60 sm:min-w-[240px] object-cover rounded' src={imageURL + data?.poster_path} alt="" />
          <div className='text-center'>
            <button onClick={()=>setdisplay(true)} className="px-4 mb-1 py-2 sm:w-full  bg-white text-center text-black mt-4 font-bold transition-all shadow-md rounded hover:bg-gradient-to-l from-red-700 to-orange-500   hover:scale-105"> Play Now</button>
          </div>

        </div>
        <div className='mx-auto sm:mx-0'>
          <h1 className='text-2xl md:text-3xl md:my-2 font-bold text-white'>{data?.title || data?.name}</h1>
          <p className='text-neutral-300'> {data?.tagline}</p>
          <Divider />
          <div className='flex items-center gap-3'>
            <p>Rating: {Number(data?.vote_average).toFixed(1) + "+"}</p>
            <span>|</span>
            <p>Likes: {Number(data?.vote_count)}</p>
            <span>|</span>
            <p>   {data?.runtime ? "Duration :" + Duration[0] + "h " + Duration[1] + "m" : " Season :" + data.number_of_seasons}</p>
          </div>
          <Divider />
          <div>
            <h3 className='text-xl text-white font-semibold'>Overview</h3>
            <p className='text-neutral-300'>{data?.overview} </p>
            <Divider />
            <div className='flex items-center text-center gap-3'>
              <p>Status: {data?.status} </p>
              <span>|</span>
              <p> Release Date : {moment(data?.release_date).format("MMMM Do YYYY")}</p>
              <span>|</span>
              <p>{data?.revenue != null ? "Revenue :" + data?.revenue : "Episodes :" + data.number_of_episodes}</p>
            </div>
            <Divider />
          </div>


          {cast && cast.cast && (
            <div>
              <p> <strong className='text-white'>Director</strong>  : {cast.crew[0].name}</p>
              <Divider />
              <p><strong className='text-white'>Writer</strong>: {cast.crew.filter((item) => item.job === "Writer").map(({ name }) => name).join(", ")}</p>

              <Divider />
              <h3 className='text-xl md:text-2xl text-white font-bold'> Star Cast :</h3>
              <div className='grid grid-cols-[repeat(auto-fit,112px)] gap-5 justify-center'>
                {
                  cast.cast.filter((item) => item?.profile_path).slice(0, 13).map(({ profile_path, name }) => (
                    <div >
                      <div>
                        <img className='w-28 h-28 rounded-full object-fill bg-cover' src={imageURL + profile_path} alt="" />
                      </div>
                      <p className='text-center font-semibold text-md'> {name} </p>
                    </div>
                  ))
                }
              </div>


            </div>
          )}



        </div>
      </div>

      <div>
        {similarData && recommendationData && (
          <>
            <HorizontalCard heading={"Similar Data"} data={similarData} imageURL={imageURL} trending={false} media_type={param.explore} />
            <HorizontalCard heading={"Recommendation Data"} data={recommendationData} imageURL={imageURL} trending={false} media_type={param.explore} />
          </>
        )

        }
      </div>

    </div>
  )
}

export default DetailsPage
