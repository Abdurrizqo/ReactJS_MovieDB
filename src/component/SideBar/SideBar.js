import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";

function SideBar({ genres }) {
  let navigate = useNavigate();

  let itemGenres = genres.map((item, index) => {
    return (
      <div
        onClick={() => {
          navigate(`/${item}`);
        }}
        className="px-4 py-1 rounded-full bg-blue-400 text-white cursor-pointer"
        key={index}
      >
        {item}
      </div>
    );
  });

  return (
    <div className="w-96 bg-white border-r-[0.2px] h-screen fixed pl-8 pr-4 overflow-y-auto no-scrollbar">
      <h1 className="text-xl font-semibold mt-20 ">New Movies</h1>
      <div className="w-full flex-col flex gap-5 mt-5 pb-8 border-b-2 border-gray-300">
        <Card
          data={{
            poster: "tuzkEyCPwf5O56fDjGNerIA8hxT.jpg",
            title: "jakarta",
            genres: ["History"],
            rating: 8,
          }}
        />
        <Card
          data={{
            poster: "tuzkEyCPwf5O56fDjGNerIA8hxT.jpg",
            title: "jakarta",
            rating: 8,
            genres: ["History"],
          }}
        />
      </div>

      <h1 className="text-xl font-semibold mt-4">Genre</h1>
      <div className="w-full mt-2 font-semibold flex flex-wrap gap-3 mb-10">
        {itemGenres}
      </div>
    </div>
  );
}

export default SideBar;
