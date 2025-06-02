import React from "react";
import { getProjects } from "../helpers/getProjects";
import Image from "next/image";

const Projects = async () => {
  const projects = await getProjects();
  return (
    <div className="px-10">
      <div className="max-w-[1410px] bg-white/5 backdrop-blur-sm border border-white/10 h-screen px-4 md:px-10 py-5 rounded-xl">
        <h2 className="text-5xl font-semibold mb-10 text-center">Projetos</h2>

        <div className="grid grid-cols-auto-fill gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-background/50 rounded-lg p-3">
              <Image
                src={project.media}
                width={300}
                height={300}
                alt={project.name}
                className="mx-auto w-full mb-2"
              />
              <div className="">
                <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
