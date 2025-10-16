import { Card } from "@/components/ui/card";
import { Globe, TrendingUp, DollarSign, Users, BarChart } from "lucide-react";

const differentials = [
  {
    icon: Globe,
    title: "Atendimento bilíngue",
    description: "🇧🇷 português + 🇺🇸 inglês",
  },
  {
    icon: TrendingUp,
    title: "Estratégias baseadas em dados reais e inteligência artificial",
    description: "Decisões inteligentes, não achismos",
  },
  {
    icon: DollarSign,
    title: "Foco total em retorno sobre investimento (ROI)",
    description: "Cada real investido deve gerar resultados",
  },
  {
    icon: Users,
    title: "Suporte humano e consultoria personalizada",
    description: "Atendimento dedicado ao seu sucesso",
  },
  {
    icon: BarChart,
    title: "Resultados mensuráveis",
    description: "Relatórios claros e acompanhamento contínuo",
  },
];

const Differentials = () => {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Porque a ONNE{" "}
            <span className="text-secondary">
              não é "mais uma agência"
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossos diferenciais que fazem a diferença real
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-neon-blue transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
