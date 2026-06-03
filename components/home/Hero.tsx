"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Car Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-red/20 border border-brand-red-light/30 text-brand-red-light text-sm font-semibold tracking-wider mb-6">
            EXPERIÊNCIA PREMIUM
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
            Descubra a Arte da <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-red-600">
              Alta Performance
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Veículos exclusivos para quem não abre mão de sofisticação, potência e um atendimento de excelência.
          </p>
        </motion.div>

        {/* Smart Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-3xl bg-background-card/80 backdrop-blur-md p-2 rounded-full border border-brand-red-dark/30 shadow-2xl flex items-center"
        >
          <div className="flex-grow flex items-center px-4">
            <Search className="w-5 h-5 text-text-secondary mr-3" />
            <input
              type="text"
              placeholder="Busque por marca, modelo ou ano..."
              className="w-full bg-transparent text-text-primary placeholder:text-text-secondary/70 focus:outline-none py-3"
            />
          </div>
          <button className="bg-brand-red hover:bg-brand-red-light text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            Buscar
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center space-x-2 text-text-secondary text-sm font-medium bg-background-dark/40 px-4 py-2 rounded-full border border-white/5"
        >
          <div className="flex space-x-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span>4,9 Estrelas no Google — 128 avaliações</span>
        </motion.div>
      </div>
    </section>
  );
}
