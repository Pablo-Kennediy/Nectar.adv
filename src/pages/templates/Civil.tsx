import { Link } from "react-router-dom";

const Civil = () => {
  return (
    <div style={{ 
      fontFamily: "'Inter', Roboto, sans-serif",
      color: "#1A1A1A",
      backgroundColor: "#FAFAFA",
      lineHeight: 1.6,
      fontSize: "18px",
      margin: 0
    }}>
      <header style={{
        backgroundColor: "white",
        padding: "20px 24px",
        borderBottom: "1px solid #EBEBEB",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        <div>
          <Link to="/templates" style={{ color: "#105A93", textDecoration: "none", fontSize: "0.9em", fontWeight: 600 }}>
            ← Voltar aos Templates
          </Link>
          <h1 style={{ 
            fontSize: "1.5em",
            margin: "10px 0 0 0",
            fontFamily: "'Merriweather', Georgia, serif",
            color: "#105A93"
          }}>
            Direito Civil Brasileiro
          </h1>
        </div>
        <nav>
          <ul style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0 }}>
            <li><a href="#contratos" style={{ color: "#105A93", textDecoration: "none", fontWeight: 600 }}>Contratos</a></li>
            <li><a href="#obrigacoes" style={{ color: "#105A93", textDecoration: "none", fontWeight: 600 }}>Obrigações</a></li>
            <li><a href="#familia" style={{ color: "#105A93", textDecoration: "none", fontWeight: 600 }}>Família</a></li>
          </ul>
        </nav>
      </header>

      <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 24px" }}>
        <nav style={{ fontSize: "0.9em", marginBottom: "20px" }}>
          <ul style={{ listStyle: "none", display: "flex", padding: 0 }}>
            <li>Início</li>
            <li style={{ margin: "0 5px", color: "#999" }}>/</li>
            <li>Direito Civil</li>
            <li style={{ margin: "0 5px", color: "#999" }}>/</li>
            <li>Artigo 186</li>
          </ul>
        </nav>

        <div style={{
          borderBottom: "2px solid #C9A86A",
          paddingBottom: "10px",
          marginBottom: "30px"
        }}>
          <h1 style={{ 
            fontFamily: "'Merriweather', Georgia, serif",
            color: "#105A93",
            fontSize: "2.2em",
            marginTop: "24px",
            marginBottom: "8px"
          }}>
            Art. 186 - Ato Ilícito
          </h1>
          <span style={{ fontStyle: "italic", color: "#666", fontSize: "0.9em", display: "block", marginTop: "5px" }}>
            Código Civil, Lei 10.406/2002
          </span>
        </div>

        <div>
          <p style={{ marginBottom: "1.2em" }}>
            Aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito.
          </p>

          <ul style={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}>
            <li style={{ marginBottom: "1em", paddingLeft: "20px", textIndent: "-20px" }}>
              <span style={{ fontWeight: 700, color: "#105A93", marginRight: "5px" }}>§ 1º</span>
              Também comete ato ilícito o titular de um direito que, ao exercê-lo, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes.
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h2 style={{ 
            fontFamily: "'Merriweather', Georgia, serif",
            color: "#105A93",
            fontSize: "1.6em",
            borderBottom: "2px solid #C9A86A",
            paddingBottom: "8px",
            marginTop: "24px",
            marginBottom: "16px"
          }}>
            Jurisprudência Relevante
          </h2>
          <blockquote style={{
            backgroundColor: "white",
            borderLeft: "4px solid #105A93",
            margin: "20px 0",
            padding: "15px 20px 5px 20px",
            fontStyle: "italic"
          }}>
            <p>"A responsabilidade civil decorre da violação de um dever jurídico, seja ele contratual ou extracontratual, causando dano a outrem."</p>
            <footer style={{
              display: "block",
              textAlign: "right",
              fontStyle: "normal",
              fontSize: "0.8em",
              color: "#666",
              marginTop: "10px"
            }}>
              STJ, REsp 1.234.567/SP
            </footer>
          </blockquote>
        </div>

        <div style={{
          backgroundColor: "#E6F0F8",
          border: "1px solid #C5DCEF",
          padding: "30px",
          marginTop: "40px",
          textAlign: "center",
          borderRadius: "8px"
        }}>
          <h2 style={{ color: "#105A93", marginTop: 0 }}>Guia Completo de Responsabilidade Civil</h2>
          <p>Acesse nosso material exclusivo com análise detalhada de casos práticos</p>
          <button style={{
            display: "inline-block",
            backgroundColor: "#105A93",
            color: "white",
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
        backgroundColor: "#EBEBEB",
        padding: "30px 24px",
        textAlign: "center",
        fontSize: "0.9em",
        borderTop: "1px solid #DEDEDE",
        marginTop: "60px"
      }}>
        <div style={{
          backgroundColor: "#F0F0F0",
          padding: "15px",
          marginBottom: "20px",
          borderRadius: "4px",
          maxWidth: "800px",
          margin: "0 auto 20px"
        }}>
          <h3 style={{ marginTop: 0, fontSize: "1.1em", color: "#444" }}>Aviso Legal</h3>
          <p><strong style={{ color: "#D32F2F" }}>ATENÇÃO:</strong> Este conteúdo tem fins educacionais. Consulte um advogado para casos específicos.</p>
        </div>
        <p>© 2024 - Material Educacional de Direito Civil</p>
      </footer>
    </div>
  );
};

export default Civil;
