import React from "react";
import { getProjects } from "../helpers/getProjects";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const Projects = async () => {
  const projects = await getProjects();
  return (
    <section id="projects" className="px-3 lg:px-10 mb-10">
      <div className="max-w-[1410px] bg-white/5 backdrop-blur-sm border border-white/10 px-4 md:px-10 py-5 rounded-xl">
        <h2 className="text-5xl font-semibold mb-5 text-center">
          Projetos em <span className="text-purple-500">Destaque</span>
        </h2>
        <p className="mb-10 text-lg text-center max-w-[1000px] mx-auto">
          Confira alguns dos meus principais projetos, onde aplico na prática as
          tecnologias que domino para criar soluções modernas, funcionais e bem
          estruturadas.
        </p>

        <div className="grid grid-cols-auto-fill gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card/50 rounded-lg p-3 flex flex-col"
            >
              <div className="overflow-hidden rounded-md">
                <Image
                  src={project.media}
                  width={300}
                  height={220}
                  alt={project.name}
                  className="mx-auto w-full mb-2 aspect-video object-cover  hover:scale-110 transition-all duration-500 rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.name}
                  </h3>
                  <ul className="flex gap-2 mb-4 flex-wrap pointer-events-none ">
                    {project.topics?.map((topic) => (
                      <li
                        key={topic}
                        className="p-1 bg-purple-600 rounded-full text-sm font-semibold"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <p className="mb-4">{project.description}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href={project.homepage}
                    target="_blank"
                    className="bg-purple-600/50 hover:bg-purple-600 transition-all block p-1 rounded-xl"
                    aria-label="Link do projeto"
                  >
                    <ExternalLink />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="bg-purple-600/50 hover:bg-purple-600 transition-all block p-1 rounded-xl"
                      aria-label="Link do Github do projeto"
                    >
                      <Github />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
