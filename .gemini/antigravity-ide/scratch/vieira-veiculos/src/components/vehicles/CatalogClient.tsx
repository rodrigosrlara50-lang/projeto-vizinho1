"use client";

import { useState, useMemo } from "react";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { mockVehicles } from "@/lib/mock-data";
import { PageTransition } from "@/components/layout/PageTransition";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CatalogClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const brands = ["Todas", ...Array.from(new Set(mockVehicles.map((v) => v.brand)))];

  const filteredVehicles = useMemo(() => {
    return mockVehicles.filter((vehicle) => {
      const matchSearch =
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchBrand = selectedBrand === "Todas" || vehicle.brand === selectedBrand;
      
      const matchPrice = maxPrice === "" || vehicle.price <= maxPrice;

      return matchSearch && matchBrand && matchPrice;
    });
  }, [searchTerm, selectedBrand, maxPrice]);

  return (
    <PageTransition>
      <div className="bg-background-dark min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Estoque Premium
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Navegue pelo nosso acervo exclusivo de veículos de alta performance. Utilize os filtros para encontrar o modelo ideal.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-background-card p-6 rounded-2xl border border-white/5 sticky top-28">
                <div className="flex items-center mb-6 text-text-primary">
                  <Filter className="w-5 h-5 mr-2 text-brand-red-light" />
                  <h2 className="text-xl font-bold">Filtros</h2>
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Buscar Modelo
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                      <input
                        type="text"
                        placeholder="Ex: 911 Carrera..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-background-dark border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors"
                      />
                    </div>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Marca
                    </label>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full bg-background-dark border border-white/10 rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors appearance-none"
                    >
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Preço Máximo (R$)
                    </label>
                    <input
                      type="number"
                      placeholder="Ex: 1500000"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : "")}
                      className="w-full bg-background-dark border border-white/10 rounded-lg py-2.5 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors"
                    />
                  </div>

                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedBrand("Todas");
                      setMaxPrice("");
                    }}
                    className="w-full py-3 bg-brand-red/10 text-brand-red-light hover:bg-brand-red/20 font-medium rounded-lg transition-colors border border-brand-red-light/20 mt-4"
                  >
                    Limpar Filtros
                  </button>
                </div>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="w-full lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-text-secondary font-medium">
                  {filteredVehicles.length} {filteredVehicles.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}
                </span>
                
                <div className="flex items-center space-x-2 text-text-secondary text-sm">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Ordenar por: Recentes</span>
                </div>
              </div>

              {filteredVehicles.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <AnimatePresence>
                    {filteredVehicles.map((vehicle) => (
                      <motion.div
                        key={vehicle.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <VehicleCard vehicle={vehicle} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <div className="bg-background-card border border-white/5 rounded-2xl p-12 text-center">
                  <p className="text-text-secondary text-lg mb-4">Nenhum veículo encontrado com os filtros atuais.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedBrand("Todas");
                      setMaxPrice("");
                    }}
                    className="text-brand-red-light hover:text-brand-red transition-colors font-medium"
                  >
                    Limpar filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
