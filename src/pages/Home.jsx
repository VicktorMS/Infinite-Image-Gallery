import React from "react";
import Header from "../components/Header";
import GenPhotos from "../components/GenPhotos";

const Home = () => {
  return (
    <div className="w-full h-full bg-base-100 p-8 py-4 flex justify-center z-10">
      <div className="columns-1 md:columns-2 lg:columns-3 z-10">
        <GenPhotos />
      </div>
    </div>
  );
};

export default Home;
