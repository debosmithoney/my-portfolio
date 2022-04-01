import React from "react";
import Resume from "../assests/Debosmit_Resume.pdf";
// import BGK from "../assests/liquid-cheese.svg";
import IMG from "../assests/pic.jpeg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="wrapper h-screen justify-around flex-col lg:flex-row flex p-10 relative drop-shadow-lg   ">
      <div className="left flex flex-col justify-around lg:w-3/4 p-4">
        <div className="name flex flex-col gap-4 z-10">
          <div className="name flex flex-col">
            <span className="text-3xl lg:text-5xl font-bold ">Hey! I am</span>
            <span className="text-3xl lg:text-5xl font-bold">
              Debosmit Choudhury
            </span>
          </div>
          <span>
            Pursuing BTech from Asansol Engineering College and also With an
            urge of learning new technology and new web-based applications,
            started working of self-made projects using a tech stack consisting
            of ReactJS, MongoDB and NodeJS
          </span>
          <div className="contact m-4 text-2xl ">
            <button className="border hover:border-red-300 rounded-xl hover:rounded-2xl px-3 py-1 bg-gradient-to-b from-sky-500  active:scale-95 to-indigo-600 text-white transition-all duration-200">
              Hire me!
            </button>
          </div>
        </div>
        <div className="icons text-3xl lg:text-5xl flex p-6 gap-4 ">
          <div
            className="github cursor-pointer hover:text-indigo-600  transition-all duration-200 "
            onClick={() =>
              window.open("https://github.com/debosmithoney", "_blank")
            }
          >
            <FaGithub />
          </div>
          <div
            className="linkedin cursor-pointer hover:text-indigo-600 transition-all duration-200  "
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/debosmit-choudhury-38387287/",
                "_blank"
              )
            }
          >
            <FaLinkedin />
          </div>
          <div
            className="Twitter cursor-pointer hover:text-indigo-600 transition-all duration-200 "
            onClick={() =>
              window.open("https://twitter.com/DebosmitHoney", "_blank")
            }
          >
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="right flex justify-center items-center object-contain relative transition-all duration-300">
        <div className="projects border-2 border-white absolute right-16 text-xl font-bold p-4 rounded-2xl hidden lg:block lg:top-16 hover:border-indigo-600 drop-shadow-lg z-10 cursor-pointer active:scale-90 transition-all duration-300 backdrop-blur-xl  bg-white/30">
          Check out Projects
        </div>
        <div className="projects border-2 border-white absolute left-16 text-xl font-bold p-4 rounded-2xl  bottom-16 hover:border-indigo-600 drop-shadow-lg z-10 cursor-pointer active:scale-90 transition-all duration-300 hidden lg:block backdrop-blur-xl  bg-white/30">
          <a href={Resume} download>
            To Know More
          </a>
        </div>
        <img
          className="w-3/4 rounded-full drop-shadow-lg "
          src={IMG}
          alt="Debosmit"
        />
      </div>
    </div>
  );
};

export default Hero;
