export default function Gallery() {
  return (
    <section className="py-24 bg-background border-t border-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-primary mb-4 font-light">Um pedaço do nosso mundo</h2>
          <div className="w-12 h-[1px] bg-secondary mx-auto mb-4"></div>
          <p className="text-primary/60 font-sans text-sm tracking-wide">Siga @camilamartinsconfeitaria</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-secondary/20 hover:shadow-xl transition-shadow duration-500">
            <img src="/images/foto-3.jpeg" alt="Detalhes da Confeitaria" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-secondary/20 hover:shadow-xl transition-shadow duration-500">
            <img src="/images/foto-4.jpeg" alt="Nossos doces" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
