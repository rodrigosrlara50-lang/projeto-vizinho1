export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  transmission: "Automático" | "Manual";
  mileage: number;
  status: "Available" | "Sold" | "Hidden";
  featured_image: string;
  description: string;
}

export const mockVehicles: Vehicle[] = [
  {
    id: "1",
    brand: "Mercedes-Benz",
    model: "G63 AMG",
    year: 2023,
    price: 2500000,
    transmission: "Automático",
    mileage: 5000,
    status: "Available",
    featured_image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1920",
    description: "Um ícone de luxo e performance off-road. Motor V8 Biturbo, acabamento premium e presença inconfundível.",
  },
  {
    id: "2",
    brand: "Porsche",
    model: "911 Carrera S",
    year: 2022,
    price: 1350000,
    transmission: "Automático",
    mileage: 12000,
    status: "Available",
    featured_image: "https://images.unsplash.com/photo-1503376760367-11116c94625b?auto=format&fit=crop&q=80&w=1920",
    description: "A essência esportiva. O 911 Carrera S oferece dinâmica perfeita e design atemporal.",
  },
  {
    id: "3",
    brand: "BMW",
    model: "M4 Competition",
    year: 2024,
    price: 980000,
    transmission: "Automático",
    mileage: 1000,
    status: "Available",
    featured_image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1920",
    description: "Pura adrenalina M. Agressivo, potente e com tecnologia de ponta para as pistas e ruas.",
  },
  {
    id: "4",
    brand: "Audi",
    model: "RS e-tron GT",
    year: 2023,
    price: 1100000,
    transmission: "Automático",
    mileage: 3000,
    status: "Available",
    featured_image: "https://images.unsplash.com/photo-1614165516087-0b194f479e49?auto=format&fit=crop&q=80&w=1920",
    description: "O futuro da alta performance 100% elétrica. Design aerodinâmico e aceleração brutal.",
  }
];
