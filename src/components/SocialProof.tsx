import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import beforeAfter from "@/assets/before-after-driveway.jpg";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "Miami, FL",
    text: "A ONNE transformou completamente nosso backyard. O acabamento é impecável e resistiu perfeitamente ao clima da Flórida. Recomendo muito!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    location: "Boston, MA",
    text: "Profissionais que entendem as necessidades dos brasileiros nos EUA. Respeitaram todos os prazos e o resultado superou nossas expectativas.",
    rating: 5,
  },
  {
    name: "João Oliveira",
    location: "Orlando, FL",
    text: "Excelente qualidade nos pavers do driveway. O projeto valorizou muito nossa propriedade e os vizinhos sempre elogiam.",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformações Que{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Falam Por Si
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes brasileiros nos EUA têm a dizer
          </p>
        </div>

        {/* Before/After Section */}
        <div className="mb-20">
          <Card className="overflow-hidden shadow-large max-w-5xl mx-auto">
            <div className="relative">
              <img 
                src={beforeAfter} 
                alt="Antes e depois da instalação de pavers" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-semibold">
                ANTES
              </div>
              <div className="absolute top-4 right-4 bg-success text-success-foreground px-4 py-2 rounded-lg font-semibold">
                DEPOIS
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div>
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

export default SocialProof;
