import React, { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import { useSearchParams, useNavigate } from "react-router-dom";

const Header = () => {
  const [userSearch, setUserSearch] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  

  const handleOnChangeUserSearch = (e) => {
    setUserSearch(e.target.value)
  }
  const handleOnClickRedirectToSearchPage = () => {
    if (userSearch) {
      navigate(`/search`)
      // navigate(`/search?query=${userSearch}`)
      setSearchParams({query: userSearch})
    } 
    setUserSearch('')
  }
  return (
    <div className="bg-base-100 p-6 drop-shadow-sm">
      <h1 className="text-3xl font-bold mb-2">Image Finder</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs rounded-e-none"
          onChange={handleOnChangeUserSearch}
          value={userSearch}
        />
        <button onClick={handleOnClickRedirectToSearchPage} className="btn btn-primary  rounded-s-none"><SearchIcon/></button>
      </div>
    </div>
  );
};

export default Header;
