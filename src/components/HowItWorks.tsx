import { ClipboardCheck, Palette, Hammer, Sparkles, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Avaliação e Orçamento",
    description: "Visitamos sua propriedade, avaliamos o local e fornecemos um orçamento detalhado gratuito",
  },
  {
    number: "02",
    icon: Palette,
    title: "Escolha de Materiais + Design",
    description: "Ajudamos você a escolher os pavers ideais e criamos um design personalizado",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Execução da Instalação",
    description: "Nossa equipe realiza a instalação com técnicas profissionais e atenção aos detalhes",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Acabamento + Entrega",
    description: "Finalizamos com selagem, limpeza e apresentamos o resultado final impecável",
  },
  {
    number: "05",
    icon: Shield,
    title: "Garantia + Manutenção",
    description: "Fornecemos garantia do serviço e orientações para manter a beleza por anos",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Funciona
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo transparente do início ao fim
            </p>
          </div>

          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-medium mb-2 relative z-10">
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold shadow-soft">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
