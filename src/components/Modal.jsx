import React from "react";

const Modal = ({ children, data }) => {
  const {
    id,
    color,
    alt_description: altDescription,
    urls,
    likes,
    user,
  } = data;

  const { username, name, profile_image: profileImage } = user;

  return (
    <>
      <label htmlFor="imageCardModal">{children}</label>

      <input type="checkbox" id="imageCardModal" className="modal-toggle" />

      <div className="modal w-screen p-4">
        <div className=" h-full bg-base-100 w-full rounded-lg p-4">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{name}</p>
          <div className="modal-action">
            <label htmlFor="imageCardModal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
