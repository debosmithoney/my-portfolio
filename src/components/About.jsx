import React from "react";
import Resume from "../assests/Debosmit_Resume.pdf";

const About = () => {
  return (
    <div className="Wrapper bg-indigo-800 text-white p-8 ">
      <div className="container flex flex-col lg:flex-row ">
        <div className="left flex flex-col justify-around p-4 m-4">
          <h1 className="text-yellow-400 lg:text-5xl text-3xl   font-extrabold m-2 drop-shadow-xl">
            About me
          </h1>
          <p className="lg:text-xl text-lg m-2">
            Frontend Developer with over 1 year of experience in building <br />
            For details in brief click below.
          </p>
          <div className="m-6 justify-center flex">
            <a
              href={Resume}
              className="p-2 m-4  bg-gradient-to-b rounded-lg hover:rounded-xl drop-shadow-sm hover:drop-shadow-xl from-yellow-500 to-pink-500 transition-all duration-200 font-bold "
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default About;
