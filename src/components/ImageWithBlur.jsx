import React from "react";
import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageWithBlur = ({ src, alt, blurHash, className, height, width }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  const standardWidth = 400

  const originalProportion = width / height

  const newHeight = standardWidth / originalProportion

  // const imageLoaded = false


  return (
    <>
      <div style={{ display: !imageLoaded ? "inline" : "none" }}
        className="max-w-[500px] h-96 rounded-full"
      >
        <Blurhash
          hash={blurHash}
          height={newHeight}
          width={standardWidth}
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
