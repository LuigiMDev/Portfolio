import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about-me" className="relative text-white overflow-hidden mb-10">
      <div className="h-12 bg-gradient-to-b from-transparent to-[#0d0d1d] absolute inset-x-0 top-0" />
      <div className="h-12 bg-gradient-to-b to-transparent from-[#0d0d1d] absolute inset-x-0 bottom-0" />
      <div className="absolute top-12 left-0 right-0 bottom-12 bg-gradient-to-b from-[#0d0d1d] via-[#111122] to-[#0d0d1d]"></div>

      <div className="relative z-10 px-10 py-15 max-w-[1410px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Quem sou <span className="text-purple-500">eu?</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16 justify-center">
          <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden shadow-[0_0_60px_rgba(147,51,234,0.3)]">
            <Image
              src="/Luigi_Image2.png"
              alt="Luigi Matheus"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-sm opacity-85 leading-relaxed max-w-3xl text-center lg:text-left">
            <p className="mb-4">
              Olá, sou <strong>Luigi Matheus</strong>! Developer em formação,
              com foco em <strong>React.js</strong> e <strong>Next.js</strong>.
            </p>
            <p className="mb-4">
              Atualmente cursando Engenharia de Software na Estácio (Palhoça) e
              com formação no Programa Jovem Programador do Senac, estou em
              constante busca por aprimoramento e desenvolvimento profissional.
            </p>
            <p className="mb-4">
              Tenho experiência em desenvolvimento Web com foco em tecnologias
              modernas como <strong>React</strong>, <strong>Next.js</strong>,{" "}
              <strong>Vite</strong>, <strong>HTML5</strong>,{" "}
              <strong>CSS3</strong>, <strong>Tailwind</strong>,{" "}
              <strong>JavaScript</strong>, <strong>Typescript</strong> e{" "}
              <strong>Node.js</strong>, além de conhecimentos em{" "}
              <strong>MySQL</strong>, <strong>C#</strong> e controle de versões
              com <strong>Git/GitHub</strong>.
            </p>
            <p>
              Sou apaixonado por tecnologia e pela criação de soluções que
              melhoram a experiência do usuário. Me considero curioso,
              organizado e com facilidade de adaptação e aprendizado constante.
            </p>
          </div>
        </div>

        {/* Cards com tópicos */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              🚀 Desenvolvimento
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Trabalho com tecnologias como React.js, Next.js, Node.js,
              TypeScript, Tailwind e mais para construir experiências modernas e
              performáticas.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              🎓 Formação
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Cursando Engenharia de Software na Estácio e formado pelo programa
              Jovem Programador (Senac), estou sempre buscando evoluir
              tecnicamente.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              💡 Mentalidade
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Gosto de resolver problemas reais com código, aprender rápido e
              colaborar em equipe. Sou movido por desafios e inovação constante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
