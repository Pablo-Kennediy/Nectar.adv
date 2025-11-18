import { useEffect } from 'react';

export const SchemaMarkup = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Néctar - SaaS para Advogados",
      "description": "Automatize seu escritório de advocacia em 7 dias. Templates, cálculos jurídicos e marketing integrado.",
      "url": window.location.origin,
      "logo": `${window.location.origin}/placeholder.svg`,
      "telephone": "+55-34-99982-0661",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brasil",
        "addressCountry": "BR"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/nectar-saas"
      ]
    };

    // Person Schema (Advogado)
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr. Alexandre Silva",
      "jobTitle": "Advogado Sênior",
      "description": "Especialista em Direito Digital e Empresarial com mais de 15 anos de experiência",
      "worksFor": {
        "@type": "LegalService",
        "name": "Néctar - SaaS para Advogados"
      },
      "knowsAbout": [
        "Direito Digital",
        "Direito Empresarial",
        "Automação Jurídica",
        "Templates Jurídicos"
      ]
    };

    // Insert schemas into head
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(personSchema);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};
