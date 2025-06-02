'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const ButtonGlow = () => {
  return (
     <button className={`relative cursor-pointer p-3 rounded-full bg-slate-800 flex gap-1 font-semibold text-primary before:rounded-full after:rounded-full after:blur-lg GlowSpin group items-center`}>
        <span className='absolute -z-[1] inset-1 bg-primary group-hover:blur-lg rounded-full transition-all duration-200 '/>
       Entre em contato <ArrowRight /></button>
  )
}

export default ButtonGlow