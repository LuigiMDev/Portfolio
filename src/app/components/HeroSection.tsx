import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between w-full h-full items-center px-10'>
        <div className='text-white max-w-[500px]'>
            <span className='text-lg opacity-70'>Olá, sou o</span>
            <h1 className='text-7xl font-semibold mb-3'>Luigi Matheus</h1>
            <p className='text-sm opacity-85'>Desenvolvedor Web com foco em React.js, Next.js, Vite, HTML5, CSS3, Tailwind, JavaScript, Typescript e Node.js, além de conhecimentos em MySQL, C# e versionamento de código com Git/GitHub.</p>
        </div>
        <div>
            <Image src="/Luigi_Image.png" className='transition-all duration-500 mix-blend-overlay' height={700} width={455} alt='Luigi' />
        </div>
    </div>
  )
}

export default HeroSection