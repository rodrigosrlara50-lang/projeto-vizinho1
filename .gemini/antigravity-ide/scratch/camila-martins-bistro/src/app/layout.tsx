import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Camila Martins Confeitaria & Bistrô",
  description: "Confeitaria e bistrô com um ambiente acolhedor e cardápio incrível em Salto - SP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#FAF9F6] text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
