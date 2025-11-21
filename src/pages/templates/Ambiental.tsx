import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";
import { useTheme } from "@/hooks/useTheme";

const Ambiental = () => {
  useTemplateRedirect();
  const { isDark, toggleTheme } = useTheme();
  
  useEffect(() => {
    trackTemplateView('Direito Ambiental');
  }, []);

  const colors = isDark ? {
    background: "#121212",
    backgroundSecondary: "#1E1E1E",
    text: "#E0E0E0",
    textSecondary: "#9E9E9E",
    accent: "#10b981",
    accentDark: "#059669",
    border: "#333",
    card: "#252525",
  } : {
    background: "#fcfbf6",
    backgroundSecondary: "#ffffff",
    text: "#2c2c2c",
    textSecondary: "#6c757d",
    accent: "#004d00",
    accentDark: "#003300",
    border: "#d0c7b6",
    card: "#ffffff",
  };

  return (
    <div style={{ 
      fontFamily: "'Roboto', Arial, sans-serif",
      lineHeight: 1.6,
      color: colors.text,
      backgroundColor: colors.background,
      margin: 0,
      paddingTop: "4rem"
    }}>
      <header style={{
        backgroundColor: colors.backgroundSecondary,
        color: colors.text,
        padding: "24px",
        borderBottom: `3px solid ${isDark ? colors.accent : "#654321"}`,
        boxShadow: `0 2px 4px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}`
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <Link to="/templates" style={{ color: colors.accent, textDecoration: "none", fontSize: "0.9em", fontWeight: 600 }}>
              ← Voltar aos Templates
            </Link>
            <h1 style={{ 
              color: colors.accent,
              marginBottom: "4px",
              fontSize: "2.5rem",
              marginTop: "10px"
            }}>
              Compliance e Legislação Ambiental
            </h1>
            <p style={{ fontSize: "1rem", color: colors.text, marginBottom: "16px" }}>
              Tema Natureza/Selva - Verde, Madeira e Terra
            </p>
            <nav>
              <ul style={{ listStyle: "none", display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "16px", padding: 0 }}>
                <li><a href="#legislacao" style={{ 
                  color: colors.text,
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s, color 0.3s",
                  fontWeight: 600
                }}>Legislação</a></li>
                <li><a href="#compliance" style={{ 
                  color: colors.text,
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  fontWeight: 600
                }}>Compliance</a></li>
                <li><a href="#ferramentas" style={{ 
                  color: colors.text,
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  fontWeight: 600
                }}>Ferramentas</a></li>
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

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "16px 24px" }}>
        <section style={{ padding: "32px 0" }}>
          <h2 style={{ 
            fontSize: "2rem",
            borderBottom: `2px solid ${colors.border}`,
            paddingBottom: "8px",
            marginBottom: "16px",
            color: colors.accent
          }}>
            Legislação Ambiental Brasileira
          </h2>
          <p style={{ marginBottom: "16px", fontFamily: "'Merriweather', Georgia, serif", color: colors.text }}>
            O Brasil possui uma das legislações ambientais mais completas do mundo. Conheça os principais marcos legais e suas aplicações práticas.
          </p>

          <div style={{
            backgroundColor: colors.card,
            border: `1px solid ${colors.border}`,
            borderLeft: `5px solid ${colors.accent}`,
            padding: "24px",
            marginTop: "16px",
            borderRadius: "4px"
          }}>
            <h3 style={{ color: colors.accent, fontSize: "1.5rem", marginBottom: "16px" }}>
              Principais Normas Ambientais
            </h3>
            <ul style={{ fontFamily: "'Merriweather', Georgia, serif", color: colors.text }}>
              <li style={{ marginBottom: "8px" }}>Lei 6.938/81 - Política Nacional do Meio Ambiente</li>
              <li style={{ marginBottom: "8px" }}>Lei 9.605/98 - Lei de Crimes Ambientais</li>
              <li style={{ marginBottom: "8px" }}>Lei 12.651/12 - Código Florestal</li>
              <li style={{ marginBottom: "8px" }}>Resolução CONAMA 001/86 - Licenciamento Ambiental</li>
            </ul>
          </div>

          <a href="#ferramentas" style={{
            display: "inline-block",
            backgroundColor: colors.accent,
            color: isDark ? colors.background : "#ffffff",
            padding: "16px 32px",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            marginTop: "16px",
            transition: "background-color 0.3s"
          }}>
            Acessar Ferramentas de Compliance
          </a>
        </section>

        <hr style={{ border: 0, height: "1px", backgroundColor: colors.accent, margin: "32px 0" }} />

        <section style={{ padding: "32px 0" }}>
          <div style={{
            backgroundColor: colors.card,
            border: `1px solid ${colors.border}`,
            borderLeft: `5px solid ${colors.accent}`,
            padding: "24px",
            marginTop: "16px",
            borderRadius: "4px"
          }}>
            <h3 style={{ color: colors.accent, fontSize: "1.5rem", marginBottom: "16px" }}>
              Ferramenta de Análise
            </h3>
            <p style={{ fontFamily: "'Merriweather', Georgia, serif", color: colors.text }}>
              Utilize nossa ferramenta para avaliar o compliance ambiental de sua empresa e identificar áreas de melhoria.
            </p>
          </div>
        </section>
      </main>

      <footer style={{
        backgroundColor: colors.backgroundSecondary,
        color: colors.text,
        padding: "32px",
        fontSize: "0.9rem",
        borderTop: `1px solid ${colors.border}`
      }}>
        <div style={{
          backgroundColor: isDark ? colors.card : "#79553d",
          padding: "16px",
          marginBottom: "16px",
          borderRadius: "4px"
        }}>
          <h3 style={{ color: isDark ? colors.accent : "#fce8a6", marginTop: 0 }}>Aviso Legal</h3>
          <p style={{ color: isDark ? colors.text : "#ffffff" }}>Este conteúdo é informativo e não substitui consultoria jurídica especializada em direito ambiental.</p>
        </div>
        <div style={{ textAlign: "center", color: colors.textSecondary }}>
          <p>© 2024 - Material Educacional sobre Legislação Ambiental</p>
        </div>
      </footer>
    </div>
  );
};

export default Ambiental;
