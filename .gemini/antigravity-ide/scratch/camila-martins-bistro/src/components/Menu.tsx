"use client";

import { useState } from 'react';
import { menuData } from '@/data/menu';

export default function Menu() {
  const [activeTab, setActiveTab] = useState(menuData[0].category);

  return (
    <section className="py-32 bg-background" id="menu">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 font-light">Nosso Cardápio</h2>
          <div className="w-16 h-[1px] bg-secondary mx-auto mb-6"></div>
          <p className="text-primary/70 font-sans max-w-2xl mx-auto font-light">
            Explore nossas deliciosas opções, preparadas com ingredientes selecionados e muito carinho.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Menu de Navegação Lateral / Abas */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 flex flex-row lg:flex-col gap-1 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {menuData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveTab(category.category)}
                  className={`whitespace-nowrap text-left px-6 py-4 rounded-xl transition-all duration-300 font-sans font-medium text-sm tracking-wide ${
                    activeTab === category.category
                      ? 'bg-boutique-slate text-surface'
                      : 'bg-transparent text-primary/70 hover:bg-boutique-slate/10'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Conteúdo do Cardápio */}
          <div className="lg:w-3/4">
            {menuData.map((category) => (
              <div
                key={category.category}
                className={`transition-opacity duration-500 ${
                  activeTab === category.category ? 'block opacity-100 animate-fadeIn' : 'hidden opacity-0'
                }`}
              >
                <h3 className="text-3xl font-serif text-primary border-gold-thin pb-4 mb-10 font-light">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="bg-transparent group flex flex-col justify-between border-b border-primary/5 pb-6 hover:border-secondary/50 transition-colors">
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <h4 className="text-lg font-serif text-primary leading-snug">{item.name}</h4>
                          <span className="text-base font-sans font-medium text-primary whitespace-nowrap">
                            {typeof item.price === 'number' 
                              ? `R$ ${item.price.toFixed(2).replace('.', ',')}` 
                              : item.price}
                          </span>
                        </div>
                        {item.highlight && (
                          <span className="inline-block bg-secondary text-surface text-[10px] px-2 py-1 rounded-sm font-sans font-semibold uppercase tracking-widest mb-2">
                            {item.highlight}
                          </span>
                        )}
                        {item.notes && (
                          <p className="text-sm font-sans text-primary/50 italic">{item.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
