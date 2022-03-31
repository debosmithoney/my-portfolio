import React from "react";

const Navbar = () => {
  return (
    <div className="wrapper flex h-20 justify-between mb-3 top-0">
      <div className="left flex-1 items-center flex ">
        <div className="name font-bold text-2xl cursor-pointer p-4">
          <h1>Debosmit</h1>
        </div>
      </div>
      <div className="right  items-center flex justify-center font-medium transition-all duration-300 ">
        <div className="menu hidden lg:block">
          <ul className="list-none flex gap-6 cursor-pointer ">
            <li className="transition-all duration-200 active:scale-95 group ">
              Home
              <div class="h-0.5 w-0 group-hover:w-full bg-indigo-700 transition-all"></div>
            </li>
            <li className="transition-all duration-200 active:scale-95 group">
              Services
              <div class="h-0.5 w-0 group-hover:w-full bg-indigo-700 transition-all"></div>
            </li>
            <li className="transition-all duration-200 active:scale-95 group">
              Experiences
              <div class="h-0.5 w-0 group-hover:w-full bg-indigo-700 transition-all"></div>
            </li>
            <li className="transition-all duration-200 active:scale-95 group">
              Testimonials
              <div class="h-0.5 w-0 group-hover:w-full bg-indigo-700 transition-all"></div>
            </li>
          </ul>
        </div>
        <div className="contact p-8   ">
          <button className="border hover:border-red-300 rounded-xl hover:rounded-2xl px-3 py-1 bg-gradient-to-b from-sky-500  active:scale-95 to-indigo-600 text-white transition-all duration-200">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
