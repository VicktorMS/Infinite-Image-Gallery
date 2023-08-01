import React from "react";
import GenSearchPhotos from "../components/GenSearchPhotos";

const SearchPage = () => {
  return (
    <div className="w-full h-full bg-base-100 p-8 flex justify-center">
      <div className="columns-1 md:columns-2 lg:columns-3">
        <GenSearchPhotos />
      </div>
    </div>
  );
};

export default SearchPage;
