import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
function Card({ data, imageURL, trending, index,media_type }) {
  const mediaType = data.media_type ?? media_type
  return (
    <Link to={"/"+mediaType+"/"+data.id} className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded relative transition-all hover:scale-110">

      {data?.poster_path ?<img src={imageURL + data?.poster_path} alt="" /> : <img className="py-5" src="https://t3.ftcdn.net/jpg/05/06/75/18/240_F_506751845_gvYWVPjDz0DI6uSZBAmRocKPEn0I8lGW.jpg" alt="" /> }
      
      <div className="absolute top-5 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden ">
        {trending && (
          <div className="px-5 py-1 text-white">#{index + 1} Trending</div>
        )}
      </div>
      <div className="absolute h-14 bottom-0 backdrop-blur-3xl w-full bg-black/60 text-white/95 p-1" >
        <h1 className="text-ellipsis text-lg font-semibold line-clamp-1"> {data?.title || data?.name}</h1>
        <div className="flex justify-between items-center px-2 text-sm text-neutral-400">
            <p> { moment(data.release_date).format('MMMM Do YYYY')}</p>
            <p className="text-xs text-white bg-black rounded-full px-1"> Rating:{Number(data.vote_average).toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
