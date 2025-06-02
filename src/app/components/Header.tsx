import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 backdrop-blur-md px-10 py-3 z-50 h-20  flex items-center">
        <nav className="mx-auto max-w-[1410px] flex justify-between items-center w-full">
          <Image src="/LM_logo.png" width={50} height={50} alt="LM" />
          <ul className="flex gap-5">
            <li>Início</li>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <div className="h-20 w-full" />
    </>
  );
};

export default Header;
