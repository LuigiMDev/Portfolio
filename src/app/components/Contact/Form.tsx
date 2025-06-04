"use client";
import { Send } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Form = () => {
  const schema = z.object({
    name: z
      .string()
      .nonempty("O nome não pode estar vazio!")
      .max(50, "O nome deve ter no máximo 50 caracteres!"),
    email: z.string().email("E-mail inválido!"),
    msg: z
      .string()
      .min(15, "A mensagem deve ter pelo menos 15 caracteres!")
      .max(1000, "A mensagem deve ter no máximo 1000 caracteres!"),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    emailjs
      .send("service_45eduaw", "template_0vbvz2g", data, {
        publicKey: "2d1pI0t2U0udFnJ-R",
      })
      .then(
        () => {
          toast.success("E-mail enviado com sucesso!");
          reset()
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Ocorreu um erro ao enviar o e-mail!");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="w-full">
        <label htmlFor="name" className="font-semibold block text-sm mb-2">
          Seu nome
        </label>
        <input
          id="name"
          type="text"
          minLength={1}
          maxLength={50}
          required
          placeholder="Pedro Pascal..."
          className="px-4 py-2 bg-slate-950 border border-white/10 rounded-xl focus:outline-1 outline-purple-500 w-full"
          {...register("name")}
        />
      </div>
      <div className="w-full">
        <label htmlFor="email" className="font-semibold block text-sm mb-2">
          Seu e-mail
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="pedropascal@gmail.com"
          className="px-4 py-2 bg-slate-950 border border-white/10 rounded-xl focus:outline-1 outline-purple-500 w-full"
          {...register("email")}
        />
      </div>
      <div className="w-full">
        <label htmlFor="message" className="font-semibold block text-sm mb-2">
          Sua Mensagem
        </label>
        <textarea
          id="message"
          minLength={15}
          maxLength={1000}
          required
          placeholder="Olá, eu gostaria de falar sobre..."
          className="px-4 py-2 bg-slate-950 border border-white/10 rounded-xl focus:outline-1 outline-purple-500 w-full resize-none h-32"
          {...register("msg")}
        />
      </div>
      <button
        type="submit"
        className="w-full cursor-pointer flex items-center justify-center gap-2 relative z-10 bg-purple-700 px-3 py-2 text-xl font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-200"
      >
        <Send /> Enviar
      </button>
    </form>
  );
};

export default Form;
