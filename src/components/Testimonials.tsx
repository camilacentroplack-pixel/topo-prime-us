import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Raíssa Almeida",
    location: "Orlando/FL",
    text: "A ONNE revolucionou minha empresa de limpeza aqui nos EUA. Agora recebo orçamentos todos os dias!",
    rating: 5,
  },
  {
    name: "Anderson Costa",
    location: "Miami/FL",
    text: "Antes gastava com anúncios sem retorno. A ONNE ajustou tudo e em menos de 2 semanas comecei a fechar contratos.",
    rating: 5,
  },
  {
    name: "Lucas Martins",
    location: "Boston/MA",
    text: "Sou do ramo de pavers e depois que a ONNE criou minha landing, o telefone não para!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">Brasileiros reais</span>, resultados reais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-secondary/50 hover:shadow-medium transition-all relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-foreground mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
