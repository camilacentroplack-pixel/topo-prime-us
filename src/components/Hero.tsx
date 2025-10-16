import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-pavers.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transformamos Áreas Externas em{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Ambientes Premium
            </span>
            <br />
            para Brasileiros Empreendedores nos EUA
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Instalação de pavers, pisos externos ou interiores, backyard, driveways, 
            com acabamento de alta qualidade — sua casa ou negócio mostra valor + durabilidade
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="cta" 
              size="xl"
              onClick={scrollToContact}
              className="min-w-[250px]"
            >
              Solicite Orçamento Gratuito
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToContact}
              className="min-w-[250px]"
            >
              Agende sua Avaliação
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Garantia de Qualidade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Materiais Certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Equipe Especializada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
