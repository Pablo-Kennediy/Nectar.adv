import { Button } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/utils/analytics";

export const CTA = () => {
  const whatsappUrl = `https://wa.me/5534999820661?text=${encodeURIComponent('Olá, visitei o site Néctar e gostaria de saber mais sobre as soluções de automação jurídica para meu escritório.')}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('CTA_Section');
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-card via-card to-secondary/50 rounded-3xl p-12 shadow-premium border border-primary/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-gold">
            Pronto para transformar seu escritório?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de advogados que já automatizaram seus processos e triplicaram sua produtividade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="/templates">Começar Teste Grátis</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground border-primary" 
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                💬 Fale Conosco no WhatsApp Agora
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            💳 Sem cartão de crédito • ⚡ Configuração em 7 dias • 🎯 Suporte dedicado
          </p>
        </div>
      </div>
    </section>
  );
};
