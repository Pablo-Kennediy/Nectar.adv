import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";

const Tributario = () => {
  useTemplateRedirect();
  
  useEffect(() => {
    trackTemplateView('Direito Tributário');
  }, []);

  const styles = {
    root: {
      fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
      lineHeight: 1.6,
      color: "#f3f4f6",
      backgroundColor: "#121212",
      padding: 0,
    },
    container: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "1rem",
      maxWidth: "900px",
      backgroundColor: "#121212",
    },
    header: {
      textAlign: "center" as const,
      paddingTop: "2.5rem",
      paddingBottom: "2.5rem",
      marginBottom: "2rem",
      backgroundColor: "#1f2937",
      borderRadius: "0.5rem",
      border: "1px solid #374151",
    },
    h1: {
      fontSize: "3rem",
      fontWeight: 800,
      color: "#93c5fd",
      textShadow: "0 0 10px rgba(147, 197, 253, 0.3)",
      marginBottom: "0.5rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#f3f4f6",
      marginBottom: "1rem",
      borderBottom: "2px solid #374151",
      paddingBottom: "0.5rem",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#93c5fd",
      marginBottom: "0.5rem",
    },
    subtitle: {
      fontSize: "1.25rem",
      color: "#d1d5db",
    },
    section: {
      marginBottom: "2.5rem",
    },
    text: {
      fontSize: "1rem",
      color: "#d1d5db",
      marginBottom: "1rem",
    },
    list: {
      listStyle: "disc",
      listStylePosition: "inside" as const,
      paddingLeft: "0.5rem",
    },
    listItem: {
      marginTop: "0.5rem",
    },
    ctaBox: {
      backgroundColor: "#1f2937",
      padding: "1.5rem",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
      border: "1px solid #374151",
      borderRadius: "0.5rem",
      marginBottom: "2.5rem",
    },
    ctaTitle: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#93c5fd",
      marginBottom: "1rem",
    },
    ctaText: {
      fontSize: "1rem",
      color: "#93c5fd",
      marginBottom: "1.5rem",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "1rem",
    },
    button: {
      display: "block",
      fontWeight: 600,
      padding: "0.75rem 1.5rem",
      borderRadius: "0.5rem",
      letterSpacing: "0.05em",
      textAlign: "center" as const,
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
    buttonPrimary: {
      backgroundColor: "#3b82f6",
      color: "#121212",
    },
    buttonSecondary: {
      backgroundColor: "#fcd34d",
      color: "#121212",
    },
    grid: {
      display: "grid",
      gap: "1.5rem",
      gridTemplateColumns: "1fr",
    },
    card: {
      padding: "1rem",
      borderLeft: "4px solid",
      borderRadius: "0.25rem",
    },
    cardRed: {
      borderColor: "#ef4444",
      backgroundColor: "#451a1a",
      border: "1px solid #ef4444",
    },
    cardGreen: {
      borderColor: "#10b981",
      backgroundColor: "#064e3b",
      border: "1px solid #10b981",
    },
    alert: {
      backgroundColor: "#451a1a",
      color: "#ef4444",
      border: "1px solid #ef4444",
      padding: "1rem",
      borderRadius: "0.5rem",
      textAlign: "center" as const,
      marginTop: "2rem",
    },
    footer: {
      borderTop: "1px solid #374151",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      color: "#d1d5db",
      fontSize: "0.875rem",
      textAlign: "center" as const,
      backgroundColor: "#121212",
    },
  };

  return (
    <div style={styles.root}>
      <main style={styles.container}>
        <header style={styles.header}>
          <Link to="/templates" style={{ color: "#93c5fd", textDecoration: "none", display: "block", marginBottom: "1rem" }}>
            ← Voltar aos Templates
          </Link>
          <h1 style={styles.h1}>
            Guia Essencial de Direito Tributário
          </h1>
          <p style={styles.subtitle}>
            Precisão legal para o <strong>Sistema Tributário Nacional (STN)</strong>.
          </p>
        </header>

        <section style={styles.section}>
          <h2 style={styles.h2}>
            Objetivo e Fontes Primárias do Direito
          </h2>
          <p style={styles.text}>
            Nosso recurso é sistemático, focado na correta interpretação do <strong>Código Tributário Nacional (CTN)</strong> e das leis de impostos. Todo o conteúdo é diretamente embasado em fontes primárias auditáveis:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={{ fontWeight: 600, color: "#60a5fa" }}>Constituição Federal de 1988:</span> Art. 145 e seguintes, estabelecendo as competências e limitações do poder de tributar (o STN).
            </li>
            <li style={styles.listItem}>
              <span style={{ fontWeight: 600, color: "#60a5fa" }}>Lei n.º 5.172/66 (CTN):</span> Base da Teoria Geral do Tributo, obrigação tributária, fato gerador, lançamento e crédito tributário.
            </li>
            <li style={styles.listItem}>
              <span style={{ fontWeight: 600, color: "#60a5fa" }}>Legislação de Impostos em Espécie:</span> Normas específicas sobre IRPF, ICMS, ISS, IPI e Contribuições Sociais.
            </li>
            <li style={styles.listItem}>
              <span style={{ fontWeight: 600, color: "#60a5fa" }}>Jurisprudência Vinculante:</span> Súmulas e Teses de Repercussão Geral do STF e STJ que pacificam a interpretação fiscal.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>
            Conteúdo Principal: Teoria e Prática
          </h2>
          <p style={styles.text}>
            Para um compliance empresarial robusto e planejamento fiscal seguro, é fundamental dominar os pilares conceituais do Direito Tributário. A seguir, a estrutura do conteúdo disponível:
          </p>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={styles.h3}>Teoria Geral do Tributo (CTN)</h3>
            <p style={styles.text}>
              O CTN define e organiza a relação Fisco-Contribuinte. Nossa análise foca em três aspectos centrais:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Conceito e Espécies Tributárias:</strong> A distinção legal entre Impostos, Taxas, Contribuições de Melhoria, Empréstimos Compulsórios e Contribuições Especiais.
              </li>
              <li style={styles.listItem}>
                <strong>Obrigação Tributária:</strong> Análise do Fato Gerador e a correta identificação dos Sujeitos Ativo (Credor) e Passivo (Devedor), crucial para a responsabilidade fiscal.
              </li>
              <li style={styles.listItem}>
                <strong>Crédito Tributário:</strong> Lançamento, Suspensão (ex: moratória), Extinção (ex: pagamento) e Exclusão (ex: isenção), etapas vitais para a gestão do passivo.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={styles.h3}>Impostos em Espécie e Sua Legislação</h3>
            <p style={styles.text}>
              Detalhamento dos principais tributos, com foco nas bases de cálculo e alíquotas conforme a legislação mais atualizada:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>IRPF/IRPJ (Federal):</strong> Análise da Lei do Imposto de Renda e suas mudanças anuais. Guias para retenção na fonte e declaração para Pessoa Física e Jurídica.
              </li>
              <li style={styles.listItem}>
                <strong>ICMS (Estadual):</strong> O imposto mais complexo do sistema. Foco na guerra fiscal, fato gerador e regimes de substituição tributária.
              </li>
              <li style={styles.listItem}>
                <strong>ISS (Municipal):</strong> Serviços tributáveis e a polêmica do local de incidência do imposto (Lei Complementar n.º 116/03).
              </li>
              <li style={styles.listItem}>
                <strong>IPI e Contribuições Sociais (PIS/COFINS):</strong> Detalhamento das regras de não cumulatividade e impacto no planejamento industrial e comercial.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={styles.h3}>Processo Tributário</h3>
            <p style={styles.text}>
              Navegação pelas defesas do contribuinte em face da cobrança:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Administrativo (CARF):</strong> Defesa e recursos contra o auto de infração.
              </li>
              <li style={styles.listItem}>
                <strong>Judicial:</strong> Ações de anulação, repetição de indébito e execução fiscal.
              </li>
            </ul>
          </div>
        </section>
        
        <section style={styles.ctaBox}>
          <h2 style={styles.ctaTitle}>
            Acesse o Conteúdo e Simule Cálculos
          </h2>
          <p style={styles.ctaText}>
            Explore a estrutura do CTN ou utilize nossas ferramentas de simulação fiscal baseadas em fórmulas de cálculo auditáveis e seguras.
          </p>
          <div style={styles.buttonContainer}>
            <a href="#" style={{...styles.button, ...styles.buttonPrimary}}>
              Ver o CTN e Leis
            </a>
            <a href="#" style={{...styles.button, ...styles.buttonSecondary}}>
              Simulação de Impostos
            </a>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>
            Segurança e Qualidade de Código (Cyber Security)
          </h2>
          <p style={styles.text}>
            Devido à natureza crítica e sensível dos dados fiscais, a precisão e a segurança são prioridade máxima, utilizando sua expertise em Cyber Security, essencial para a confiança no sistema:
          </p>
          <div style={styles.grid}>
            <div style={{...styles.card, ...styles.cardRed}}>
              <h3 style={{ fontWeight: 600, fontSize: "1.25rem", color: "#ef4444", marginBottom: "0.25rem" }}>
                Cyber Security (OWASP)
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#d1d5db" }}>
                Padrões <strong>OWASP</strong> para máxima proteção contra vulnerabilidades. Lógica de cálculo isolada para não armazenar dados sensíveis (anonimização).
              </p>
            </div>
            <div style={{...styles.card, ...styles.cardGreen}}>
              <h3 style={{ fontWeight: 600, fontSize: "1.25rem", color: "#10b981", marginBottom: "0.25rem" }}>
                Selo de Confiabilidade: Lógica Matemática
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#d1d5db" }}>
                Testes unitários rigorosos focados na <strong>lógica matemática tributária</strong> para garantir que a exibição legal e os resultados dos cálculos sejam <strong>exatos</strong> e auditáveis.
              </p>
            </div>
          </div>
        </section>

        <aside style={styles.alert}>
          <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Aviso Legal Importante:</p>
          <p style={{ color: "#f3f4f6" }}>
            O conteúdo é exclusivamente informativo e tem caráter doutrinário. <strong>Não substitui o cálculo, o parecer ou o planejamento fiscal</strong> realizado por um advogado tributarista ou contador, profissionais legalmente habilitados.
          </p>
        </aside>
      </main>

      <footer style={styles.footer}>
        Projeto sob Licença MIT. Criado por sua empresa de desenvolvimento web.
      </footer>
    </div>
  );
};

export default Tributario;
