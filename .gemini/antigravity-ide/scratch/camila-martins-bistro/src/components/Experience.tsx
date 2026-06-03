import Image from 'next/image';

export default function Experience() {
  return (
    <section className="py-32 bg-background relative" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative h-[600px] w-full rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden border border-secondary/20">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1089&auto=format&fit=crop"
              alt="Bolo artesanal na Confeitaria"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="order-1 md:order-2 space-y-10">
            <div>
              <span className="text-secondary font-sans font-medium uppercase tracking-widest text-sm">Pausa para Sonhar</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-primary leading-tight font-light">
                Mais que uma refeição,<br/>uma experiência.
              </h2>
            </div>
            <p className="text-lg text-primary/70 font-sans font-light leading-relaxed">
              Na Camila Martins Confeitaria & Bistrô, acreditamos que os melhores momentos da vida são acompanhados de boa comida. Seja para um café da tarde acolhedor, um almoço executivo ou uma comemoração especial, nosso cardápio foi desenhado para despertar memórias e criar novos sorrisos.
            </p>
            <div className="pt-4">
              <a href="#menu" className="inline-flex items-center text-primary font-sans font-medium hover:text-secondary transition-colors group uppercase tracking-wider text-sm">
                <span className="border-b border-primary group-hover:border-secondary pb-1">
                  Explore nossos sabores
                </span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
