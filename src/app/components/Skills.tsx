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
    <section className="">
      <h2 className="text-5xl font-semibold mb-10 text-center">Skills</h2>
      <div className="flex justify-center flex-wrap px-3 lg:px-10 text-white items-center gap-3">
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <RiHtml5Fill className="w-16 h-16 " />
          <small className="font-semibold">HTML5</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <RiCss3Fill className="w-16 h-16" />
          <small className="font-semibold">CSS3</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <RiTailwindCssFill className="w-16 h-16" />
          <small className="font-semibold">Tailwind</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <RiJavascriptFill className="w-16 h-16" />
          <small className="font-semibold">Javascript</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <BiLogoTypescript className="w-16 h-16" />
          <small className="font-semibold">Typescript</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <RiReactjsFill className="w-16 h-16" />
          <small className="font-semibold">React.js</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <RiNextjsFill className="w-16 h-16" />
          <small className="font-semibold">Next.js</small>
        </div>

        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <RiNodejsFill className="w-16 h-16" />
          <small className="font-semibold">Node.js</small>
        </div>

        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <SiPrisma className="w-16 h-16" />
          <small className="font-semibold">PrismaORM</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <SiMysql className="w-16 h-16" />
          <small className="font-semibold">MySQL</small>
        </div>
        <div className="flex flex-col items-center hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)] transition-all">
          <BiLogoPostgresql className="w-16 h-16" />
          <small className="font-semibold">PostgreSQL</small>
        </div>
      </div>
    </section>
  );
};

export default Skills;
