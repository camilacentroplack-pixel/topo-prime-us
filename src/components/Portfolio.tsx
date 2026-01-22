import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.png";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Educação em Marketing Digital",
    description: "Ensinamos estratégias reais para gerar resultados extraordinários",
  },
  {
    image: portfolio2,
    title: "Estratégia de Atração de Clientes",
    description: "Conteúdo é rei, mas relevância é a coroa do sucesso",
  },
  {
    image: portfolio3,
    title: "Automação com Inteligência Artificial",
    description: "Prepare-se para o extraordinário com tecnologia de ponta",
  },
  {
    image: portfolio4,
    title: "Robôs que Comandam Robôs",
    description: "Automação inteligente em Instagram, Facebook e WhatsApp",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos projetos e campanhas que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
              <div className="p-4 bg-card border-t border-border">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
