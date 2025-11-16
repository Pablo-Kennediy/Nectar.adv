import { Link } from "react-router-dom";

const Ambiental = () => {
  return (
    <div style={{ 
      fontFamily: "'Roboto', Arial, sans-serif",
      lineHeight: 1.6,
      color: "#2c2c2c",
      backgroundColor: "#fcfbf6",
      margin: 0,
      paddingTop: "4rem"
    }}>
      <header style={{
        backgroundColor: "#ffffff",
        color: "#2c2c2c",
        padding: "24px",
        borderBottom: "3px solid #654321",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Link to="/templates" style={{ color: "#654321", textDecoration: "none", fontSize: "0.9em", fontWeight: 600 }}>
            ← Voltar aos Templates
          </Link>
          <h1 style={{ 
            color: "#004d00",
            marginBottom: "4px",
            fontSize: "2.5rem",
            marginTop: "10px"
          }}>
            Compliance e Legislação Ambiental
          </h1>
          <p style={{ fontSize: "1rem", color: "#2c2c2c", marginBottom: "16px" }}>
            Tema Natureza/Selva - Verde, Madeira e Terra
          </p>
          <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "16px", padding: 0 }}>
              <li><a href="#legislacao" style={{ 
                color: "#654321",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                transition: "background-color 0.3s, color 0.3s",
                fontWeight: 600
              }}>Legislação</a></li>
              <li><a href="#compliance" style={{ 
                color: "#654321",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                fontWeight: 600
              }}>Compliance</a></li>
              <li><a href="#ferramentas" style={{ 
                color: "#654321",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                fontWeight: 600
              }}>Ferramentas</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "16px 24px" }}>
        <section style={{ padding: "32px 0" }}>
          <h2 style={{ 
            fontSize: "2rem",
            borderBottom: "2px solid #d0c7b6",
            paddingBottom: "8px",
            marginBottom: "16px",
            color: "#004d00"
          }}>
            Legislação Ambiental Brasileira
          </h2>
          <p style={{ marginBottom: "16px", fontFamily: "'Merriweather', Georgia, serif" }}>
            O Brasil possui uma das legislações ambientais mais completas do mundo. Conheça os principais marcos legais e suas aplicações práticas.
          </p>

          <div style={{
            backgroundColor: "#ffffff",
            border: "1px solid #d0c7b6",
            borderLeft: "5px solid #b8860b",
            padding: "24px",
            marginTop: "16px",
            borderRadius: "4px"
          }}>
            <h3 style={{ color: "#654321", fontSize: "1.5rem", marginBottom: "16px" }}>
              Principais Normas Ambientais
            </h3>
            <ul style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              <li style={{ marginBottom: "8px" }}>Lei 6.938/81 - Política Nacional do Meio Ambiente</li>
              <li style={{ marginBottom: "8px" }}>Lei 9.605/98 - Lei de Crimes Ambientais</li>
              <li style={{ marginBottom: "8px" }}>Lei 12.651/12 - Código Florestal</li>
              <li style={{ marginBottom: "8px" }}>Resolução CONAMA 001/86 - Licenciamento Ambiental</li>
            </ul>
          </div>

          <a href="#ferramentas" style={{
            display: "inline-block",
            backgroundColor: "#004d00",
            color: "white",
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

        <hr style={{ border: 0, height: "1px", backgroundColor: "#b8860b", margin: "32px 0" }} />

        <section style={{ padding: "32px 0" }}>
          <div style={{
            backgroundColor: "#ffffff",
            border: "1px solid #d0c7b6",
            borderLeft: "5px solid #b8860b",
            padding: "24px",
            marginTop: "16px",
            borderRadius: "4px"
          }}>
            <h3 style={{ color: "#654321", fontSize: "1.5rem", marginBottom: "16px" }}>
              Ferramenta de Análise
            </h3>
            <p style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              Utilize nossa ferramenta para avaliar o compliance ambiental de sua empresa e identificar áreas de melhoria.
            </p>
          </div>
        </section>
      </main>

      <footer style={{
        backgroundColor: "#654321",
        color: "white",
        padding: "32px",
        fontSize: "0.9rem"
      }}>
        <div style={{
          backgroundColor: "#79553d",
          padding: "16px",
          marginBottom: "16px",
          borderRadius: "4px"
        }}>
          <h3 style={{ color: "#fce8a6", marginTop: 0 }}>Aviso Legal</h3>
          <p>Este conteúdo é informativo e não substitui consultoria jurídica especializada em direito ambiental.</p>
        </div>
        <div style={{ textAlign: "center", color: "#eee" }}>
          <p>© 2024 - Material Educacional sobre Legislação Ambiental</p>
        </div>
      </footer>
    </div>
  );
};

export default Ambiental;
