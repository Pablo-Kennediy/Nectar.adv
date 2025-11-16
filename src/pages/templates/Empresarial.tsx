import { Link } from "react-router-dom";

const Empresarial = () => {
  return (
    <div style={{ 
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "#333333",
      backgroundColor: "#f8f8f8",
      margin: 0
    }}>
      <header style={{
        backgroundColor: "#004d99",
        color: "#ffffff",
        padding: "24px 0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <Link to="/templates" style={{ color: "white", textDecoration: "none", fontSize: "0.9em" }}>
            ← Voltar aos Templates
          </Link>
          <h1 style={{ 
            fontSize: "2.2rem",
            marginBottom: "4px",
            fontFamily: "Georgia, serif",
            marginTop: "10px"
          }}>
            Direito Empresarial
          </h1>
          <p style={{ fontSize: "1rem", opacity: 0.8 }}>
            Sociedades, Contratos e Compliance Corporativo
          </p>
        </div>
      </header>

      <nav style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #dddddd",
        padding: "12px 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)"
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
            color: "#333333",
            fontWeight: 600,
            padding: "8px 4px",
            transition: "color 0.3s, border-bottom 0.3s"
          }}>Sociedades</a></li>
          <li><a href="#contratos" style={{ 
            textDecoration: "none",
            color: "#333333",
            fontWeight: 600,
            padding: "8px 4px"
          }}>Contratos</a></li>
          <li><a href="#compliance" style={{ 
            textDecoration: "none",
            color: "#333333",
            fontWeight: 600,
            padding: "8px 4px"
          }}>Compliance</a></li>
        </ul>
      </nav>

      <main style={{ padding: "32px 0", width: "90%", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          backgroundColor: "#ffffff",
          padding: "32px",
          marginBottom: "32px",
          borderLeft: "5px solid #004d99",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px"
        }}>
          <h2 style={{ 
            color: "#004d99",
            marginTop: 0,
            marginBottom: "16px",
            fontSize: "1.8rem"
          }}>
            Tipos de Sociedades Empresariais
          </h2>
          <p style={{ color: "#666666", fontStyle: "italic", marginBottom: "16px" }}>
            Entenda as principais modalidades societárias no Brasil
          </p>

          <div style={{ marginTop: "32px", marginBottom: "48px" }}>
            <h3 style={{ fontSize: "1.4rem", color: "#333333", marginTop: "32px", marginBottom: "16px" }}>
              Sociedade Limitada (LTDA)
            </h3>
            <div style={{
              padding: "24px",
              backgroundColor: "#f0f0f0",
              borderLeft: "3px solid #ff9900",
              fontFamily: "Georgia, serif",
              whiteSpace: "pre-wrap"
            }}>
              <p>A sociedade limitada é a forma mais comum de sociedade empresarial no Brasil. Caracteriza-se pela responsabilidade limitada dos sócios ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social.</p>
              <p style={{ marginTop: "16px" }}><strong>Base Legal:</strong> Código Civil, Arts. 1.052 a 1.087</p>
            </div>
          </div>

          <div id="busca-avancada" style={{ marginTop: "32px" }}>
            <h3 style={{ fontSize: "1.4rem", color: "#333333", marginBottom: "16px" }}>
              Busca de Legislação
            </h3>
            <form style={{ display: "flex", width: "100%", maxWidth: "600px", marginTop: "16px" }}>
              <input 
                type="search" 
                placeholder="Buscar artigos..."
                style={{
                  width: "70%",
                  padding: "12px 16px",
                  border: "1px solid #dddddd",
                  borderRadius: "4px 0 0 4px",
                  fontSize: "1rem",
                  outline: "none"
                }}
              />
              <button style={{
                width: "30%",
                padding: "12px 16px",
                backgroundColor: "#ff9900",
                color: "#ffffff",
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
        backgroundColor: "#333333",
        color: "#f8f8f8",
        padding: "32px 0",
        fontSize: "0.9rem",
        textAlign: "center"
      }}>
        <div style={{
          marginBottom: "16px",
          padding: "8px",
          backgroundColor: "#444444",
          borderRadius: "3px",
          maxWidth: "800px",
          margin: "0 auto 16px"
        }}>
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Aviso Legal</p>
          <p>Este material é educativo e não substitui orientação jurídica profissional em direito empresarial.</p>
        </div>
        <a href="#" style={{ color: "#ff9900", textDecoration: "none", marginTop: "8px", display: "block" }}>
          Política de Privacidade
        </a>
      </footer>
    </div>
  );
};

export default Empresarial;
