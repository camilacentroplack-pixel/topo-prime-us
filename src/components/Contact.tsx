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
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecionando para WhatsApp...", {
      description: "Em breve entraremos em contato!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solicite seu{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Orçamento Gratuito
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preencha o formulário abaixo e entraremos em contato em até 24 horas
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
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
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
                      contato@onneagency.com
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
                    Telefone / WhatsApp *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    required
                    placeholder="Conte-nos sobre seu projeto: tipo de serviço, área estimada, localização..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                >
                  Enviar Solicitação
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa
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
