import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";
import { useTheme } from "@/hooks/useTheme";

const Civil = () => {
  useTemplateRedirect();
  const { isDark, toggleTheme } = useTheme();
  
  useEffect(() => {
    trackTemplateView('Direito Civil');
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
    background: "#FAFAFA",
    backgroundSecondary: "#ffffff",
    text: "#1A1A1A",
    textSecondary: "#666",
    accent: "#105A93",
    accentDark: "#0d4673",
    border: "#EBEBEB",
    card: "#ffffff",
  };

  return (
    <div style={{ 
      fontFamily: "'Inter', Roboto, sans-serif",
      color: colors.text,
      backgroundColor: colors.background,
      lineHeight: 1.6,
      fontSize: "18px",
      margin: 0
    }}>
      <header style={{
        backgroundColor: colors.backgroundSecondary,
        padding: "20px 24px",
        borderBottom: `1px solid ${colors.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        <div>
          <Link to="/templates" style={{ color: colors.accent, textDecoration: "none", fontSize: "0.9em", fontWeight: 600 }}>
            ← Voltar aos Templates
          </Link>
          <h1 style={{ 
            fontSize: "1.5em",
            margin: "10px 0 0 0",
            fontFamily: "'Merriweather', Georgia, serif",
            color: colors.accent
          }}>
            Direito Civil Brasileiro
          </h1>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0, margin: 0 }}>
              <li><a href="#contratos" style={{ color: colors.accent, textDecoration: "none", fontWeight: 600 }}>Contratos</a></li>
              <li><a href="#obrigacoes" style={{ color: colors.accent, textDecoration: "none", fontWeight: 600 }}>Obrigações</a></li>
              <li><a href="#familia" style={{ color: colors.accent, textDecoration: "none", fontWeight: 600 }}>Família</a></li>
            </ul>
          </nav>
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

      <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 24px" }}>
        <nav style={{ fontSize: "0.9em", marginBottom: "20px" }}>
          <ul style={{ listStyle: "none", display: "flex", padding: 0, color: colors.textSecondary }}>
            <li>Início</li>
            <li style={{ margin: "0 5px", color: colors.textSecondary }}>/</li>
            <li>Direito Civil</li>
            <li style={{ margin: "0 5px", color: colors.textSecondary }}>/</li>
            <li>Artigo 186</li>
          </ul>
        </nav>

        <div style={{
          borderBottom: `2px solid ${isDark ? colors.accent : "#C9A86A"}`,
          paddingBottom: "10px",
          marginBottom: "30px"
        }}>
          <h1 style={{ 
            fontFamily: "'Merriweather', Georgia, serif",
            color: colors.accent,
            fontSize: "2.2em",
            marginTop: "24px",
            marginBottom: "8px"
          }}>
            Art. 186 - Ato Ilícito
          </h1>
          <span style={{ fontStyle: "italic", color: colors.textSecondary, fontSize: "0.9em", display: "block", marginTop: "5px" }}>
            Código Civil, Lei 10.406/2002
          </span>
        </div>

        <div>
          <p style={{ marginBottom: "1.2em", color: colors.text }}>
            Aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito.
          </p>

          <ul style={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}>
            <li style={{ marginBottom: "1em", paddingLeft: "20px", textIndent: "-20px", color: colors.text }}>
              <span style={{ fontWeight: 700, color: colors.accent, marginRight: "5px" }}>§ 1º</span>
              Também comete ato ilícito o titular de um direito que, ao exercê-lo, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes.
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h2 style={{ 
            fontFamily: "'Merriweather', Georgia, serif",
            color: colors.accent,
            fontSize: "1.6em",
            borderBottom: `2px solid ${isDark ? colors.accent : "#C9A86A"}`,
            paddingBottom: "8px",
            marginTop: "24px",
            marginBottom: "16px"
          }}>
            Jurisprudência Relevante
          </h2>
          <blockquote style={{
            backgroundColor: colors.card,
            borderLeft: `4px solid ${colors.accent}`,
            margin: "20px 0",
            padding: "15px 20px 5px 20px",
            fontStyle: "italic",
            color: colors.text
          }}>
            <p>"A responsabilidade civil decorre da violação de um dever jurídico, seja ele contratual ou extracontratual, causando dano a outrem."</p>
            <footer style={{
              display: "block",
              textAlign: "right",
              fontStyle: "normal",
              fontSize: "0.8em",
              color: colors.textSecondary,
              marginTop: "10px"
            }}>
              STJ, REsp 1.234.567/SP
            </footer>
          </blockquote>
        </div>

        <div style={{
          backgroundColor: isDark ? colors.card : "#E6F0F8",
          border: `1px solid ${isDark ? colors.border : "#C5DCEF"}`,
          padding: "30px",
          marginTop: "40px",
          textAlign: "center",
          borderRadius: "8px"
        }}>
          <h2 style={{ color: colors.accent, marginTop: 0 }}>Guia Completo de Responsabilidade Civil</h2>
          <p style={{ color: colors.text }}>Acesse nosso material exclusivo com análise detalhada de casos práticos</p>
          <button style={{
            display: "inline-block",
            backgroundColor: colors.accent,
            color: isDark ? colors.background : "#ffffff",
            padding: "12px 25px",
            border: "none",
            fontWeight: 700,
            borderRadius: "4px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginTop: "15px",
            cursor: "pointer"
          }}>
            Acessar Material
          </button>
        </div>
      </main>

      <footer style={{
        backgroundColor: colors.backgroundSecondary,
        padding: "30px 24px",
        textAlign: "center",
        fontSize: "0.9em",
        borderTop: `1px solid ${colors.border}`,
        marginTop: "60px"
      }}>
        <div style={{
          backgroundColor: colors.card,
          padding: "15px",
          marginBottom: "20px",
          borderRadius: "4px",
          maxWidth: "800px",
          margin: "0 auto 20px"
        }}>
          <h3 style={{ marginTop: 0, fontSize: "1.1em", color: colors.text }}>Aviso Legal</h3>
          <p style={{ color: colors.text }}><strong style={{ color: isDark ? "#CF6679" : "#D32F2F" }}>ATENÇÃO:</strong> Este conteúdo tem fins educacionais. Consulte um advogado para casos específicos.</p>
        </div>
        <p style={{ color: colors.textSecondary }}>© 2024 - Material Educacional de Direito Civil</p>
      </footer>
    </div>
  );
};

export default Civil;
