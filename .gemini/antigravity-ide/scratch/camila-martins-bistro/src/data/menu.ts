export type MenuItem = {
  name: string;
  price: number | string;
  highlight?: string;
  notes?: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    category: "Entradas Quentes",
    items: [
      { name: "Frango da Velha (400g)", price: 36.00 },
      { name: "Meat Ball (Costela bovina assada)", price: 52.90, highlight: "Sugestão da casa" },
      { name: "Fritas", price: "A partir de R$ 37,90" }
    ]
  },
  {
    category: "Risotos",
    items: [
      { name: "Risoto de Parmesão", price: 49.99 },
      { name: "Risoto Caprese", price: 56.90 },
      { name: "Involtini de Frango com Risoto de Parmesão", price: 60.80 },
      { name: "Risoto de Pera com Gorgonzola", price: 58.90 },
      { name: "Risoto de Camarão com Abóbora Cabotiã", price: 68.40 },
      { name: "Risoto de Mix de Cogumelos", price: 58.90 }
    ]
  },
  {
    category: "Massas",
    items: [
      { name: "Linguine Ao Pomodoro", price: 49.90 },
      { name: "Nhoque à Bolonhesa", price: 45.90 },
      { name: "Ravioli Recheado com 3 Queijos ao molho Branco", price: 49.90 },
      { name: "Linguine Aos 4 Queijos", price: 51.90 },
      { name: "Macarrão Sem Glúten com Frango Desfiado", price: 34.90 }
    ]
  },
  {
    category: "Pratos Executivos",
    items: [
      { name: "Salmão Grelhado com purê", price: 93.80 },
      { name: "Medalhões de Filé Mignon com purê", price: 98.40 },
      { name: "Feijoada Magra", price: 39.90, highlight: "Sugestão da casa" },
      { name: "Parmegiana de Carne", price: 59.90 },
      { name: "Parmegiana de Frango", price: 44.90 },
      { name: "Filé de Alcatra a milanesa", price: 49.80 },
      { name: "Panqueca de carne", price: 39.90 },
      { name: "Panqueca de Frango", price: 36.90 },
      { name: "Frango a milanesa ao Creme de Milho", price: 39.90 },
      { name: "Filé de Alcatra Acebolado", price: 45.90 },
      { name: "Strogonoff de Frango", price: 37.90 },
      { name: "Filé de frango a milanesa", price: 37.90 }
    ]
  },
  {
    category: "Saladas",
    items: [
      { name: "Tradicional Caesar Salad", price: 38.90 },
      { name: "Salada Maromba", price: 29.90 },
      { name: "Salada Tropical", price: 36.90 }
    ]
  },
  {
    category: "Proteínas",
    items: [
      { name: "Salmão Grelhado no Azeite de Ervas", price: 86.90 },
      { name: "Medalhões de Filé Mignon Grelhado", price: 89.60 }
    ]
  },
  {
    category: "Primavera",
    items: [
      { name: "Essência tropical (Tilápia no leite de coco)", price: 56.90 },
      { name: "Doce Brisa do Mar (Ceviche/Tilápia)", price: 36.90 }
    ]
  },
  {
    category: "Sanduíches",
    items: [
      { name: "Croissant Caprese", price: 32.90 },
      { name: "Croissant Recheado", price: 25.90 },
      { name: "Croque Monsieur", price: 42.90 },
      { name: "Omelete", price: 26.90 },
      { name: "Croque Madame", price: 44.90 },
      { name: "Crepioca", price: 26.90 },
      { name: "Tapioca", price: 26.90 },
      { name: "Sanduíche Caprese no Pão Ciabatta", price: 32.90 },
      { name: "Sanduíche de Salame no Pão Ciabatta", price: 32.90 },
      { name: "Baguete de Filé Mignon com Gorgonzola", price: 48.90 },
      { name: "Baguete de Frango", price: 39.90 },
      { name: "Lanche Frio de Peito de Peru", price: 26.90 },
      { name: "Lanche frio de salame na baguete", price: 26.90 },
      { name: "Cheese Burguer", price: 36.90 },
      { name: "Cheese Burguer Bacon", price: 39.90 },
      { name: "Cheese Burguer Salad", price: 38.90 }
    ]
  },
  {
    category: "Sobremesas",
    items: [
      { name: "Brownie da Felicidade", price: 36.00 },
      { name: "Pera ao Vinho com Sorvete", price: 37.00, highlight: "Sugestão da casa" }
    ]
  },
  {
    category: "Cafeteria",
    items: [
      { name: "Expresso / Carioca", price: 9.50 },
      { name: "Pingado / Latte / Cappuccino", price: "A partir de R$ 11,50" },
      { name: "Fuego de el Carameloma", price: 28.90 },
      { name: "Iced Latte / Frapuccino", price: "A partir de R$ 18,90" },
      { name: "Chocolate Quente", price: "A partir de R$ 16,90" }
    ]
  },
  {
    category: "Sucos, Bebidas e Vinhos",
    items: [
      { name: "Sucos (Laranja, Limão, Abacaxi)", price: 18.90 },
      { name: "Refrigerantes", price: 7.50 },
      { name: "Lagoa Azul (Drink)", price: 32.90 },
      { name: "Gin Sunset (Drink)", price: 39.00 },
      { name: "Marqués Mendonça (Vinho)", price: "Consultar" },
      { name: "Viñas del Tango (Vinho)", price: "Consultar" }
    ]
  }
];
