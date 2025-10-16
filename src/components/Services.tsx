import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import patioImage from "@/assets/service-patio.jpg";
import drivewayImage from "@/assets/service-driveway.jpg";

const services = [
  {
    title: "Patios & Backyards",
    image: patioImage,
    description: "Crie o espaço dos sonhos para relaxar e receber amigos",
    features: [
      "Design personalizado",
      "Áreas de convivência",
      "Espaços para churrasqueira",
      "Resistente a todas as estações",
    ],
  },
  {
    title: "Driveways",
    image: drivewayImage,
    description: "Primeira impressão que valoriza sua propriedade",
    features: [
      "Padrões geométricos modernos",
      "Suporta tráfego pesado",
      "Durabilidade extrema",
      "Manutenção facilitada",
    ],
  },
  {
    title: "Pisos Internos & Decks",
    image: patioImage,
    description: "Elegância e funcionalidade para dentro de casa",
    features: [
      "Acabamento premium",
      "Variedade de estilos",
      "Antiderrapante",
      "Fácil limpeza",
    ],
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar áreas externas e internas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-large transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Saiba Mais
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
