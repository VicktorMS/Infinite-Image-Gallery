import React from "react";
import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageWithBlur = ({ src, alt, blurHash, className }) => {

  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
    // const imageLoaded = true 
  return (
    <>
      <div style={{ display: !imageLoaded ? "inline" : "none" }}>
        <Blurhash
          hash={"LoC%a7IoIVxZ_NM|M{s:%hRjWAo0"}
          width={500}
          height={500}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        style={{ display: imageLoaded ? "inline" : "none" }}
        src={src}
        alt={alt}
        className={className}
      />
    </>
  );
};

export default ImageWithBlur;
