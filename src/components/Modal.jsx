import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import LikeIcon from "./icons/LikeIcon";
import CubeIcon from "./icons/CubeIcon";
import DownloadIcon from "./icons/DownloadIcon";
import BackArrowIcon from "./icons/BackArrowIcon";
import ReadMoreReact from "read-more-react";
import DropdownButton from "./DropdownButton";

const Modal = ({ children, data }) => {
  const {
    id,
    color,
    description,
    links,
    create_at: createAt,
    alt_description: altDescription,
    width,
    height,
    urls,
    likes,
    user,
  } = data;

  const { username, name, profile_image: profileImage } = user;

  const formattedCreateDate = moment(createAt).format("DD/MM/YY");

  return (
    <>
      <label htmlFor={id}>{children}</label>

      <input type="checkbox" id={id} className="modal-toggle" />

      <div className="modal p-4">
        <div className="bg-base-100 rounded-lg max-h-[700px] h-[90%]  w-full max-w-3xl">
          <div className="flex items-center justify-between drop-shadow-sm bg-base-100 p-4 w-full h-18 rounded-t-lg ">
            <div>
              <h3 className="font-bold text-lg">Photo by {name}</h3>
              <p className="text-sm">@{username}</p>
            </div>
            <p className="text-sm text-slate-500">
              Criado {formattedCreateDate}
            </p>
          </div>

          <div className="items-center flex flex-col gap-2 p-4 h-full bg-base-100 overflow-y-auto">
            <img
              src={urls.full}
              className={`rounded-lg max-h-[70%]`}
              alt={altDescription}
            />

            {description && <p className="text-sm px-4">{description}</p>}

            <div className="modal-action flex justify-between w-full">
              <div className="flex items-center gap-2">
                <button className="btn">
                  <Link to={links.html}>
                    <img src="public/icons/unsplashIcon.svg" alt='unsplash icon' className="w-5"/>
                  </Link>
                </button>
                <DropdownButton/>
              </div>
              <label htmlFor={id} className="btn btn-secondary">
                <BackArrowIcon />
              </label>
            </div>

            <div className="w-full mt-4">
              <div className="flex items-center gap-1">
                <CubeIcon />
                <p className="text-lg font-semibold">
                  Dimensions:{" "}
                  <span className="font-normal">
                    {height}px x {width}px
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-1">
                <LikeIcon />
                <p className="text-lg font-semibold">
                  Likes: <span className="font-normal">{likes}</span>
                </p>
              </div>

              <div className="flex items-center gap-1">
                <div
                  style={{ backgroundColor: color }}
                  className={`w-5 h-5 rounded-full border-2 border-neutral`}
                ></div>
                <p className="text-lg font-semibold">
                  Color: <span className="font-normal">{color}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
