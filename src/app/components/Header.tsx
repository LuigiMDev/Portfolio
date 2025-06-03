'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [headerEffect, setHeaderEffect] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setHeaderEffect(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 px-10 py-3 z-50 h-20  flex items-center transition-all border-b ${headerEffect ? "border-b-white/10 backdrop-blur-md" : "border-b-transparent"}`}>
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
  );
};

export default Header;
