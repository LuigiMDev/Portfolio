import React from "react";

const AboutMe = () => {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="h-12 bg-gradient-to-b from-transparent to-[#0d0d1d] absolute inset-x-0 top-0" />
      <div className="absolute top-12 left-0 right-0 bottom-0 bg-gradient-to-b from-[#0d0d1d] via-[#111122] to-[#141425]"></div>

      <div className="relative z-10 px-10 pt-15 max-w-[1410px] mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
        <p className="mb-2">
          Olá, sou Luigi Matheus! Developer em formação, com foco em React.js e
          Next.js.
        </p>

        <p className="mb-2">
          Atualmente cursando Engenharia de Software na Estácio (Palhoça) e com
          formação no Programa Jovem Programador do Senac, estou em constante
          busca por aprimoramento e desenvolvimento profissional. Tenho
          experiência em desenvolvimento Web, com foco em React.js, Next.js,
          Vite, HTML5, CSS3, Tailwind, JavaScript, Typescript e Node.js, além de
          conhecimentos em MySQL, C# e versionamento de código com Git/GitHub.
        </p>

        <p className="mb-2">
          Sou apaixonado por tecnologia e pelo desenvolvimento de soluções que
          impactam positivamente a experiência do usuário. Tenho facilidade para
          aprender novas tecnologias, sou organizado e focado em resolver
          problemas de forma eficiente.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
