import BackgroundVideo from "./components/BackgroundVideo";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col justify-center items-center">
      <BackgroundVideo />
      <Header />
      <main className="w-full">
        <HeroSection />
        <section className="relative text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/0 via-[#0f0f1f]  to-[#0f0f1f]"></div>

          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>

          <div className="relative z-10 px-6 py-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
            <p className="text-lg text-gray-300">
              Aqui começa a seção com mais conteúdo...
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
