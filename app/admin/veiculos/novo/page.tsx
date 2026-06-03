"use client";

import { Save, X, UploadCloud, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import Image from "next/image";

export default function NovoVeiculoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating save delay
    setTimeout(() => {
      setLoading(false);
      router.push("/admin/veiculos");
    }, 1000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a local preview URL
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Cadastrar Veículo</h1>
          <p className="text-text-secondary">Preencha os detalhes do novo veículo para o catálogo.</p>
        </div>
        <div className="flex space-x-4">
          <Link 
            href="/admin/veiculos"
            className="px-6 py-3 rounded-lg font-medium text-text-primary hover:bg-white/5 border border-white/10 transition-colors flex items-center"
          >
            <X className="w-5 h-5 mr-2" />
            Cancelar
          </Link>
          <button 
            onClick={handleSave}
            disabled={loading}
            className="bg-brand-red hover:bg-brand-red-light text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center disabled:opacity-50"
          >
            <Save className="w-5 h-5 mr-2" />
            {loading ? "Salvando..." : "Salvar Veículo"}
          </button>
        </div>
      </div>

      <form className="space-y-8" onSubmit={handleSave}>
        {/* Basic Info */}
        <div className="bg-background-card border border-white/5 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-text-primary mb-6">Informações Básicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Marca</label>
              <input type="text" placeholder="Ex: Porsche" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Modelo</label>
              <input type="text" placeholder="Ex: 911 Carrera S" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Ano</label>
              <input type="number" placeholder="Ex: 2024" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Preço (R$)</label>
              <input type="number" placeholder="Ex: 1500000" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Quilometragem</label>
              <input type="number" placeholder="Ex: 5000" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Câmbio</label>
              <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors appearance-none">
                <option value="Automático">Automático</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Status</label>
              <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors appearance-none">
                <option value="Available">Disponível</option>
                <option value="Sold">Vendido</option>
                <option value="Hidden">Oculto</option>
              </select>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="bg-background-card border border-white/5 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-text-primary mb-6">Mídia</h2>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-4">Imagem Principal do Veículo</label>
            
            <input 
              type="file" 
              accept="image/*"
              className="hidden" 
              ref={fileInputRef}
              onChange={handleImageChange}
            />

            {imagePreview ? (
              <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border-2 border-white/10 group cursor-pointer" onClick={triggerFileInput}>
                <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center text-white font-medium bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <UploadCloud className="w-5 h-5 mr-2" />
                    Trocar Imagem
                  </div>
                </div>
              </div>
            ) : (
              <div 
                onClick={triggerFileInput}
                className="w-full aspect-video md:aspect-[21/9] rounded-xl border-2 border-dashed border-white/20 hover:border-brand-red-light/50 bg-[#0a0a0a] flex flex-col items-center justify-center cursor-pointer transition-colors group"
              >
                <div className="p-4 bg-white/5 rounded-full mb-4 group-hover:bg-brand-red-light/10 transition-colors">
                  <ImageIcon className="w-8 h-8 text-text-secondary group-hover:text-brand-red-light transition-colors" />
                </div>
                <p className="text-text-primary font-medium mb-1">Clique para fazer upload</p>
                <p className="text-text-secondary text-sm">PNG, JPG ou WEBP (Máx. 5MB)</p>
              </div>
            )}
            
            <div className="mt-4 flex items-center">
              <div className="flex-1 border-t border-white/10"></div>
              <span className="px-4 text-sm text-text-secondary">ou adicione via URL</span>
              <div className="flex-1 border-t border-white/10"></div>
            </div>
            
            <div className="mt-4">
              <input type="url" placeholder="https://exemplo.com/imagem.jpg" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-background-card border border-white/5 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-text-primary mb-6">Descrição</h2>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Detalhes do Veículo</label>
            <textarea rows={5} placeholder="Descreva os diferenciais, pacotes opcionais..." className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-red-light transition-colors"></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
