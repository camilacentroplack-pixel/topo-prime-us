import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email
    const subject = `Novo Contato - ${formData.name}`;
    const body = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nCidade/Estado: ${formData.city}\n\nMensagem: ${formData.message}`;
    const mailtoLink = `mailto:onneagency@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, "_blank");

    toast.success("Abrindo seu cliente de e-mail...", {
      description: "Por favor, envie o e-mail para continuar a conversa!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", city: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pronto pra{" "}
              <span className="text-secondary">
                escalar seu negócio nos EUA?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preencha abaixo e um especialista ONNE entrará em contato em até 24 horas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-medium transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-sm text-muted-foreground">+55 62 996958723</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Segunda a Sábado, 8h - 18h
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground break-all">
                      onneagency@gmail.com
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Respondemos em até 24h
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Cobertura</h3>
                    <p className="text-sm text-muted-foreground">
                      Florida, Massachusetts, California, Texas
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Atendemos todo o território americano
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8 shadow-large">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      required
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    WhatsApp *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+55 62 996958723"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cidade / Estado *
                  </label>
                  <Input
                    required
                    placeholder="Ex: Miami, FL"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Ex: Quero anúncios pro meu serviço de flooring"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="neon" 
                  size="lg" 
                  className="w-full"
                >
                  Falar com a ONNE Agora
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, seu cliente de e-mail será aberto para que você possa enviar a mensagem.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
