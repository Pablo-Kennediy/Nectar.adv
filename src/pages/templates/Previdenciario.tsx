import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";
import { useTheme } from "@/hooks/useTheme";

const Previdenciario = () => {
  useTemplateRedirect();
  const { isDark, toggleTheme } = useTheme();
  
  useEffect(() => {
    trackTemplateView('Direito Previdenciário');
  }, []);

  const colors = isDark ? {
    background: "#121212",
    backgroundSecondary: "#1E1E1E",
    text: "#E0E0E0",
    textSecondary: "#9E9E9E",
    accent: "#00c7b3",
    accentDark: "#00a08f",
    border: "#333",
    card: "#252525",
    primary: "#1a4d7d",
  } : {
    background: "#f8f9fa",
    backgroundSecondary: "#ffffff",
    text: "#333",
    textSecondary: "#6c757d",
    accent: "#00c7b3",
    accentDark: "#00a08f",
    border: "#dee2e6",
    card: "#ffffff",
    primary: "#1a4d7d",
  };

  return (
    <div style={{ 
      fontFamily: "'Roboto', Arial, sans-serif",
      lineHeight: 1.6,
      color: colors.text,
      backgroundColor: colors.background,
      margin: 0,
      padding: 0
    }}>
      <header style={{
        backgroundColor: colors.backgroundSecondary,
        color: colors.text,
        padding: "15px 0",
        borderBottom: `5px solid ${colors.accent}`,
        boxShadow: `0 2px 4px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}`
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <Link to="/templates" style={{ color: colors.accent, textDecoration: "none", fontSize: "0.9em", display: "block", marginBottom: "8px" }}>
              ← Voltar aos Templates
            </Link>
            <h1 style={{ fontSize: "1.8em", display: "inline-block", margin: "0", color: colors.primary }}>
              Direito Previdenciário
            </h1>
            <nav style={{ marginTop: "10px" }}>
              <a href="#beneficios" style={{
                color: colors.text,
                textDecoration: "none",
                marginRight: "20px",
                padding: "5px 10px",
                transition: "background-color 0.3s"
              }}>Benefícios</a>
              <a href="#aposentadoria" style={{
                color: colors.text,
                textDecoration: "none",
                padding: "5px 10px",
                border: `1px solid ${colors.border}`,
                borderRadius: "4px"
              }}>Aposentadorias</a>
            </nav>
          </div>
          <button 
            onClick={toggleTheme}
            style={{
              backgroundColor: colors.primary,
              color: "#ffffff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "0.9rem"
            }}
          >
            {isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </button>
        </div>
      </header>

      <main style={{ paddingTop: "40px", paddingBottom: "60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ color: colors.primary, fontSize: "2.2em", marginBottom: "16px" }}>
              Legislação Previdenciária
            </h2>
            <p style={{ fontSize: "1.1em", color: colors.textSecondary }}>
              Entenda seus direitos e os benefícios previdenciários disponíveis
            </p>
            <small style={{ color: colors.textSecondary, fontStyle: "italic", display: "block", marginTop: "15px" }}>
              Fundamentação: Lei 8.213/91 (Lei de Benefícios da Previdência Social)
            </small>
          </div>

          <section style={{ marginBottom: "50px" }}>
            <h3 style={{
              borderLeft: `5px solid ${colors.primary}`,
              paddingLeft: "15px",
              marginBottom: "30px",
              color: colors.primary,
              fontSize: "1.8em"
            }}>
              Tipos de Aposentadoria
            </h3>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div style={{
                backgroundColor: colors.card,
                padding: "25px",
                borderRadius: "8px",
                boxShadow: `0 4px 8px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'}`,
                flex: "1 1 calc(33% - 40px)",
                minWidth: "280px"
              }}>
                <h4 style={{ color: colors.accent, marginBottom: "10px", fontSize: "1.3em" }}>
                  Aposentadoria por Idade
                </h4>
                <p style={{ color: colors.text }}>Destinada aos trabalhadores que atingiram a idade mínima estabelecida pela legislação previdenciária.</p>
                <p style={{ marginTop: "12px", color: colors.text }}><strong>Requisitos:</strong></p>
                <ul style={{ marginLeft: "20px", color: colors.text }}>
                  <li>Idade mínima (varia conforme regras de transição)</li>
                  <li>Carência de 180 contribuições</li>
                </ul>
              </div>

              <div style={{
                backgroundColor: colors.card,
                padding: "25px",
                borderRadius: "8px",
                boxShadow: `0 4px 8px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'}`,
                flex: "1 1 calc(33% - 40px)",
                minWidth: "280px"
              }}>
                <h4 style={{ color: colors.accent, marginBottom: "10px", fontSize: "1.3em" }}>
                  Aposentadoria por Tempo de Contribuição
                </h4>
                <p style={{ color: colors.text }}>Concedida aos segurados que completaram o tempo mínimo de contribuição ao INSS.</p>
                <p style={{ marginTop: "12px", color: colors.text }}><strong>Atenção:</strong> Regras alteradas pela Reforma da Previdência (EC 103/2019)</p>
              </div>

              <div style={{
                backgroundColor: colors.card,
                padding: "25px",
                borderRadius: "8px",
                boxShadow: `0 4px 8px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'}`,
                flex: "1 1 calc(33% - 40px)",
                minWidth: "280px",
                border: `2px solid ${colors.accent}`
              }}>
                <h4 style={{ color: colors.accent, marginBottom: "10px", fontSize: "1.3em" }}>
                  Aposentadoria por Invalidez
                </h4>
                <p style={{ color: colors.text }}>Para segurados que ficaram permanentemente incapacitados para o trabalho.</p>
                <p style={{ marginTop: "12px", color: colors.text }}><strong>Requisito:</strong> Perícia médica do INSS</p>
              </div>
            </div>
          </section>

          <div style={{
            backgroundColor: isDark ? colors.card : "#fff3cd",
            color: isDark ? colors.text : "#856404",
            padding: "20px",
            border: `1px solid ${isDark ? colors.border : "#ffeeba"}`,
            borderRadius: "5px",
            marginTop: "50px"
          }}>
            <h4 style={{ color: isDark ? colors.accent : "#856404", marginBottom: "10px", fontSize: "1.2em" }}>
              Aviso Legal
            </h4>
            <p>Este conteúdo é informativo e educacional. Para análise específica do seu caso, consulte um advogado especializado em Direito Previdenciário.</p>
          </div>
        </div>
      </main>

      <footer style={{
        backgroundColor: colors.backgroundSecondary,
        color: colors.text,
        textAlign: "center",
        padding: "20px 0",
        fontSize: "0.9em",
        borderTop: `1px solid ${colors.border}`
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <p style={{ color: colors.textSecondary }}>© 2024 - Material Educacional de Direito Previdenciário</p>
        </div>
      </footer>
    </div>
  );
};

export default Previdenciario;
