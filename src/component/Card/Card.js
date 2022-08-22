import React from "react";
import { BsPlayFill, BsHeartFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card({ data }) {
  return (
    <div className="rounded-md cursor-pointer relative group">
      <LazyLoadImage
        effect="blur"
        height={240}
        width={"100%"}
        className="w-full h-full object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/original/${data.poster}`}
        alt="gambar"
      />

      <div className="group-hover:flex hidden gap-3 w-full h-16 absolute left-0 right-0 bottom-0 bg-white bg-opacity-20 backdrop-blur-md drop-shadow-lg rounded-b-md items-center px-3">
        <div className="flex items-center grow">
          <BsPlayFill className="text-4xl text-white" />
          <div>
            <h1 className="text-white block w-[216px] truncate">
              {data.title}
            </h1>
            <h6 className="text-white font-light text-sm">{data.genres[0]}</h6>
          </div>
        </div>
        <div className="bg-white w-16 h-8 rounded-full justify-center flex items-center gap-2">
          <BsHeartFill className="text-lg text-red-500" />
          <p>{data.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
