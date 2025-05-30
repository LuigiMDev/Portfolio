"use client";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mode, setMode] = useState<string | null>(null);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const resolvedTheme = localTheme || (prefersDark ? "dark" : "light");

    document.body.dataset.theme = resolvedTheme;
    setMode(resolvedTheme);
  }, []);

  const handleSwitchMode = () => {
    const newTheme = mode === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.body.dataset.theme = newTheme;
    setMode(newTheme);
  };

  if (!mode) return null;

  return (
    <button
      className={`w-14 h-fit flex justify-between rounded-full bg-background2 relative p-1 before:absolute before:h-5 before:w-5 before:rounded-full before:left-1 before:bg-white ${
        mode === "light"
          ? "before:left-[calc(100%-24px)]"
          : "before:left-1"
      } before:transition-all before:duration-300`}
      onClick={handleSwitchMode}
    >
      <Moon
        className={`h-5 w-5 text-black ${
          mode === "dark" ? "opacity-0" : "opacity-100"
        } transition-all`}
      />
      <Sun
        className={`h-5 w-5 text-white ${
          mode === "light" ? "opacity-0" : "opacity-100"
        } transition-all`}
      />
    </button>
  );
};

export default ThemeSwitch;
