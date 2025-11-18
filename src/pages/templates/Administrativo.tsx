import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";

const Administrativo = () => {
  useTemplateRedirect();
  
  useEffect(() => {
    trackTemplateView('Direito Administrativo');
  }, []);

  return (
    <div style={{ 
      fontFamily: "'Open Sans', sans-serif",
      lineHeight: 1.6,
      color: "#212529",
      backgroundColor: "#f8f9fa",
      margin: 0,
      padding: 0
    }}>
      <header style={{
        backgroundColor: "#004d99",
        color: "white",
        padding: "20px 0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <Link to="/templates" style={{ color: "white", textDecoration: "none", fontSize: "0.9em" }}>
            ← Voltar aos Templates
          </Link>
          <h1 style={{ 
            color: "white",
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
              <li><a href="#fundamentos" style={{ color: "white", fontWeight: 600, padding: "5px 0" }}>Fundamentos</a></li>
              <li><a href="#licitacoes" style={{ color: "white", fontWeight: 600 }}>Licitações</a></li>
              <li><a href="#atos" style={{ color: "white", fontWeight: 600 }}>Atos Administrativos</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section style={{ padding: "80px 0", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ 
            fontSize: "2.2rem", 
            color: "#004d99",
            borderBottom: "2px solid #007bff",
            paddingBottom: "8px",
            marginBottom: "20px"
          }}>
            Lei 14.133/2021 - Nova Lei de Licitações
          </h2>
          <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
            A Nova Lei de Licitações e Contratos Administrativos representa uma mudança significativa no sistema de compras públicas brasileiro.
          </p>

          <div style={{
            backgroundColor: "#e9ecef",
            borderLeft: "5px solid #007bff",
            padding: "20px 24px",
            marginTop: "40px",
            borderRadius: "4px"
          }}>
            <h3 style={{ color: "#004d99", marginTop: 0 }}>Pilares LIMPE</h3>
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
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Legalidade</li>
              <li style={{ 
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Impessoalidade</li>
              <li style={{ 
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Moralidade</li>
              <li style={{ 
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Publicidade</li>
              <li style={{ 
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 20px",
                borderRadius: "4px"
              }}>Eficiência</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: "white",
            border: "1px solid #007bff",
            borderLeft: "5px solid #007bff",
            padding: "20px",
            marginTop: "40px",
            borderRadius: "4px",
            textAlign: "center"
          }}>
            <h4 style={{ color: "#004d99", marginBottom: "8px" }}>Ferramenta de Análise de Licitações</h4>
            <p style={{ marginBottom: "20px" }}>Acesse nossa ferramenta exclusiva para análise de processos licitatórios</p>
            <button style={{
              backgroundColor: "#007bff",
              color: "white",
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
        backgroundColor: "#212529",
        color: "white",
        padding: "20px 0",
        fontSize: "0.9rem",
        textAlign: "center",
        marginTop: "60px"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <p style={{ color: "#dc3545", fontWeight: 600, marginBottom: "8px" }}>
            AVISO LEGAL
          </p>
          <p>Este material é apenas educacional e não substitui consulta jurídica profissional.</p>
        </div>
      </footer>
    </div>
  );
};

export default Administrativo;
