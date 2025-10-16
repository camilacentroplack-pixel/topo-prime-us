import { Card } from "@/components/ui/card";
import { Search, Lightbulb, Rocket, TrendingUp, FileText } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Análise gratuita",
    description: "Entendemos seu negócio e público-alvo nos EUA.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Planejamento",
    description: "Criamos a estratégia digital ideal para seu segmento.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execução",
    description: "Lançamos anúncios, landing e conteúdo otimizados.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Otimização",
    description: "Monitoramos e ajustamos tudo pra gerar mais resultados.",
  },
  {
    icon: FileText,
    number: "05",
    title: "Relatórios",
    description: "Você acompanha o crescimento real do seu negócio.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Como{" "}
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              funciona
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passo a passo para transformar seu negócio digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative p-6 bg-card/30 backdrop-blur-sm border-border hover:border-secondary/50 hover:shadow-medium transition-all group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center font-bold text-xl text-background shadow-glow">
                  {step.number}
                </div>
                
                <div className="mt-4">
                  <Icon className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
