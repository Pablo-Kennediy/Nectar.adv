import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { trackWhatsAppClick } from "@/utils/analytics";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Monta a mensagem para WhatsApp
    const mensagemWhatsApp = `*Novo Contato do Site*%0A%0A*Nome:* ${encodeURIComponent(
      formData.nome
    )}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Telefone:* ${encodeURIComponent(
      formData.telefone || "Não informado"
    )}%0A%0A*Mensagem:*%0A${encodeURIComponent(formData.mensagem)}`;

    // Track analytics
    trackWhatsAppClick("Formulário de Contato");

    // Redireciona para WhatsApp
    window.open(
      `https://wa.me/5534999820661?text=${mensagemWhatsApp}`,
      "_blank"
    );

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para continuar a conversa no WhatsApp.",
    });

    // Limpa o formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
              Néctar - SaaS para Advogados
            </h1>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="hover:text-secondary transition-colors">
                Início
              </a>
              <a href="/templates" className="hover:text-secondary transition-colors">
                Templates
              </a>
              <a href="/contato" className="hover:text-secondary transition-colors font-semibold">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atender você e automatizar seu escritório de advocacia em 7 dias.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulário */}
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Envie sua Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Dr. João Silva"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="telefone">Telefone/WhatsApp</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(34) 99982-0661"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva como podemos ajudar seu escritório..."
                    required
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Telefone/WhatsApp</p>
                      <a
                        href="https://wa.me/5534999820661"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        +55 (34) 99982-0661
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">E-mail</p>
                      <a
                        href="mailto:contato@nectar-saas.com"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        contato@nectar-saas.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Endereço</p>
                      <p className="text-muted-foreground">
                        Uberlândia, MG
                        <br />
                        Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Horário de Atendimento</p>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 09:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-card rounded-lg shadow-lg border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119601.87335347658!2d-48.35873483749999!3d-18.9186445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445d516920a61%3A0x68827c2f0b4cb2de!2sUberl%C3%A2ndia%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Escritório"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Néctar - SaaS para Advogados. Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Este é um sistema de design protegido. Uso comercial requer licença.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contato;
