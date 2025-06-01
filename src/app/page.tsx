import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch";
import BackgroundVideo from "./components/BackgroundVideo";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      <BackgroundVideo />
      <ThemeSwitch />
      <HeroSection />
    </div>
  );
}
