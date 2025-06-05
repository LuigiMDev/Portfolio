import AboutMe from "./components/AboutMe";
import BackgroundVideo from "./components/BackgroundVideo";
import Header from "./components/Header";
import HeroSection from "./components/Hero/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col justify-center items-center">
      <BackgroundVideo />
      <Header />
      <main className="w-full max-w-[1410px] mx-auto">
        <HeroSection />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
