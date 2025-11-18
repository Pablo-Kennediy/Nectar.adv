import { Hero } from "@/components/Hero";
import { AuthorityBlock } from "@/components/AuthorityBlock";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup />
      <Hero />
      <AuthorityBlock />
      <Services />
      <Benefits />
      <CTA />
      
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Néctar - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
