export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        {/* Logotipo em Texto */}
        <div className="text-3xl font-serif text-secondary tracking-[0.15em] uppercase font-light">
          Camila Martins
        </div>
        
        {/* Navegação */}
        <nav className="flex gap-6 md:gap-10 text-surface/90 font-sans text-xs tracking-widest uppercase font-medium">
          <a href="#experience" className="hover:text-secondary transition-colors">Experiência</a>
          <a href="#menu" className="hover:text-secondary transition-colors">Cardápio</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contato</a>
        </nav>
      </div>
    </header>
  );
}
