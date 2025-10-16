import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFreeLanding = () => {
    const whatsappUrl = `https://wa.me/15551234567?text=Olá! Gostaria de solicitar uma Landing Page Grátis para meu negócio.`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              ONNE AGENCY
            </span>
            <br />
            <span className="text-foreground">
              Marketing que conecta brasileiros nos EUA a{" "}
            </span>
            <span className="text-secondary">
              clientes reais
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estratégias inteligentes para empreendedores que querem{" "}
            <span className="text-foreground font-semibold">escalar seu negócio</span> com anúncios pagos, 
            landing pages e posicionamento digital profissional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="neon" 
              size="xl"
              onClick={scrollToContact}
              className="min-w-[280px] shadow-glow"
            >
              <MessageCircle className="mr-2" />
              Fale com um Especialista ONNE
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={handleFreeLanding}
              className="min-w-[280px] border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary"
            >
              <FileText className="mr-2" />
              Solicite uma Landing Grátis
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-16 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-glow" />
              <span className="text-foreground">🇧🇷 Atendimento em Português</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-glow" />
              <span className="text-foreground">🇺🇸 Fluência em Inglês</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-glow" />
              <span className="text-foreground">🚀 Resultados Comprovados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
