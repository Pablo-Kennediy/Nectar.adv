import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";

const Imobiliario = () => {
  useTemplateRedirect();
  
  useEffect(() => {
    trackTemplateView('Direito Imobiliário');
  }, []);

  return (
    <div style={{ 
      fontFamily: "'Open Sans', Arial, sans-serif",
      lineHeight: 1.7,
      color: "#212529",
      backgroundColor: "#f8f9fa",
      paddingTop: "100px",
      margin: 0
    }}>
      <header style={{
        backgroundColor: "#0056b3",
        color: "white",
        padding: "18px 0",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)"
      }}>
        <div style={{ 
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "0 15px"
        }}>
          <div>
            <Link to="/templates" style={{ color: "white", textDecoration: "none", fontSize: "0.9em", display: "block", marginBottom: "5px" }}>
              ← Voltar aos Templates
            </Link>
            <h1 style={{ 
              fontSize: "1.8rem",
              fontWeight: 700,
              margin: 0,
              padding: "5px 0"
            }}>
              Direito Imobiliário
            </h1>
          </div>
          <form style={{ display: "flex" }}>
            <input 
              type="search" 
              placeholder="Buscar..."
              style={{
                padding: "10px 18px",
                border: "1px solid #ccc",
                borderRadius: "6px 0 0 6px",
                width: "300px",
                fontSize: "1rem"
              }}
            />
            <button type="submit" style={{
              padding: "10px 18px",
              backgroundColor: "#38a169",
              color: "white",
              border: "none",
              borderRadius: "0 6px 6px 0",
              cursor: "pointer",
              transition: "background-color 0.2s"
            }}>
              Buscar
            </button>
          </form>
        </div>
      </header>

      <div style={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        gap: "40px",
        marginTop: "30px",
        width: "90%",
        maxWidth: "1200px",
        margin: "30px auto 0",
        padding: "0 15px"
      }}>
        <aside style={{
          position: "sticky",
          top: "100px",
          height: "fit-content",
          paddingRight: "20px"
        }}>
          <h2 style={{
            borderBottom: "2px solid #e9ecef",
            paddingBottom: "8px",
            marginTop: "3vh",
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#0056b3"
          }}>
            Navegação
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0 0" }}>
            <li><a href="#compra-venda" style={{
              display: "block",
              padding: "10px 15px",
              color: "#212529",
              textDecoration: "none",
              borderLeft: "4px solid transparent",
              marginLeft: "-15px",
              transition: "all 0.2s"
            }}>Compra e Venda</a></li>
            <li><a href="#locacao" style={{
              display: "block",
              padding: "10px 15px",
              color: "#212529",
              textDecoration: "none",
              borderLeft: "4px solid transparent",
              marginLeft: "-15px"
            }}>Locação</a></li>
            <li><a href="#usucapiao" style={{
              display: "block",
              padding: "10px 15px",
              color: "#212529",
              textDecoration: "none",
              borderLeft: "4px solid transparent",
              marginLeft: "-15px"
            }}>Usucapião</a></li>
          </ul>
        </aside>

        <main id="conteudo-principal" style={{ padding: 0 }}>
          <article style={{ margin: "40px" }}>
            <div style={{
              backgroundColor: "#fff8e1",
              borderLeft: "6px solid #ffc107",
              padding: "20px 25px",
              margin: "30px 0",
              borderRadius: "6px",
              color: "#7d5a00",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
            }}>
              <h3 style={{ color: "#7d5a00", marginTop: 0, borderBottom: "none" }}>
                Lei do Distrato Imobiliário
              </h3>
              <p>Conheça seus direitos na rescisão de contratos de compra e venda de imóveis (Lei 13.786/2018)</p>
            </div>
          </article>

          <section style={{ marginBottom: "60px", paddingTop: "10px" }}>
            <h2 style={{
              fontFamily: "'Merriweather', Georgia, serif",
              color: "#0056b3",
              fontSize: "2rem",
              borderBottom: "2px solid #e9ecef",
              paddingBottom: "12px",
              marginTop: "24px",
              marginBottom: "16px"
            }}>
              Compra e Venda de Imóveis
            </h2>
            <p style={{ marginBottom: "1.2em" }}>
              A compra e venda de imóveis é regulada pelo Código Civil Brasileiro e por legislação específica. É fundamental conhecer todos os aspectos legais antes de realizar uma transação imobiliária.
            </p>

            <div style={{
              border: "1px solid #dee2e6",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
            }}>
              <p><strong style={{ color: "#0056b3" }}>Documentação Essencial:</strong></p>
              <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                <li>Matrícula atualizada do imóvel</li>
                <li>Certidões negativas</li>
                <li>IPTU quitado</li>
                <li>Habite-se (para imóveis novos)</li>
              </ul>
            </div>
          </section>
        </main>
      </div>

      <footer style={{
        backgroundColor: "#212529",
        color: "#cccccc",
        padding: "25px 0",
        marginTop: "60px",
        fontSize: "0.9rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 15px" }}>
          <p><strong>Aviso Legal:</strong> Este conteúdo é educacional. Consulte um advogado especializado para casos específicos.</p>
          <p style={{ marginTop: "10px" }}>© 2024 - Material Educacional de Direito Imobiliário</p>
        </div>
      </footer>
    </div>
  );
};

export default Imobiliario;
