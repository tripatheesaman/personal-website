import React from "react";
import webDevImg from "../images/Javascript.png";
import penRulerImg from "../images/ruler-pen.png";
import htmlTagImg from "../images/code.png";

const About = () => {
  const skills = [
    {
      name: "UI & UX DESIGNING",
      image: htmlTagImg,
    },
    { name: "WEB DEVELOPMENT", image: webDevImg },
    {
      name: "POSTER AND LOGO DESIGNS",
      image: penRulerImg,
    },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-black md:w-2/3 leading-[2]">
        Welcome to my portfolio website! I'm Saman Tripathee, an aspiring full
        stack developer passionate about innovation and learning. I thrive on
        solving complex problems and delivering cutting-edge solutions. I'm
        excited to contribute to meaningful projects and collaborate with
        experienced professionals.Let's connect and explore potential
        collaborations on this exciting journey together.
      </p>
      <div className="md:flex my-7 items-center">
        <p className="text-black text-2xl md:ml-5">My Skills:</p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-black hover:bg-gray-600 flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
