import { AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    title: "Pisos que não duram",
    description: "Rachadura, desgaste prematuro, dinheiro jogado fora",
  },
  {
    title: "Pavers desnivelados",
    description: "Instalação incorreta que cria riscos de segurança",
  },
  {
    title: "Acabamento ruim",
    description: "Trabalho mal feito que desvaloriza sua propriedade",
  },
  {
    title: "Falta de garantia",
    description: "Sem respaldo quando surgem problemas",
  },
  {
    title: "Diferenças de normas",
    description: "Desconhecimento das regras locais americanas",
  },
  {
    title: "Clima diferente",
    description: "Materiais inadequados para geada ou calor extremo",
  },
];

const Problem = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
              <AlertCircle size={20} />
              <span className="font-semibold">Problemas Comuns</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cansado de Lidar com Estes{" "}
              <span className="text-destructive">Problemas</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sabemos exatamente o que você enfrenta como brasileiro empreendedor nos EUA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-destructive hover:shadow-medium transition-all">
                <h3 className="font-bold text-lg mb-2 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
