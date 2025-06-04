import React from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMysql, SiPrisma } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="mb-10 scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-center">Minhas <span className="text-purple-500">Habilidades</span></h2>
      <div className="flex justify-center flex-wrap px-3 lg:px-10 text-white items-center gap-3">
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <RiHtml5Fill className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">HTML5</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <RiCss3Fill className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">CSS3</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <RiTailwindCssFill className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">Tailwind</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <RiJavascriptFill className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">Javascript</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <BiLogoTypescript className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">Typescript</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <RiReactjsFill className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">React.js</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <RiNextjsFill className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">Next.js</small>
        </div>

        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <RiNodejsFill className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">Node.js</small>
        </div>

        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <SiPrisma className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">PrismaORM</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <SiMysql className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">MySQL</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all cursor-pointer duration-200">
          <BiLogoPostgresql className="w-12 h-12 md:w-16 md:h-16" />
          <small className="font-semibold">PostgreSQL</small>
        </div>
      </div>
    </section>
  );
};

export default Skills;
