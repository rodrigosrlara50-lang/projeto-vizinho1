import { mockVehicles } from "@/lib/mock-data";
import { Car, TrendingUp, Eye } from "lucide-react";

export default function AdminDashboard() {
  const totalVehicles = mockVehicles.length;
  const totalValue = mockVehicles.reduce((acc, curr) => acc + curr.price, 0);
  const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary">Visão Geral</h1>
        <p className="text-text-secondary">Acompanhe as métricas do seu estoque premium.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-background-card p-6 rounded-2xl border border-white/5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-text-secondary text-sm font-medium mb-1">Total de Veículos</p>
              <h3 className="text-3xl font-bold text-text-primary">{totalVehicles}</h3>
            </div>
            <div className="p-3 bg-brand-red/10 rounded-xl">
              <Car className="w-6 h-6 text-brand-red-light" />
            </div>
          </div>
        </div>

        <div className="bg-background-card p-6 rounded-2xl border border-white/5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-text-secondary text-sm font-medium mb-1">Valor em Estoque</p>
              <h3 className="text-3xl font-bold text-text-primary">{formattedValue}</h3>
            </div>
            <div className="p-3 bg-green-500/10 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-background-card p-6 rounded-2xl border border-white/5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-text-secondary text-sm font-medium mb-1">Acessos Hoje</p>
              <h3 className="text-3xl font-bold text-text-primary">142</h3>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Eye className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Vehicles (Preview) */}
      <div className="bg-background-card border border-white/5 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-white/5">
          <h3 className="text-lg font-bold text-text-primary">Adicionados Recentemente</h3>
        </div>
        <div className="divide-y divide-white/5">
          {mockVehicles.slice(0, 3).map((vehicle) => (
            <div key={vehicle.id} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={vehicle.featured_image} 
                  alt={vehicle.model} 
                  className="w-16 h-12 object-cover rounded-lg"
                />
                <div>
                  <p className="text-text-primary font-medium">{vehicle.brand} {vehicle.model}</p>
                  <p className="text-text-secondary text-sm">{vehicle.year} • {vehicle.mileage} km</p>
                </div>
              </div>
              <span className="text-brand-red-light font-bold">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(vehicle.price)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
