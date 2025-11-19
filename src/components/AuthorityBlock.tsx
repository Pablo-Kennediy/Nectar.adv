import { Card } from "@/components/ui/card";

export const AuthorityBlock = () => {
  return (
    <section className="py-12 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border-4 border-primary/30">
              <span className="text-5xl md:text-6xl">💻</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
                Dev Pablo Kennediy
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 mb-3 font-semibold">
                Empreendedor e Desenvolvedor Web Líder
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Especialista em Desenvolvimento Web e Programação | Fundador da PK Produtos Digitais | Soluções Tecnológicas Inovadoras para o Mundo Digital
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
