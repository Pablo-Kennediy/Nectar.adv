import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Templates = () => {
  const templates = [
    {
      id: 1,
      title: "Direito Administrativo",
      description: "Templates para processos administrativos, licitações e Lei 14.133/2021",
      path: "/template/administrativo",
      icon: "⚖️"
    },
    {
      id: 2,
      title: "Direito Ambiental",
      description: "Compliance e legislação ambiental, tema natureza/selva",
      path: "/template/ambiental",
      icon: "🌿"
    },
    {
      id: 3,
      title: "Direito Civil",
      description: "Contratos, obrigações e direitos civis",
      path: "/template/civil",
      icon: "📋"
    },
    {
      id: 4,
      title: "Direito Empresarial",
      description: "Sociedades, contratos empresariais e registro",
      path: "/template/empresarial",
      icon: "💼"
    },
    {
      id: 5,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação e regularização imobiliária",
      path: "/template/imobiliario",
      icon: "🏢"
    },
    {
      id: 6,
      title: "Direito Penal",
      description: "Processos penais, defesas e recursos",
      path: "/template/penal",
      icon: "⚡"
    },
    {
      id: 7,
      title: "Direito Previdenciário",
      description: "Aposentadorias, benefícios e INSS",
      path: "/template/previdenciario",
      icon: "🛡️"
    },
    {
      id: 8,
      title: "Direito Tributário",
      description: "CTN, impostos, compliance fiscal e planejamento tributário",
      path: "/template/tributario",
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4">
            ← Voltar
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-3">
            Escolha seu Template
          </h1>
          <p className="text-xl text-muted-foreground">
            Selecione a área do direito para começar
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Link
              key={template.id}
              to={template.path}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-premium"
            >
              <div className="text-5xl mb-4">{template.icon}</div>
              <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient-gold transition-colors">
                {template.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {template.description}
              </p>
              <Button variant="outline" className="w-full">
                Ver Demo
              </Button>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Néctar - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Templates;
