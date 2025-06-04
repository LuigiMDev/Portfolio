import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const dmSans = DM_Sans({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Portfólio - Luigi Matheus",
  description: "Explore os projetos, habilidades e experiências de Luigi Matheus — desenvolvedor fullstack apaixonado por criar soluções modernas com React, Next.js, Node.js e muito mais.",
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
