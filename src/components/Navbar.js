import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoCloseOutline } from "react-icons/io5";


const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="sticky  top-0 z-50 font-titleFont w-full bg-gray-800 border-b-[1px] border-b-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between h-20">
          <div>
            <img className="w-16" src={logo} alt="logo" />
          </div>

          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li className="text-base text-white font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
              <li className="text-base text-white font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Pages
              </li>
              <li className="text-base text-white font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Shop
              </li>
              <li className="text-base text-white font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Element
              </li>
              <li className="text-base text-white font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Blog
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile and Tablet View */}
        <div className="md:hidden flex items-center ml-4 xl:ml-0 justify-between  h-20">
          <div className="w-3/4">
            <img className="w-12 xl:w-32" src={logo} alt="logo" />
          </div>

          <div className="flex justify-between mr-4 xl:mr-0 ">
            <div className="flex items-center">
              <div
                className="cursor-pointer"
                onClick={() => setNavOpen(!isNavOpen)}
              >
                {isNavOpen ? (
                  // Cross icon when navigation links are open
                  <IoCloseOutline className="w-6 h-6 text-white xl:text-black" />
                ) : (
                  // Burger icon when navigation links are closed
                  <div>
                    <div className="w-6 h-1 bg-white"></div>
                    <div className="w-6 h-1 bg-white mt-1"></div>
                    <div className="w-6 h-1 bg-white mt-1"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Drawer */}
        {isNavOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white">
            {/* Include your navigation links here */}
            {/* Example: */}
            <ul className="p-4">
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Pages
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Shop
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Element
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Blog
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
