import React from "react";
import MenuIcon from "./icons/MenuIcon";

const Drawer = () => {
  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button">
          <MenuIcon/>
        </label>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay z-50"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content z-50">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
