import Link from "next/link";
import { LayoutDashboard, Car, PlusCircle, Settings, LogOut } from "lucide-react";
import { AdminAuth } from "@/components/admin/AdminAuth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuth>
      <div className="flex h-screen bg-[#0a0a0a]">
        {/* Sidebar */}
        <aside className="w-64 bg-background-card border-r border-white/5 flex flex-col">
          <div className="h-20 flex items-center px-6 border-b border-white/5">
            <div className="flex flex-col">
              <span className="text-xl font-bold italic tracking-wider text-text-primary">
                VIEIRA
              </span>
              <span className="text-xs font-medium italic tracking-widest text-brand-red-light">
                ADMIN
              </span>
            </div>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link href="/admin" className="flex items-center px-4 py-3 text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <LayoutDashboard className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
            <Link href="/admin/veiculos" className="flex items-center px-4 py-3 text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <Car className="w-5 h-5 mr-3" />
              Estoque
            </Link>
            <Link href="/admin/veiculos/novo" className="flex items-center px-4 py-3 text-brand-red-light hover:text-white hover:bg-brand-red-dark/30 rounded-lg transition-colors font-medium">
              <PlusCircle className="w-5 h-5 mr-3" />
              Adicionar Veículo
            </Link>
          </nav>

          <div className="p-4 border-t border-white/5 space-y-2">
            <button className="w-full flex items-center px-4 py-3 text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <Settings className="w-5 h-5 mr-3" />
              Configurações
            </button>
            <Link href="/" className="w-full flex items-center px-4 py-3 text-text-secondary hover:text-brand-red-light hover:bg-brand-red-dark/20 rounded-lg transition-colors">
              <LogOut className="w-5 h-5 mr-3" />
              Voltar ao Site
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </AdminAuth>
  );
}
