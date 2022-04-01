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
      className={`wrapper flex h-20   justify-between mb-3 top-0 fixed z-20  w-full ${navbar} transition-all duration-300 `}
    >
      <div className="container h-full w-full overflow-hidden flex justify-between">
        <div className="name font-bold text-2xl cursor-pointer p-6">
          <h1>Debosmit</h1>
        </div>
        <div
          className="toggle lg:hidden flex px-8 text-2xl lg:text-black  cursor-pointer transition-all duration-300  justify-center items-center"
          onClick={() => setGetMenu(!getMenu)}
        >
          {!getMenu ? <GiHamburgerMenu /> : <GrFormClose />}
        </div>
      </div>

      <div
        className={`menu h-screen w-screen  lg:flex justify-center items-center py-4 transition-all absolute top-full lg:static lg:h-auto lg:w-auto lg:text-lg z-10 lg:bg-transparent bg-black text-white lg:text-black ${
          !getMenu ? "hidden" : "flex"
        } `}
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
          <div className="contact p-8  " onClick={() => setGetMenu(false)}>
            <button className="border hover:border-red-300 rounded-xl hover:rounded-2xl px-3 py-1 bg-gradient-to-b from-sky-500  active:scale-95 to-indigo-600 text-white transition-all duration-200 z-50">
              Contact
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
