import Image from "next/image";
import React from "react";
import ButtonGlow from "./ButtonGlow";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full h-[100dvh] items-center px-10 max-w-[1410px] gap-y-6 pb-5 pt-25 lg:pt-5">
      <div className="text-white max-w-[500px] flex flex-col items-center lg:items-start">
        <div>
          <span className="text-lg opacity-70 text-center lg:text-left block">
            Hello World! 👋
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-3 text-center lg:text-left">
            Luigi Matheus
          </h1>
        </div>
        <p className="text-xs lg:text-sm opacity-85 mb-5 text-center lg:text-left">
          Desenvolvedor Web com foco em React.js, Next.js, Vite, HTML5, CSS3,
          Tailwind, JavaScript, Typescript e Node.js, além de conhecimentos em
          MySQL, C# e versionamento de código com Git/GitHub.
        </p>
        <ButtonGlow />
      </div>
      <div className="rounded-full before:rounded-full after:rounded-full after:blur-lg aspect-square relative w-full lg:w-[455px] max-w-[320px] lg:max-w-[455px] drop-shadow-[0_0_60px_rgba(147,51,234,0.3)]">
        <Image
          src="/Luigi_Image.png"
          className="object-cover"
          alt="Luigi"
          fill
        />
      </div>
    </div>
  );
};

export default HeroSection;
