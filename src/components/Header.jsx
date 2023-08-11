import React, { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import Drawer from "./Drawer";

const Header = () => {
  const [userSearch, setUserSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleOnChangeUserSearch = (e) => {
    setUserSearch(e.target.value);
  };
  const handleOnClickRedirectToSearchPage = () => {
    if (userSearch) {
      navigate(`/search`);
      // navigate(`/search?query=${userSearch}`)
      setSearchParams({ query: userSearch });
    }
    setUserSearch("");
  };
  return (
    <div className="bg-base-100 p-6 drop-shadow-sm">
      <div className="flex justify-between w-full items-center mb-4">
        <Link to="/" className="">
          <h1 className="text-3xl font-bold mb-2">Infinite Gallery</h1>
        </Link>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full rounded-e-none"
          onChange={handleOnChangeUserSearch}
          value={userSearch}
        />
        <button
          onClick={handleOnClickRedirectToSearchPage}
          className="btn btn-primary  rounded-s-none"
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
