import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const dmSans = DM_Sans({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Portfólio - Luigi Matheus",
  description:
    "Explore os projetos, habilidades e experiências de Luigi Matheus — desenvolvedor fullstack especializado em React, Next.js, Node.js, TypeScript e tecnologias modernas da web.",
  keywords: [
    "Luigi Matheus",
    "Desenvolvedor Fullstack",
    "Portfólio",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Desenvolvedor Web",
    "Frontend",
    "Backend",
    "Programador"
  ],
  authors: [{ name: "Luigi Matheus" }],
  creator: "Luigi Matheus",
  openGraph: {
    title: "Portfólio - Luigi Matheus",
    description:
      "Veja os projetos e habilidades de Luigi Matheus, desenvolvedor fullstack com experiência em aplicações web modernas.",
    siteName: "Portfólio Luigi Matheus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imagem de capa do portfólio de Luigi Matheus"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio - Luigi Matheus",
    description:
      "Desenvolvedor fullstack apaixonado por React, Next.js e Node.js. Veja meus projetos e entre em contato!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  category: "technology",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${dmSans.className} antialiased`}
      >
        <ToastContainer position="bottom-right" pauseOnHover theme="dark" />
        {children}
      </body>
    </html>
  );
}
