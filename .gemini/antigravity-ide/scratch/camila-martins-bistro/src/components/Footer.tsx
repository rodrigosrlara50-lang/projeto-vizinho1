export default function Footer() {
  return (
    <footer className="bg-primary text-surface pt-24 pb-12 font-sans font-light" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-serif text-secondary mb-6 tracking-wide">Camila Martins<br/><span className="text-xl">Confeitaria & Bistrô</span></h3>
            <p className="text-surface/70 mb-8 leading-relaxed">
              Sabor que acolhe, em cada pedaço. Um espaço dedicado a criar memórias deliciosas com o mais alto padrão de qualidade.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/camilamartinsconfeitaria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-sans tracking-widest uppercase mb-8 text-secondary">Contato e Endereço</h4>
            <ul className="space-y-5 text-surface/80">
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-secondary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">Av. Dom Pedro II, 423 B - Centro<br/>Salto - SP, 13320-240</span>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-5 h-5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(11) 94052-0357</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-sans tracking-widest uppercase mb-8 text-secondary">Funcionamento</h4>
            <ul className="space-y-4 text-surface/80">
              <li className="flex justify-between border-b border-surface/10 pb-3">
                <span>Segunda a Sexta</span>
                <span>10h – 19h</span>
              </li>
              <li className="flex justify-between border-b border-surface/10 pb-3">
                <span>Sábado</span>
                <span>09h – 19h</span>
              </li>
              <li className="flex justify-between border-b border-surface/10 pb-3">
                <span>Dom. e Feriados</span>
                <span className="text-slate">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start border-t border-surface/10 pt-10 pb-6">
          <a href="https://maps.google.com/?q=Av.+Dom+Pedro+II,+423+B+-+Centro,+Salto+-+SP" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase border border-surface/20 hover:border-secondary hover:text-secondary px-6 py-3 rounded-full transition-all">Rotas</a>
          <a href="#" className="text-xs tracking-widest uppercase border border-surface/20 hover:border-secondary hover:text-secondary px-6 py-3 rounded-full transition-all">Avaliar</a>
          <a href="#" className="text-xs tracking-widest uppercase border border-surface/20 hover:border-secondary hover:text-secondary px-6 py-3 rounded-full transition-all">Salvar</a>
          <button className="text-xs tracking-widest uppercase border border-surface/20 hover:border-secondary hover:text-secondary px-6 py-3 rounded-full transition-all">Compartilhar</button>
        </div>
        
        <div className="text-center mt-16 text-xs tracking-wider text-surface/40 uppercase">
          © {new Date().getFullYear()} Camila Martins Confeitaria & Bistrô. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
