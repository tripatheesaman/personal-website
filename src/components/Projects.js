import React from "react";
import notesPhoto from "../images/notes.png";

const Projects = () => {
  const projects = [
    {
      title: "Notes",
      description:
        "A full stack application where you can create and assign notes in an organization.",
      stack:
        "Stack: React, React-Redux, RTK Query, MongoDB, Mongoose, Node, Express, Vanilla CSS",
      photo: notesPhoto,
      gitHublink: "https://github.com/tripatheesaman/notes-frontend",
      liveLInk: "https://notes-lbis.onrender.com",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 md:w-3/4 leading-[2]">Here are some of my projects:</p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-black p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <span className="text-white text-sm mt-5">{project.stack}</span>
              <div className="mt-5">
                <a href={project.gitHublink} target="_blank" rel="noreferrer">
                  <button className="btn transition-all duration-500 bg-white py-2 px-4 rounded hover:bg-black hover:text-white">
                    GitHub
                  </button>
                </a>
                <a href={project.liveLInk} target="_blank" rel="noreferrer">
                  <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                    Live
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
