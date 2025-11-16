import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div 
        className="w-full h-[500px] md:h-[600px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      <div className="relative -mt-32 md:-mt-40 max-w-4xl mx-auto px-6 text-center">
        <div className="bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-premium">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient-gold">
            Néctar
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-2">
            Sua expertise vale mais que preencher templates
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            🚀 Em 7 dias, seu escritório estará rodando com mais eficiência e profissionalismo
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <a href="/templates">Comece Agora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
