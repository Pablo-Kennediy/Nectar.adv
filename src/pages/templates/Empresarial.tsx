import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";
import { useTheme } from "@/hooks/useTheme";

const Empresarial = () => {
  useTemplateRedirect();
  const { isDark, toggleTheme } = useTheme();
  
  useEffect(() => {
    trackTemplateView('Direito Empresarial');
  }, []);

  const colors = isDark ? {
    background: "#121212",
    backgroundSecondary: "#1E1E1E",
    text: "#E0E0E0",
    textSecondary: "#9E9E9E",
    accent: "#BB86FC",
    accentDark: "#8F62C4",
    border: "#333",
    card: "#252525",
    secondary: "#ff9900",
  } : {
    background: "#f8f8f8",
    backgroundSecondary: "#ffffff",
    text: "#333333",
    textSecondary: "#666666",
    accent: "#004d99",
    accentDark: "#003d7a",
    border: "#dddddd",
    card: "#f0f0f0",
    secondary: "#ff9900",
  };

  return (
    <div style={{ 
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontSize: "16px",
      lineHeight: 1.6,
      color: colors.text,
      backgroundColor: colors.background,
      margin: 0
    }}>
      <header style={{
        backgroundColor: colors.backgroundSecondary,
        color: colors.text,
        padding: "24px 0",
        boxShadow: `0 2px 4px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}`,
        borderBottom: `1px solid ${colors.border}`
      }}>
        <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <Link to="/templates" style={{ color: colors.accent, textDecoration: "none", fontSize: "0.9em" }}>
              ← Voltar aos Templates
            </Link>
            <h1 style={{ 
              fontSize: "2.2rem",
              marginBottom: "4px",
              fontFamily: "Georgia, serif",
              marginTop: "10px",
              color: colors.accent
            }}>
              Direito Empresarial
            </h1>
            <p style={{ fontSize: "1rem", color: colors.textSecondary }}>
              Sociedades, Contratos e Compliance Corporativo
            </p>
          </div>
          <button 
            onClick={toggleTheme}
            style={{
              backgroundColor: colors.accent,
              color: isDark ? colors.background : "#ffffff",
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

      <nav style={{
        backgroundColor: colors.backgroundSecondary,
        borderBottom: `1px solid ${colors.border}`,
        padding: "12px 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: `0 1px 2px ${isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)'}`
      }}>
        <ul style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
          padding: 0,
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <li><a href="#sociedades" style={{ 
            textDecoration: "none",
            color: colors.text,
            fontWeight: 600,
            padding: "8px 4px",
            transition: "color 0.3s, border-bottom 0.3s"
          }}>Sociedades</a></li>
          <li><a href="#contratos" style={{ 
            textDecoration: "none",
            color: colors.text,
            fontWeight: 600,
            padding: "8px 4px"
          }}>Contratos</a></li>
          <li><a href="#compliance" style={{ 
            textDecoration: "none",
            color: colors.text,
            fontWeight: 600,
            padding: "8px 4px"
          }}>Compliance</a></li>
        </ul>
      </nav>

      <main style={{ padding: "32px 0", width: "90%", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          backgroundColor: colors.backgroundSecondary,
          padding: "32px",
          marginBottom: "32px",
          borderLeft: `5px solid ${colors.accent}`,
          boxShadow: `0 1px 3px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}`,
          borderRadius: "4px"
        }}>
          <h2 style={{ 
            color: colors.accent,
            marginTop: 0,
            marginBottom: "16px",
            fontSize: "1.8rem"
          }}>
            Tipos de Sociedades Empresariais
          </h2>
          <p style={{ color: colors.textSecondary, fontStyle: "italic", marginBottom: "16px" }}>
            Entenda as principais modalidades societárias no Brasil
          </p>

          <div style={{ marginTop: "32px", marginBottom: "48px" }}>
            <h3 style={{ fontSize: "1.4rem", color: colors.text, marginTop: "32px", marginBottom: "16px" }}>
              Sociedade Limitada (LTDA)
            </h3>
            <div style={{
              padding: "24px",
              backgroundColor: colors.card,
              borderLeft: `3px solid ${colors.secondary}`,
              fontFamily: "Georgia, serif",
              whiteSpace: "pre-wrap"
            }}>
              <p style={{ color: colors.text }}>A sociedade limitada é a forma mais comum de sociedade empresarial no Brasil. Caracteriza-se pela responsabilidade limitada dos sócios ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social.</p>
              <p style={{ marginTop: "16px", color: colors.text }}><strong>Base Legal:</strong> Código Civil, Arts. 1.052 a 1.087</p>
            </div>
          </div>

          <div id="busca-avancada" style={{ marginTop: "32px" }}>
            <h3 style={{ fontSize: "1.4rem", color: colors.text, marginBottom: "16px" }}>
              Busca de Legislação
            </h3>
            <form style={{ display: "flex", width: "100%", maxWidth: "600px", marginTop: "16px" }}>
              <input 
                type="search" 
                placeholder="Buscar artigos..."
                style={{
                  width: "70%",
                  padding: "12px 16px",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "4px 0 0 4px",
                  fontSize: "1rem",
                  outline: "none",
                  backgroundColor: colors.card,
                  color: colors.text
                }}
              />
              <button style={{
                width: "30%",
                padding: "12px 16px",
                backgroundColor: colors.secondary,
                color: colors.background,
                border: "none",
                borderRadius: "0 4px 4px 0",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                transition: "background-color 0.3s"
              }}>
                Buscar
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer style={{
        backgroundColor: colors.backgroundSecondary,
        color: colors.text,
        padding: "32px 0",
        fontSize: "0.9rem",
        textAlign: "center",
        borderTop: `1px solid ${colors.border}`
      }}>
        <div style={{
          marginBottom: "16px",
          padding: "8px",
          backgroundColor: colors.card,
          borderRadius: "3px",
          maxWidth: "800px",
          margin: "0 auto 16px"
        }}>
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Aviso Legal</p>
          <p>Este material é educativo e não substitui orientação jurídica profissional em direito empresarial.</p>
        </div>
        <a href="#" style={{ color: colors.secondary, textDecoration: "none", marginTop: "8px", display: "block" }}>
          Política de Privacidade
        </a>
      </footer>
    </div>
  );
};

export default Empresarial;
