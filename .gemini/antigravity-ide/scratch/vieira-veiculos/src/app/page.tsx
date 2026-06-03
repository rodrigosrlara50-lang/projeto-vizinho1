import { Hero } from "@/components/home/Hero";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { PageTransition } from "@/components/layout/PageTransition";
import { mockVehicles } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Hero />
        
        {/* Featured Vehicles Section */}
        <section className="py-24 bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <span className="text-brand-red-light font-bold tracking-widest text-sm uppercase mb-2 block">
                  Destaques
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                  Veículos em Evidência
                </h2>
              </div>
              <Link 
                href="/estoque" 
                className="mt-4 md:mt-0 flex items-center text-text-secondary hover:text-brand-red-light transition-colors group font-medium"
              >
                Ver todo o estoque
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockVehicles.slice(0, 3).map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <section className="py-24 bg-background-card border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                  A excelência não é um ato, <br />
                  <span className="text-brand-red-light italic font-normal">é um hábito.</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  Na Vieira Veículos, cada detalhe importa. Nossa curadoria rigorosa garante que você tenha acesso apenas aos automóveis mais excepcionais do mercado, proporcionando uma experiência de compra tão memorável quanto a condução de nossos veículos.
                </p>
                <Link href="/sobre">
                  <button className="bg-white text-background-dark hover:bg-brand-red hover:text-white transition-colors px-8 py-4 rounded-full font-bold shadow-lg">
                    Conheça Nossa História
                  </button>
                </Link>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1920" 
                  alt="Interior de carro de luxo" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
