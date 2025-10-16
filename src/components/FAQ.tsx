import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é a diferença entre os tipos de pavers?",
    answer: "Oferecemos diversos tipos: concreto (mais econômico e versátil), pedra natural (acabamento premium), porcelana (alta resistência), e borracha reciclada (sustentável). Cada um tem características específicas de durabilidade, manutenção e estética. Ajudamos você a escolher o melhor para seu clima e uso.",
  },
  {
    question: "Quanto tempo leva a instalação?",
    answer: "Depende do tamanho do projeto. Um patio médio (200-300 sq ft) leva de 3 a 5 dias. Driveways maiores podem levar de 5 a 10 dias. Sempre fornecemos um cronograma detalhado no orçamento inicial.",
  },
  {
    question: "Como devo cuidar dos pavers após a instalação?",
    answer: "Manutenção é simples: varrer regularmente, lavar com água e sabão neutro ocasionalmente, e aplicar selante a cada 2-3 anos. Fornecemos um guia completo de manutenção após a instalação.",
  },
  {
    question: "Preciso de permissão da cidade para instalar pavers?",
    answer: "Varia por cidade e estado. Geralmente, projetos pequenos em backyard não precisam, mas driveways e alterações na frente da casa podem requerer permissão. Orientamos você sobre os requisitos locais específicos.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos diversas formas: cartão de crédito, débito, transferência bancária, check, e financiamento (sujeito a aprovação). Geralmente trabalhamos com 30% entrada, 40% durante execução e 30% na entrega final.",
  },
  {
    question: "Vocês oferecem garantia?",
    answer: "Sim! Oferecemos garantia de 2 anos para mão de obra e seguimos as garantias dos fabricantes para os materiais (geralmente 10-25 anos). Tudo documentado por escrito.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-soft hover:shadow-medium transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
