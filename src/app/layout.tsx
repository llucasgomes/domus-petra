import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Domus Petra",
  description:
    "Domus Petra - Palestras, Treinamentos e Consultoria  +55 47 997071177",
  keywords:
    "palestras, palestra, consultoria, treinamentos, gestão, financeira, excelência, atendimento, planejamento, financeiro, inovação, design thinking, metodologias, empreendedorismo, desenvolvimento, lean manufacturing, liderança, times, trabalho em equipe, business innovation, smart cities, networking, ferramentas, qualidade, lucro, crescimento",
  authors: [
    { name: "Lucas Gomes", url: "https://www.linkedin.com/in/llucasgomess/" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
