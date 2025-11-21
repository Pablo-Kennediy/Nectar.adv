import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";
import { useTheme } from "@/hooks/useTheme";

const Administrativo = () => {
  useTemplateRedirect();
  const { isDark, toggleTheme } = useTheme();
  
  useEffect(() => {
    trackTemplateView('Direito Administrativo');
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
  } : {
    background: "#f8f9fa",
    backgroundSecondary: "#ffffff",
    text: "#212529",
    textSecondary: "#6c757d",
    accent: "#004d99",
    accentDark: "#003d7a",
    border: "#dee2e6",
    card: "#e9ecef",
  };

  return (
    <div style={{ 
      fontFamily: "'Open Sans', sans-serif",
      lineHeight: 1.6,
      color: colors.text,
      backgroundColor: colors.background,
      margin: 0,
      padding: 0
    }}>
      <header style={{
        backgroundColor: colors.backgroundSecondary,
        color: colors.text,
        padding: "20px 0",
        boxShadow: `0 2px 4px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}`,
        borderBottom: `1px solid ${colors.border}`
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <Link to="/templates" style={{ color: colors.accent, textDecoration: "none", fontSize: "0.9em" }}>
              ← Voltar aos Templates
            </Link>
            <h1 style={{ 
              color: colors.accent,
              marginBottom: "8px",
              fontWeight: 700,
              fontSize: "2.5rem",
              fontFamily: "'Merriweather', serif",
              marginTop: "10px"
            }}>
              Essencial de Direito Administrativo
            </h1>
            <nav style={{ marginTop: "20px" }}>
              <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "20px", padding: 0 }}>
                <li><a href="#fundamentos" style={{ color: colors.text, fontWeight: 600, padding: "5px 0" }}>Fundamentos</a></li>
                <li><a href="#licitacoes" style={{ color: colors.text, fontWeight: 600 }}>Licitações</a></li>
                <li><a href="#atos" style={{ color: colors.text, fontWeight: 600 }}>Atos Administrativos</a></li>
              </ul>
            </nav>
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

      <section style={{ padding: "80px 0", backgroundColor: colors.backgroundSecondary }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ 
            fontSize: "2.2rem", 
            color: colors.accent,
            borderBottom: `2px solid ${colors.accent}`,
            paddingBottom: "8px",
            marginBottom: "20px"
          }}>
            Lei 14.133/2021 - Nova Lei de Licitações
          </h2>
          <p style={{ marginBottom: "20px", fontSize: "1.1rem", color: colors.text }}>
            A Nova Lei de Licitações e Contratos Administrativos representa uma mudança significativa no sistema de compras públicas brasileiro.
          </p>

          <div style={{
            backgroundColor: colors.card,
            borderLeft: `5px solid ${colors.accent}`,
            padding: "20px 24px",
            marginTop: "40px",
            borderRadius: "4px"
          }}>
            <h3 style={{ color: colors.accent, marginTop: 0 }}>Pilares LIMPE</h3>
            <ul style={{ 
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              fontSize: "1.1rem",
              fontWeight: 600,
              padding: 0
            }}>
              <li style={{ 
                backgroundColor: colors.accent,
                color: isDark ? colors.background : "#ffffff",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Legalidade</li>
              <li style={{ 
                backgroundColor: colors.accent,
                color: isDark ? colors.background : "#ffffff",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Impessoalidade</li>
              <li style={{ 
                backgroundColor: colors.accent,
                color: isDark ? colors.background : "#ffffff",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Moralidade</li>
              <li style={{ 
                backgroundColor: colors.accent,
                color: isDark ? colors.background : "#ffffff",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Publicidade</li>
              <li style={{ 
                backgroundColor: colors.accent,
                color: isDark ? colors.background : "#ffffff",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Eficiência</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: colors.backgroundSecondary,
            border: `1px solid ${colors.accent}`,
            borderLeft: `5px solid ${colors.accent}`,
            padding: "20px",
            marginTop: "40px",
            borderRadius: "4px",
            textAlign: "center"
          }}>
            <h4 style={{ color: colors.accent, marginBottom: "8px" }}>Ferramenta de Análise de Licitações</h4>
            <p style={{ marginBottom: "20px", color: colors.text }}>Acesse nossa ferramenta exclusiva para análise de processos licitatórios</p>
            <button style={{
              backgroundColor: colors.accent,
              color: isDark ? colors.background : "#ffffff",
              border: "none",
              padding: "10px 25px",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "4px",
              fontWeight: 700
            }}>
              Acessar Ferramenta
            </button>
          </div>
        </div>
      </section>

      <footer style={{
        backgroundColor: colors.backgroundSecondary,
        color: colors.text,
        padding: "20px 0",
        fontSize: "0.9rem",
        textAlign: "center",
        marginTop: "60px",
        borderTop: `1px solid ${colors.border}`
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <p style={{ color: isDark ? "#CF6679" : "#dc3545", fontWeight: 600, marginBottom: "8px" }}>
            AVISO LEGAL
          </p>
          <p>Este material é apenas educacional e não substitui consulta jurídica profissional.</p>
        </div>
      </footer>
    </div>
  );
};

export default Administrativo;
