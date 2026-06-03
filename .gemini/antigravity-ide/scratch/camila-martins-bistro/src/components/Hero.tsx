export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-primary text-surface overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Imagem de fundo enviada pelo usuário */}
        <img
          src="/images/bg-hero.jpeg"
          alt="Camila Martins Confeitaria & Bistrô"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 text-secondary font-sans font-medium">
          Boutique & Bistrô
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight font-light tracking-wide">
          Sabor que<br /><span className="italic text-secondary">Acolhe</span>
        </h1>
        <p className="text-base md:text-lg font-sans font-light mb-10 max-w-2xl mx-auto text-surface/80">
          Descubra uma experiência gastronômica única, onde cada detalhe é preparado com amor, desde nossos doces artesanais aos pratos inesquecíveis.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#menu" className="bg-boutique-slate hover:bg-boutique-slate/90 text-surface font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-full transition-all duration-300">
            Ver Cardápio
          </a>
          <a href="#contact" className="bg-transparent border border-secondary/50 hover:border-secondary text-secondary hover:bg-secondary/10 font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-full transition-all duration-300">
            Como Chegar
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 border-b border-secondary/30"></div>
    </section>
  );
}
