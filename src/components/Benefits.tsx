import { Card, CardContent } from "@/components/ui/card";

export const Benefits = () => {
  const benefits = [
    {
      emoji: "⏱️",
      title: "Economia de Tempo",
      description: "Reduza em até 70% o tempo gasto em tarefas burocráticas"
    },
    {
      emoji: "💰",
      title: "Mais Rentabilidade",
      description: "Foque no que importa: atender mais clientes e ganhar mais"
    },
    {
      emoji: "📱",
      title: "100% Online",
      description: "Acesse de qualquer lugar, a qualquer momento"
    },
    {
      emoji: "🔒",
      title: "Segurança Garantida",
      description: "Seus dados e dos seus clientes protegidos com criptografia"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que escolher o <span className="text-gradient-gold">Néctar</span>?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
              <CardContent className="pt-8">
                <div className="text-5xl mb-4">{benefit.emoji}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
