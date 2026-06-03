"use client";

import { useState } from "react";
import Image from "next/image";
import { Vehicle } from "@/lib/mock-data";
import { PageTransition } from "@/components/layout/PageTransition";
import { ArrowLeft, Settings, SlidersHorizontal, MapPin, CheckCircle, MessageCircle, Calculator } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function VehicleDetailsClient({ vehicle }: { vehicle: Vehicle }) {
  const [downPayment, setDownPayment] = useState<number>(vehicle.price * 0.3); // 30% default
  const [installments, setInstallments] = useState<number>(36);
  
  const interestRate = 0.015; // 1.5% ao mês fictício
  const financedAmount = vehicle.price - downPayment;
  
  // Fórmula simples PMT para financiamento: PMT = P * r * (1+r)^n / ((1+r)^n - 1)
  const installmentValue = financedAmount > 0 
    ? (financedAmount * interestRate * Math.pow(1 + interestRate, installments)) / (Math.pow(1 + interestRate, installments) - 1)
    : 0;

  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(vehicle.price);
  const formattedDownPayment = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(downPayment);
  const formattedInstallment = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(installmentValue);

  return (
    <PageTransition>
      <div className="bg-background-dark min-h-screen pb-24">
        {/* Breadcrumb & Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <Link href="/estoque" className="inline-flex items-center text-text-secondary hover:text-brand-red-light transition-colors mb-6 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Estoque
          </Link>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <span className="text-brand-red-light font-bold tracking-widest text-sm uppercase mb-1 block">
                {vehicle.brand}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                {vehicle.model}
              </h1>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-text-secondary uppercase tracking-wider mb-1">Preço à vista</p>
              <p className="text-4xl font-bold text-text-primary">{formattedPrice}</p>
            </div>
          </div>
        </div>

        {/* Gallery Hero */}
        <div className="w-full h-[50vh] md:h-[70vh] relative mb-12">
          <Image
            src={vehicle.featured_image}
            alt={vehicle.model}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Details & Description */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Key Specs */}
              <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-8">
                <div className="bg-background-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <Settings className="w-8 h-8 text-brand-red-light mb-3" />
                  <span className="text-sm text-text-secondary mb-1">Ano</span>
                  <span className="text-xl font-bold text-text-primary">{vehicle.year}</span>
                </div>
                <div className="bg-background-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <SlidersHorizontal className="w-8 h-8 text-brand-red-light mb-3" />
                  <span className="text-sm text-text-secondary mb-1">Câmbio</span>
                  <span className="text-xl font-bold text-text-primary">{vehicle.transmission}</span>
                </div>
                <div className="bg-background-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <MapPin className="w-8 h-8 text-brand-red-light mb-3" />
                  <span className="text-sm text-text-secondary mb-1">Quilometragem</span>
                  <span className="text-xl font-bold text-text-primary">{vehicle.mileage.toLocaleString('pt-BR')} km</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Sobre o Veículo</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {vehicle.description}
                </p>
              </div>

              {/* Ficha Técnica Mockup */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">Ficha Técnica</h2>
                <div className="bg-background-card rounded-2xl border border-white/5 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                    <div className="p-6">
                      <ul className="space-y-4">
                        <li className="flex justify-between items-center"><span className="text-text-secondary">Motorização</span><span className="font-semibold text-text-primary">V8 Biturbo</span></li>
                        <li className="flex justify-between items-center"><span className="text-text-secondary">Combustível</span><span className="font-semibold text-text-primary">Gasolina</span></li>
                        <li className="flex justify-between items-center"><span className="text-text-secondary">Potência (cv)</span><span className="font-semibold text-text-primary">585 cv</span></li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-4">
                        <li className="flex justify-between items-center"><span className="text-text-secondary">Torque (kgf.m)</span><span className="font-semibold text-text-primary">86,7</span></li>
                        <li className="flex justify-between items-center"><span className="text-text-secondary">Tempo 0-100 (s)</span><span className="font-semibold text-text-primary">4,5 s</span></li>
                        <li className="flex justify-between items-center"><span className="text-text-secondary">Direção</span><span className="font-semibold text-text-primary">Elétrica</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Simulator & CTA */}
            <div className="space-y-8">
              
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-brand-red-dark to-brand-red p-8 rounded-2xl shadow-xl shadow-brand-red/10 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Interessou?</h3>
                <p className="text-white/80 mb-6 text-sm">Fale com um de nossos consultores agora mesmo e agende uma visita.</p>
                <a 
                  href={`https://wa.me/5511996164643?text=Olá, tenho interesse no ${vehicle.brand} ${vehicle.model} (${vehicle.year}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-brand-red-dark hover:bg-gray-100 flex items-center justify-center py-4 rounded-xl font-bold transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </a>
              </div>

              {/* Financing Simulator */}
              <div className="bg-background-card p-8 rounded-2xl border border-white/5">
                <div className="flex items-center mb-6">
                  <Calculator className="w-5 h-5 text-brand-red-light mr-2" />
                  <h3 className="text-xl font-bold text-text-primary">Simulador de Financiamento</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-text-secondary">Entrada</label>
                      <span className="text-sm font-bold text-brand-red-light">{formattedDownPayment}</span>
                    </div>
                    <input 
                      type="range" 
                      min={vehicle.price * 0.1} 
                      max={vehicle.price * 0.9} 
                      step={5000}
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full accent-brand-red-light"
                    />
                    <div className="flex justify-between mt-1 text-xs text-text-secondary/50">
                      <span>10%</span>
                      <span>90%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Parcelas</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[12, 24, 36, 48].map((num) => (
                        <button
                          key={num}
                          onClick={() => setInstallments(num)}
                          className={`py-2 rounded-lg text-sm font-medium border transition-colors ${
                            installments === num 
                              ? "bg-brand-red/20 border-brand-red-light text-brand-red-light" 
                              : "bg-background-dark border-white/10 text-text-secondary hover:border-white/30"
                          }`}
                        >
                          {num}x
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-text-secondary mb-1">Valor da Parcela Estimada</p>
                    <p className="text-3xl font-bold text-text-primary mb-2">{formattedInstallment}</p>
                    <p className="text-xs text-text-secondary/60">
                      *Cálculo estimativo com taxa de 1,5% a.m. Sujeito à análise de crédito.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-background-card p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-center text-text-secondary text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Veículo periciado e com laudo cautelar aprovado.
                </div>
                <div className="flex items-center text-text-secondary text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Garantia de 1 ano válida em todo o Brasil.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
