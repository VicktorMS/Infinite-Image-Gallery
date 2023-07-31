/* eslint-disable react/display-name */
import React from "react";

const ImageCard = React.forwardRef(({ data }, ref) => {
  const {
    id,
    color,
    alt_description: altDescription,
    urls,
    likes,
    user,
  } = data;

  const { username, name, profile_image: profileImage } = user;

  const photoBody = (
    <>
      <img
        src={urls.regular}
        alt={altDescription}
        className="w-full object-cover h-max rounded-lg drop-shadow-md"
      />
      <div className=" p-2 h-14 flex items-center gap-2">
        <img src={profileImage.small} className="rounded-full drop-shadow-sm" />
        <div>
          <p className="font-semibold text-md">{name}</p>
          <p className="text-sm text-slate-500 font-medium">@{username}</p>
        </div>
      </div>
    </>
  );
  const content = ref ? (
    <article ref={ref} className="w-full max-w-[500px] mb-4">
      {photoBody}
    </article>
  ) : (
    <article className="w-full max-w-[500px] mb-4">{photoBody}</article>
  );
  return content;
});

export default ImageCard;