import AboutMe from "./components/AboutMe";
import BackgroundVideo from "./components/Hero/BackgroundVideo";
import Header from "./components/Header";
import HeroSection from "./components/Hero/HeroSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col justify-center items-center">
      <BackgroundVideo />
      <Header />
      <main className="w-full">
        <HeroSection />
        <Projects />
        <AboutMe />
      </main>
    </div>
  );
}
