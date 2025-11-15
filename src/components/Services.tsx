import { ServiceCard } from "./ServiceCard";
import iconDocuments from "@/assets/icon-documents.png";
import iconCalculator from "@/assets/icon-calculator.png";
import iconMarketing from "@/assets/icon-marketing.png";

export const Services = () => {
  const services = [
    {
      icon: iconDocuments,
      title: "Templates Personalizados",
      description: "Crie petições, contratos e documentos em minutos, não em horas.",
      features: [
        "Petições iniciais e recursos",
        "Contratos trabalhistas personalizados",
        "Documentos processuais automatizados",
        "Biblioteca de templates atualizados"
      ]
    },
    {
      icon: iconCalculator,
      title: "Cálculos Jurídicos",
      description: "Respostas rápidas e precisas com nossas calculadoras especializadas.",
      features: [
        "Calculadora de FGTS",
        "Cálculo de Rescisão",
        "Férias e 13º salário",
        "Hora Extra e adicional noturno"
      ]
    },
    {
      icon: iconMarketing,
      title: "Marketing & Vendas",
      description: "Apresente seus serviços e gere vendas diretamente pela plataforma.",
      features: [
        "Landing page personalizada",
        "Sistema de agendamento integrado",
        "CRM para gestão de clientes",
        "Analytics e métricas de desempenho"
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-gold">
            🍯 Serviços Oferecidos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para modernizar seu escritório de advocacia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
