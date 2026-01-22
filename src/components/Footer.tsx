import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-onne.png";

const Footer = () => {
  const whatsappLink = "https://wa.me/5562996958723?text=Olá%21+Gostaria+de+saber+mais+sobre+os+serviços+da+Onne+Agency";

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="ONNE AGENCY" className="h-24 w-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Transformando visão em resultados reais. Marketing inteligente para brasileiros nos EUA.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/onneagencyads/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/onneagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/camila-menezes-onne" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#sobre" className="hover:text-background transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-background transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Informações</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MessageCircle size={18} className="text-green-500" />
                  <span>+55 62 996958723</span>
                  <span className="text-green-500 font-medium">(WhatsApp)</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:onneagency@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  📧 onneagency@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                🌎 Atendendo todo o território dos EUA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 ONNE AGENCY. Todos os direitos reservados.</p>
          <p className="text-xs text-muted-foreground mt-2">Marketing inteligente para brasileiros nos EUA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
