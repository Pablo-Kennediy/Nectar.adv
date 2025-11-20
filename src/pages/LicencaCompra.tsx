import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { trackLicensePageView, trackWhatsAppClick } from "@/utils/analytics";

const LicencaCompra = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos

  useEffect(() => {
    trackLicensePageView();
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const whatsappUrl = `https://wa.me/5534999820661?text=${encodeURIComponent('Olá! Gostaria de adquirir a licença legal do sistema de design que vi no site. Pode me informar os valores e condições?')}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('License_Page');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4">
            ← Voltar ao início
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 shadow-premium">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full mb-6 border border-primary/30">
              <p className="text-sm font-bold uppercase tracking-wider">
                Oferta VIP Expira em: <span className="text-xl text-gradient-gold">{formatTime(timeLeft)}</span>
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              Sistema de Design Protegido
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Direitos Autorais Reservados
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-background/50 p-6 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                ⚖️ Aviso Legal Importante
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Todos os templates e sistemas de design apresentados são protegidos por <strong className="text-foreground">direitos autorais</strong> 
                conforme a Lei 9.610/98 (Lei de Direitos Autorais). O uso comercial ou reprodução sem a devida licença constitui violação legal.
              </p>
              <p className="text-foreground font-semibold">
                A licença legal e completa é necessária para utilização profissional destes layouts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-secondary/50 p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold text-gradient-gold mb-3">
                ✨ O que está incluído na Licença:
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Direito de uso comercial ilimitado do template escolhido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Código-fonte completo e documentação técnica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Atualizações e melhorias por 12 meses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Suporte técnico dedicado via WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Customizações básicas incluídas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-background/50 p-6 rounded-xl border border-primary/30 mb-6">
              <p className="text-muted-foreground mb-2">Chave Pix (CNPJ)</p>
              <p className="text-2xl font-bold text-gradient-gold mb-2">50788948000121</p>
              <p className="text-sm text-primary">Envie o valor acima</p>
            </div>
            
            <Button size="lg" className="text-lg px-8 py-6 w-full md:w-auto" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                💬 Garanta Sua Licença Legal Agora (Via WhatsApp)
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Resposta em até 2 horas úteis • Parcelamento disponível
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Tem dúvidas sobre o processo de licenciamento? Entre em contato e tire todas as suas questões antes de adquirir.
          </p>
        </div>
      </main>

      <footer className="border-t border-border py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 - Todos os direitos reservados a Pablo Kennedy</p>
        </div>
      </footer>
    </div>
  );
};

export default LicencaCompra;
