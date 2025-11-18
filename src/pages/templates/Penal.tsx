import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";

const Penal = () => {
  useTemplateRedirect();
  
  useEffect(() => {
    trackTemplateView('Direito Penal');
  }, []);

  return (
    <div style={{ 
      fontFamily: "'Inter', 'Roboto', Arial, sans-serif",
      fontSize: "18px",
      lineHeight: 1.6,
      color: "#1C1C1C",
      backgroundColor: "#FFFFFF",
      margin: 0,
      scrollBehavior: "smooth"
    }}>
      <header id="site-header" style={{
        backgroundColor: "#003366",
        color: "#FFFFFF",
        padding: "16px 24px 0 24px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div style={{ 
            textAlign: "center",
            paddingBottom: "12px",
            width: "100%"
          }}>
            <Link to="/templates" style={{ color: "white", textDecoration: "none", fontSize: "0.9em", display: "block", marginBottom: "8px" }}>
              ← Voltar aos Templates
            </Link>
            <h1 style={{
              color: "#FFFFFF",
              fontSize: "1.8em",
              margin: "0 0 4px 0"
            }}>
              Direito Penal Brasileiro
            </h1>
            <p style={{ fontSize: "0.9em", opacity: 0.8, marginBottom: "8px" }}>
              Código Penal e Legislação Complementar
            </p>
          </div>

          <nav style={{ width: "100%", paddingBottom: "8px" }}>
            <ul style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              listStyle: "none",
              padding: 0,
              margin: 0
            }}>
              <li><a href="#crimes" style={{
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: 500,
                padding: "5px 10px",
                borderRadius: "4px 4px 0 0",
                transition: "background-color 0.2s ease",
                fontSize: "0.9em"
              }}>Crimes</a></li>
              <li><a href="#penas" style={{
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: 500,
                padding: "5px 10px",
                borderRadius: "4px 4px 0 0",
                fontSize: "0.9em"
              }}>Penas</a></li>
              <li><a href="#processo" style={{
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: 500,
                padding: "5px 10px",
                borderRadius: "4px 4px 0 0",
                fontSize: "0.9em"
              }}>Processo Penal</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "32px 24px",
        display: "grid",
        gridTemplateColumns: "2.5fr 1fr",
        gap: "48px"
      }}>
        <main style={{ padding: 0 }}>
          <h2 style={{
            lineHeight: 1.2,
            marginBottom: "8px",
            fontWeight: 700,
            color: "#003366",
            fontSize: "2rem",
            borderBottom: "2px solid #F4F6F8",
            paddingBottom: "5px"
          }}>
            Código Penal Brasileiro
          </h2>

          <p style={{ marginBottom: "16px" }}>
            O Código Penal Brasileiro (Decreto-Lei nº 2.848/1940) é a principal lei que define os crimes e suas respectivas penas no Brasil.
          </p>

          <div style={{
            backgroundColor: "#F4F6F8",
            borderLeft: "5px solid #003366",
            padding: "24px",
            marginBottom: "24px",
            borderRadius: "0 4px 4px 0"
          }}>
            <h3 style={{ color: "#003366", marginTop: 0, fontSize: "1.5rem" }}>
              Art. 121 - Homicídio
            </h3>
            <p>Matar alguém:</p>
            <p style={{ marginTop: "16px" }}>
              <strong>Pena:</strong> reclusão, de seis a vinte anos.
            </p>
            <footer style={{
              marginTop: "16px",
              fontSize: "0.9em",
              color: "#555",
              borderTop: "1px dashed #CCC",
              paddingTop: "8px"
            }}>
              Código Penal, Decreto-Lei 2.848/1940
            </footer>
          </div>

          <div id="aviso-legal" style={{
            marginTop: "48px",
            padding: "24px",
            backgroundColor: "rgba(255, 195, 0, 0.1)",
            border: "1px solid #FFC300",
            borderRadius: "6px"
          }}>
            <p style={{
              color: "#1C1C1C",
              fontStyle: "italic",
              fontSize: "0.95em",
              lineHeight: 1.4,
              marginBottom: 0
            }}>
              <strong>Aviso Legal:</strong> Este material tem fins exclusivamente educacionais. Não constitui orientação jurídica. Para questões específicas, consulte um advogado criminalista.
            </p>
          </div>
        </main>

        <aside style={{
          padding: "24px",
          backgroundColor: "#F4F6F8",
          borderRadius: "6px",
          position: "sticky",
          top: "100px",
          height: "fit-content"
        }}>
          <h2 style={{ color: "#1C1C1C", border: "none", marginTop: 0, fontSize: "1.3rem" }}>
            Busca Rápida
          </h2>
          <form style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "32px"
          }}>
            <label htmlFor="search-input" style={{ fontWeight: 600 }}>Buscar artigos:</label>
            <input 
              id="search-input"
              type="search"
              placeholder="Ex: Art. 155"
              style={{
                padding: "12px",
                border: "1px solid #CCC",
                borderRadius: "4px",
                fontSize: "1em"
              }}
            />
            <button style={{
              backgroundColor: "#FFC300",
              color: "#1C1C1C",
              padding: "12px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: 700,
              transition: "background-color 0.2s ease"
            }}>
              Buscar
            </button>
          </form>

          <div id="ferramentas">
            <h3 style={{ color: "#1C1C1C", border: "none", fontSize: "1.1rem" }}>
              Ferramentas
            </h3>
            <ul style={{ paddingLeft: 0 }}>
              <li style={{ 
                padding: "8px 0",
                borderTop: "1px dashed #CCC"
              }}>
                <a href="#" style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  display: "block",
                  color: "#003366"
                }}>Calculadora de Penas</a>
              </li>
              <li style={{ 
                padding: "8px 0",
                borderTop: "1px dashed #CCC"
              }}>
                <a href="#" style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  display: "block",
                  color: "#003366"
                }}>Jurisprudência</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <footer style={{
        backgroundColor: "#1C1C1C",
        color: "#EFEFEF",
        padding: "32px 16px",
        textAlign: "center",
        fontSize: "0.85em"
      }}>
        <p>© 2024 - Material Educacional de Direito Penal</p>
      </footer>
    </div>
  );
};

export default Penal;
