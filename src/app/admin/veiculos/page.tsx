"use client";

import { mockVehicles } from "@/lib/mock-data";
import { Edit, Trash2, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function VeiculosAdminPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVehicles = mockVehicles.filter(v => 
    v.model.toLowerCase().includes(searchTerm.toLowerCase()) || 
    v.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Gerenciar Estoque</h1>
          <p className="text-text-secondary">Adicione, edite ou remova veículos do catálogo.</p>
        </div>
        <Link 
          href="/admin/veiculos/novo"
          className="bg-brand-red hover:bg-brand-red-light text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Novo Veículo
        </Link>
      </div>

      <div className="bg-background-card border border-white/5 rounded-2xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-white/5 flex justify-between items-center">
          <div className="relative w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Buscar veículo..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-text-primary focus:outline-none focus:border-brand-red-light"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-text-secondary text-sm">
                <th className="px-6 py-4 font-medium">Veículo</th>
                <th className="px-6 py-4 font-medium">Ano</th>
                <th className="px-6 py-4 font-medium">Preço</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredVehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <img src={vehicle.featured_image} alt={vehicle.model} className="w-12 h-12 rounded object-cover" />
                      <div>
                        <p className="text-text-primary font-medium">{vehicle.model}</p>
                        <p className="text-text-secondary text-xs">{vehicle.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-primary">{vehicle.year}</td>
                  <td className="px-6 py-4 text-text-primary">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(vehicle.price)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      vehicle.status === 'Available' ? 'bg-green-500/10 text-green-500' :
                      vehicle.status === 'Sold' ? 'bg-gray-500/10 text-gray-400' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {vehicle.status === 'Available' ? 'Disponível' : vehicle.status === 'Sold' ? 'Vendido' : 'Oculto'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 text-text-secondary hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-text-secondary hover:text-brand-red-light bg-white/5 hover:bg-brand-red/20 rounded transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
