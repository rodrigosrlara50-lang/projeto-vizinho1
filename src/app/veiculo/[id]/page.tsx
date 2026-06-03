import { mockVehicles } from "@/lib/mock-data";
import { VehicleDetailsClient } from "@/components/vehicles/VehicleDetailsClient";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { id: string } }) {
  const vehicle = mockVehicles.find((v) => v.id === params.id);
  
  if (!vehicle) {
    return { title: "Veículo não encontrado | Vieira Veículos" };
  }

  return {
    title: `${vehicle.brand} ${vehicle.model} - Vieira Veículos`,
    description: vehicle.description,
  };
}

export default function VehiclePage({ params }: { params: { id: string } }) {
  const vehicle = mockVehicles.find((v) => v.id === params.id);

  if (!vehicle) {
    notFound();
  }

  return <VehicleDetailsClient vehicle={vehicle} />;
}
