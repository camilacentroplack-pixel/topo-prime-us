import { Card } from "@/components/ui/card";
import { Target, FileText, Share2, Rocket } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Google & Meta Ads",
    description: "Atraímos clientes certos para o seu negócio com campanhas inteligentes e otimizadas.",
  },
  {
    icon: FileText,
    title: "Landing Pages de Conversão",
    description: "Páginas profissionais que transformam visitantes em clientes.",
  },
  {
    icon: Share2,
    title: "Social Media Estratégico",
    description: "Gestão de conteúdo e presença digital que geram credibilidade.",
  },
  {
    icon: Rocket,
    title: "Setup Completo de Marketing",
    description: "Criamos toda a estrutura digital para o seu negócio decolar nos EUA.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="servicos" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Resultados reais,{" "}
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              estratégias sob medida
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que fazemos para transformar seu negócio digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-secondary/50 hover:shadow-medium transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-neon flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                  <Icon className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
