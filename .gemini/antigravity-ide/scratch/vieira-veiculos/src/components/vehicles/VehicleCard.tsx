"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Settings, SlidersHorizontal, MapPin } from "lucide-react";
import { Vehicle } from "@/lib/mock-data";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  // Format price to BRL
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(vehicle.price);

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-background-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-red-dark/50 transition-colors shadow-xl group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={vehicle.featured_image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-card to-transparent opacity-80" />
        
        <div className="absolute top-4 left-4">
          <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Premium
          </span>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-brand-red-light font-semibold text-sm uppercase tracking-wider mb-1">
              {vehicle.brand}
            </p>
            <h3 className="text-xl font-bold text-text-primary line-clamp-1">
              {vehicle.model}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-text-primary block">
              {formattedPrice}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="flex items-center text-text-secondary text-sm">
            <Settings className="w-4 h-4 mr-2 text-brand-red-light" />
            {vehicle.year}
          </div>
          <div className="flex items-center text-text-secondary text-sm">
            <SlidersHorizontal className="w-4 h-4 mr-2 text-brand-red-light" />
            {vehicle.transmission}
          </div>
          <div className="flex items-center text-text-secondary text-sm">
            <MapPin className="w-4 h-4 mr-2 text-brand-red-light" />
            {vehicle.mileage.toLocaleString('pt-BR')} km
          </div>
        </div>

        <Link href={`/veiculo/${vehicle.id}`} className="block w-full">
          <button className="w-full bg-background-dark hover:bg-brand-red text-text-primary font-medium py-3 rounded-xl border border-white/10 hover:border-brand-red transition-all duration-300">
            Ver Detalhes
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
