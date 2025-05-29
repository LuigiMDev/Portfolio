import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch";
import BackgroundVideo from "./components/BackgroundVideo";

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <BackgroundVideo />
      <ThemeSwitch />
    </div>
  );
}
