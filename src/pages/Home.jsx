import React from "react";
import Header from "../components/Header";
import GenPhotos from "../components/GenPhotos";

const Home = () => {
  return (
    <div className="w-full h-full bg-base-100 px-8 py-4">
      <GenPhotos/>
    </div>
  );
};

export default Home;
