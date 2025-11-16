import { Link } from "react-router-dom";

const Previdenciario = () => {
  return (
    <div style={{ 
      fontFamily: "'Roboto', Arial, sans-serif",
      lineHeight: 1.6,
      color: "#333",
      backgroundColor: "#f8f9fa",
      margin: 0,
      padding: 0
    }}>
      <header style={{
        backgroundColor: "#1a4d7d",
        color: "white",
        padding: "15px 0",
        borderBottom: "5px solid #00c7b3"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <Link to="/templates" style={{ color: "white", textDecoration: "none", fontSize: "0.9em", display: "block", marginBottom: "8px" }}>
            ← Voltar aos Templates
          </Link>
          <h1 style={{ fontSize: "1.8em", display: "inline-block", margin: "0" }}>
            Direito Previdenciário
          </h1>
          <nav style={{ float: "right", marginTop: "10px" }}>
            <a href="#beneficios" style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "20px",
              padding: "5px 10px",
              transition: "background-color 0.3s"
            }}>Benefícios</a>
            <a href="#aposentadoria" style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "20px",
              padding: "5px 10px",
              border: "1px solid white",
              borderRadius: "4px"
            }}>Aposentadorias</a>
          </nav>
          <div style={{ clear: "both" }}></div>
        </div>
      </header>

      <main style={{ paddingTop: "40px", paddingBottom: "60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ color: "#1a4d7d", fontSize: "2.2em", marginBottom: "16px" }}>
              Legislação Previdenciária
            </h2>
            <p style={{ fontSize: "1.1em", color: "#6c757d" }}>
              Entenda seus direitos e os benefícios previdenciários disponíveis
            </p>
            <small style={{ color: "#6c757d", fontStyle: "italic", display: "block", marginTop: "15px" }}>
              Fundamentação: Lei 8.213/91 (Lei de Benefícios da Previdência Social)
            </small>
          </div>

          <section style={{ marginBottom: "50px" }}>
            <h3 style={{
              borderLeft: "5px solid #1a4d7d",
              paddingLeft: "15px",
              marginBottom: "30px",
              color: "#1a4d7d",
              fontSize: "1.8em"
            }}>
              Tipos de Aposentadoria
            </h3>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                flex: "1 1 calc(33% - 40px)",
                minWidth: "280px"
              }}>
                <h4 style={{ color: "#00c7b3", marginBottom: "10px", fontSize: "1.3em" }}>
                  Aposentadoria por Idade
                </h4>
                <p>Destinada aos trabalhadores que atingiram a idade mínima estabelecida pela legislação previdenciária.</p>
                <p style={{ marginTop: "12px" }}><strong>Requisitos:</strong></p>
                <ul style={{ marginLeft: "20px" }}>
                  <li>Idade mínima (varia conforme regras de transição)</li>
                  <li>Carência de 180 contribuições</li>
                </ul>
              </div>

              <div style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                flex: "1 1 calc(33% - 40px)",
                minWidth: "280px"
              }}>
                <h4 style={{ color: "#00c7b3", marginBottom: "10px", fontSize: "1.3em" }}>
                  Aposentadoria por Tempo de Contribuição
                </h4>
                <p>Concedida aos segurados que completaram o tempo mínimo de contribuição ao INSS.</p>
                <p style={{ marginTop: "12px" }}><strong>Atenção:</strong> Regras alteradas pela Reforma da Previdência (EC 103/2019)</p>
              </div>

              <div style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                flex: "1 1 calc(33% - 40px)",
                minWidth: "280px",
                border: "2px solid #00c7b3"
              }}>
                <h4 style={{ color: "#00c7b3", marginBottom: "10px", fontSize: "1.3em" }}>
                  Aposentadoria por Invalidez
                </h4>
                <p>Para segurados que ficaram permanentemente incapacitados para o trabalho.</p>
                <p style={{ marginTop: "12px" }}><strong>Requisito:</strong> Perícia médica do INSS</p>
              </div>
            </div>
          </section>

          <div style={{
            backgroundColor: "#fff3cd",
            color: "#856404",
            padding: "20px",
            border: "1px solid #ffeeba",
            borderRadius: "5px",
            marginTop: "50px"
          }}>
            <h4 style={{ color: "#856404", marginBottom: "10px", fontSize: "1.2em" }}>
              Aviso Legal
            </h4>
            <p>Este conteúdo é informativo e educacional. Para análise específica do seu caso, consulte um advogado especializado em Direito Previdenciário.</p>
          </div>
        </div>
      </main>

      <footer style={{
        backgroundColor: "#343a40",
        color: "#dee2e6",
        textAlign: "center",
        padding: "20px 0",
        fontSize: "0.9em"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <p>© 2024 - Material Educacional de Direito Previdenciário</p>
        </div>
      </footer>
    </div>
  );
};

export default Previdenciario;
