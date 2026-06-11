import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reina Studio Car Detailing | Londrina-PR",
  description:
    "Especializada em cuidar do seu carro. Lavagem detalhada, higienização, polimento técnico e muito mais em Londrina-PR. Fone: 43 99623-1475",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${bebas.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
