"use client";
import { AppWindowMac } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [headerEffect, setHeaderEffect] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHeaderEffect(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(menuClicked);
  }, [menuClicked]);

  return (
    <header
      className={`fixed inset-x-0 top-0 px-10 py-3 z-50 h-20  flex items-center transition-all border-b ${
        headerEffect
          ? "border-b-white/10 backdrop-blur-md"
          : "border-b-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1410px] flex justify-between items-center w-full">
        <a href="#init">
          <Image src="/LM_logo.png" width={50} height={50} alt="LM" />
        </a>
        <div
            className={`fixed w-screen h-screen z-10 inset-0 ${
              menuClicked ? "block" : "hidden"
            } lg:hidden pointer-events-auto`}
            onClick={() => {
              setMenuClicked(false);
            }}
          />
        <div
          className="relative group"
          aria-label="Abrir menu"
          onClick={() => setMenuClicked((prev) => !prev)}
        >
          <AppWindowMac className="cursor-pointer" />
          <ul
            className={`flex absolute bg-slate-800 right-0 top-0 z-20 lg:clip-circle-initial group-hover:lg:clip-circle-final transition-all duration-500 rounded-lg h-64 w-64 flex-col p-5 ${
              menuClicked ? "clip-circle-final" : "clip-circle-initial"
            }`}
          >
            <div className="flex flex-col flex-grow gap-5 font-semibold">
              <li>
                <a href="#init">Início</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#about-me">Sobre mim</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </div>
            <div className="flex gap-x-4">
              <div className="p-2 bg-red-500 rounded-full" />
              <div className="p-2 bg-yellow-400 rounded-full" />
              <div className="p-2 bg-green-500 rounded-full" />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
