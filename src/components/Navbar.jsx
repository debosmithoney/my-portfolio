import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const [navbar, setNavbar] = useState("backdrop-blur-none");
  const [getMenu, setGetMenu] = useState(false);

  window.addEventListener("scroll", () =>
    setNavbar(window.scrollY >= 128 ? "backdrop-blur-xl" : "backdrop-blur-none")
  );
  return (
    <div
      className={`wrapper flex h-20 ${
        getMenu ? "h-screen " : "h-20"
      } justify-between mb-3 top-0 fixed z-20  w-full ${navbar} transition-all duration-300 `}
    >
      <div className="left flex-1 items-center flex ">
        <div className="name font-bold text-2xl cursor-pointer p-6">
          <h1>Debosmit</h1>
        </div>
      </div>
      <div className="right h-full lg:h-20 items-center flex justify-end  font-medium transition-all duration-300 ">
        <div
          className={`menu h-screen w-screen py-4 transition-all absolute ${
            !getMenu ? "top-full" : "top-0"
          } lg:static lg:h-auto lg:w-auto lg:text-lg z-10 lg:bg-transparent bg-black text-white lg:text-black  `}
        >
          <ul className="list-none flex gap-6 cursor-pointer h-auto lg:flex-row flex-col justify-center items-center overflow-hidden ">
            <li
              className="transition-all duration-200 active:scale-95 group "
              onClick={() => setGetMenu(false)}
            >
              Home
              <div class="h-0.5 w-0 group-hover:w-full bg-indigo-700 transition-all"></div>
            </li>
            <li
              className="transition-all duration-200 active:scale-95 group"
              onClick={() => setGetMenu(false)}
            >
              Services
              <div class="h-0.5 w-0 group-hover:w-full bg-indigo-700 transition-all"></div>
            </li>
            <li
              className="transition-all duration-200 active:scale-95 group"
              onClick={() => setGetMenu(false)}
            >
              Experiences
              <div class="h-0.5 w-0 group-hover:w-full bg-indigo-700 transition-all"></div>
            </li>
            <li
              className="transition-all duration-200 active:scale-95 group"
              onClick={() => setGetMenu(false)}
            >
              Testimonials
              <div class="h-0.5 w-0 group-hover:w-full bg-indigo-700 transition-all"></div>
            </li>
            <div className="contact p-8 hidden md:block ">
              <button className="border hover:border-red-300 rounded-xl hover:rounded-2xl px-3 py-1 bg-gradient-to-b from-sky-500  active:scale-95 to-indigo-600 text-white transition-all duration-200 z-50">
                Contact
              </button>
            </div>
          </ul>
        </div>
        <div
          className="toggle lg:hidden block px-8 text-2xl lg:text-black text-white transition-all duration-300"
          onClick={() => setGetMenu(!getMenu)}
        >
          {getMenu ? <GiHamburgerMenu /> : <GrFormClose />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
