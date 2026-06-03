import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background-card border-t border-brand-red-dark/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col inline-block mb-6">
              <span className="text-2xl font-bold italic tracking-wider text-text-primary">
                VIEIRA
              </span>
              <span className="text-sm font-medium italic tracking-widest text-brand-red-light">
                VEÍCULOS
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              A sua concessionária premium. Experiência cinematográfica, atendimento de excelência e os melhores veículos do mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-brand-red-light transition-colors text-sm font-medium">
                Instagram
              </a>
              <span className="text-text-secondary/50">•</span>
              <a href="#" className="text-text-secondary hover:text-brand-red-light transition-colors text-sm font-medium">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-6 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/estoque" className="text-text-secondary hover:text-brand-red-light transition-colors text-sm">
                  Estoque de Veículos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-text-secondary hover:text-brand-red-light transition-colors text-sm">
                  Sobre a Vieira Veículos
                </Link>
              </li>
              <li>
                <Link href="/financiamento" className="text-text-secondary hover:text-brand-red-light transition-colors text-sm">
                  Financiamento
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-text-secondary hover:text-brand-red-light transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-text-primary font-semibold mb-6 uppercase tracking-wider text-sm">Fale Conosco</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-red-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-text-primary font-medium text-sm mb-1">Telefone Fixo</p>
                  <p className="text-text-secondary text-sm">(11) 4013-3180</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-brand-red-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-text-primary font-medium text-sm mb-1">WhatsApp</p>
                  <p className="text-text-secondary text-sm">(11) 99616-4643</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:col-span-2">
                <MapPin className="w-5 h-5 text-brand-red-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-text-primary font-medium text-sm mb-1">Endereço</p>
                  <p className="text-text-secondary text-sm">Av. Exemplo Premium, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-red-dark/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-xs">
            &copy; {new Date().getFullYear()} Vieira Veículos. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-xs text-text-secondary">
            <Link href="/termos" className="hover:text-text-primary transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-text-primary transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
