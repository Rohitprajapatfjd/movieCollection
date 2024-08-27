import React, { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner";
import { useSelector } from "react-redux";
import HorizontalCard from "../components/HorizontalCard";
import fetchData from "../customHooks/fetchData";

function Home() {
  const { data, loader, imageURL } = useSelector(
    (state) => state.treadingMovie
  );
  const {data:NowPlaying} = fetchData('movie/now_playing');
  const {data:topRated}  = fetchData('movie/top_rated');
  const {data:tvShow}  = fetchData('tv/popular');
  const {data:topRatedShow} = fetchData('/tv/top_rated')
 
  return (
    <div>
      <HomeBanner data={data} loader={loader} imageURL={imageURL} />
       <HorizontalCard heading={"Trending Movies And Shows"} data={data} imageURL={imageURL} trending={true}  />
       <HorizontalCard heading={"Now Playing"} data={NowPlaying} imageURL={imageURL} trending={false} media_type={"movie"}  />
       <HorizontalCard heading={"Top Rated Movies"} data={topRated} imageURL={imageURL} trending={false} media_type={"movie"}  />
       <HorizontalCard heading={"Popular TV Shows"} data={tvShow} imageURL={imageURL} trending={false} media_type={"tv"}  />
       <HorizontalCard heading={"Top Rated Shows"} data={topRatedShow} imageURL={imageURL} trending={false} media_type={"tv"}  />
      
    </div>
  );
}

export default Home;
