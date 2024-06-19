import React from "react";
import Link from "next/link";
import { MdOutlineTimer } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { BiInfoCircle } from "react-icons/bi";
import { TbAward } from "react-icons/tb";

const Sidebar = ({ isOpen }) => {
  return (
    <div id="containerSidebar" className="z-40 ">
      <div className="navbar-menu relative z-40 ">
        <nav
          id="sidebar"
          className={`fixed top-12 left-0 bottom-0 flex w-2/4  flex-col overflow-y-auto bg-[#202325] pt-6 pb-8 sm:max-w-xs lg:w-80  ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <div className="px-4 pb-6">
            <ul className="mb-8 text-sm font-medium">
              <li>
                <Link
                  className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="/"
                >
                  <span className="select-none flex gap-3 ">
                    <MdOutlineTimer />
                    Timer
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="/tasks"
                >
                  <span className="select-none flex gap-3 ">
                    <FaTasks />
                    Tasks
                  </span>
                </Link>

                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="/statistics"
                >
                  <span className="select-none flex gap-3">
                    {" "}
                    <IoIosStats />
                    Statistics
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="/about"
                >
                  <span className="select-none flex gap-3">
                    <BiInfoCircle />
                    How it works
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="/store"
                >
                  <span className="select-none flex gap-3">
                    {" "}
                    <TbAward />
                    Store
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="px-4 pb-6 ">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
              Profile
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  href="/login"
                >
                  <span className="select-none">Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mx-auto lg:ml-80"></div>
    </div>
  );
};

export default Sidebar;
