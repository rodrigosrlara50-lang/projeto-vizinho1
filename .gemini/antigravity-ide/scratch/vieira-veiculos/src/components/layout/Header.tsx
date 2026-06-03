"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-brand-red-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-2xl font-bold italic tracking-wider text-text-primary">
                VIEIRA
              </span>
              <span className="text-sm font-medium italic tracking-widest text-brand-red-light">
                VEÍCULOS
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation & Contacts */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link href="/estoque" className="text-text-secondary hover:text-text-primary transition-colors text-sm uppercase tracking-wider font-semibold">
                Estoque
              </Link>
              <Link href="/sobre" className="text-text-secondary hover:text-text-primary transition-colors text-sm uppercase tracking-wider font-semibold">
                Sobre Nós
              </Link>
            </nav>

            <div className="flex items-center space-x-6 border-l border-brand-red-dark/30 pl-6">
              <div className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors">
                <Phone className="w-4 h-4 text-brand-red-light" />
                <span className="text-sm font-medium">(11) 4013-3180</span>
              </div>
              
              <a 
                href="https://wa.me/5511996164643" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-primary bg-brand-red hover:bg-brand-red-light transition-colors px-4 py-2 rounded-full font-medium text-sm shadow-lg shadow-brand-red/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>(11) 99616-4643</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Simple hamburger icon for mobile (could be expanded later) */}
            <button className="text-text-secondary hover:text-text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
