"use client";
import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        id="navbar"
        className="fixed top-0 z-40 flex w-full flex-row justify-start bg-[#202325] px-4 sm:justify-between "
      >
        <button
          id="btnSidebarToggler"
          type="button"
          className="py-4 text-2xl text-white hover:text-gray-200"
          onClick={toggleSidebar}
        >
          <svg
            id="navClosed"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={
              isOpen
                ? "hidden h-8 w-8 cursor-pointer"
                : " h-8 w-8 cursor-pointer"
            }
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            id="navOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={isOpen ? " h-8 w-8" : " hidden h-8 w-8"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <Sidebar isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
