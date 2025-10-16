import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const solutions = [
  {
    title: "Conhecimento das Normas Locais",
    description: "Trabalhamos seguindo todas as regulamentações americanas de cada estado",
  },
  {
    title: "Materiais Certificados",
    description: "Usamos apenas pavers e materiais de qualidade superior, resistentes ao clima local",
  },
  {
    title: "Equipe Especializada",
    description: "Profissionais treinados com anos de experiência em instalações nos EUA",
  },
  {
    title: "Técnicas Avançadas",
    description: "Instalação correta com drenagem adequada, nivelamento perfeito e selagem profissional",
  },
  {
    title: "Acompanhamento Completo",
    description: "Do projeto inicial até a entrega final, você é informado de cada etapa",
  },
  {
    title: "Garantia Real",
    description: "Garantimos a qualidade do nosso trabalho com suporte pós-instalação",
  },
];

const Solution = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
              <CheckCircle2 size={20} />
              <span className="font-semibold">Nossa Solução</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como a{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                ONNE AGENCY
              </span>{" "}
              Resolve Seus Problemas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise técnica + conhecimento do mercado americano + atendimento em português
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="p-6 border-l-4 border-l-success hover:shadow-medium transition-all bg-card"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg text-foreground">{solution.title}</h3>
                </div>
                <p className="text-muted-foreground ml-9">{solution.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-hero rounded-xl shadow-large text-center">
            <p className="text-2xl font-bold text-primary-foreground mb-2">
              Autoridade em Instalação de Pavers nos EUA
            </p>
            <p className="text-lg text-primary-foreground/90">
              Combinamos técnicas americanas de ponta com o cuidado e atenção ao detalhe brasileiro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
