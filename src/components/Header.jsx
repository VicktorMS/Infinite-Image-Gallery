import React from "react";
import SearchIcon from "./icons/SearchIcon";

const Header = () => {
  return (
    <div className="bg-base-100 p-6 drop-shadow-sm">
      <h1 className="text-3xl font-bold mb-2">Image Finder</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs rounded-e-none"
        />
        <button className="btn btn-primary  rounded-s-none"><SearchIcon/></button>
      </div>
    </div>
  );
};

export default Header;
