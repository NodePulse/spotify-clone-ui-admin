import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#003A10] min-h-screen pl-[4vw]">
      <img
        src={assets.logo}
        alt=""
        className="mt-5 w-[max(10vw,100px)] block max-sm:hidden"
      />
      <img
        src={assets.logo_small}
        alt=""
        className="mt-5 w-[max(5vw,40px)] mr-5 block sm:hidden"
      />
      <div className="flex flex-col gap-5 mt-10">
        <NavLink
          to={"/add-song"}
          className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium"
        >
          <img src={assets.add_song} alt="" className="w-5" />
          <p className="block max-sm:hidden">Add Song</p>
        </NavLink>
        <NavLink
          to={"/list-song"}
          className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium"
        >
          <img src={assets.song_icon} alt="" className="w-5" />
          <p className="block max-sm:hidden">List Song</p>
        </NavLink>
        <NavLink
          to={"/add-album"}
          className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium"
        >
          <img src={assets.add_album} alt="" className="w-5" />
          <p className="block max-sm:hidden">Add Album</p>
        </NavLink>
        <NavLink
          to={"/list-album"}
          className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium"
        >
          <img src={assets.album_icon} alt="" className="w-5" />
          <p className="block max-sm:hidden">List Album</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
