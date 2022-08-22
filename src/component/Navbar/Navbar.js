import React from "react";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="w-full h-16 border-b-[0.2px] bg-white fixed px-8 flex items-center gap-32 z-10">
      <h1 className="font-semibold text-2xl">MOVEA</h1>
      <div className="flex items-center gap-8 text-lg grow">
        <p className="cursor-pointer">Movies</p>
        <p className="cursor-pointer">TV Shows</p>
        <p className="cursor-pointer">Animation</p>
        <p>Plans</p>
      </div>
      <div className="flex items-center gap-6">
        <FiSearch className="text-2xl" />
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}

export default Navbar;
