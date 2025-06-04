import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

import Form from "./Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-fit mx-auto px-3 lg:px-10 mb-10 scroll-mt-20"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-5 text-center">
        Entre em <span className="text-purple-500">contato</span>
      </h2>
      <p className="mb-10 text-lg text-center max-w-5xl mx-auto">
        Tem algum projeto em mente ou quer colaborar? Sinta-se livre para entrar
        em contato. Estou sempre aberto para discutir sobre novas oportunidades!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 lg:border-r-0 p-5 rounded-3xl md:rounded-r-none flex flex-col">
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-5">
            Informações de contato
          </h3>

          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-slate-800 rounded-full text-purple-500">
                <Mail />
              </div>
              <div>
                <p className="text-sm">E-mail</p>
                <p className="text-sm">luigicumaru@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-slate-800 rounded-full text-purple-500">
                <Phone />
              </div>
              <div>
                <p className="text-sm">Telefone</p>
                <p className="text-sm">+55 (48) 99151-6704</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-slate-800 rounded-full text-purple-500">
                <MapPin />
              </div>
              <div>
                <p className="text-sm">Localização</p>
                <p className="text-sm">Palhoça - SC</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p>Se conecte comigo!</p>
            <div className="flex gap-3">
              <a
                aria-label="Linkedin do Luigi"
                href="https://www.linkedin.com/in/luigimdev/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Linkedin />
              </a>
              <a
                aria-label="Github do Luigi"
                href="https://github.com/luigimdev"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-3xl md:rounded-l-none flex flex-col bg-[#111122] border border-white/10 md:border-l-0 ">
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-5">
            Mande uma mensagem
          </h3>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
