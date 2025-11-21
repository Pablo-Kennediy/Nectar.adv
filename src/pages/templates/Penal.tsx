import { Link } from "react-router-dom";
import { useTemplateRedirect } from "@/hooks/useTemplateRedirect";
import { useEffect } from "react";
import { trackTemplateView } from "@/utils/analytics";

const Penal = () => {
  useTemplateRedirect();
  
  useEffect(() => {
    trackTemplateView('Direito Penal');
  }, []);

  const styles = {
    root: {
      fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
      fontSize: "1.1rem",
      lineHeight: 1.7,
      color: "#E0E0E0",
      backgroundColor: "#121212",
      margin: 0,
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 16px",
    },
    mainHeader: {
      backgroundColor: "#1E1E1E",
      padding: "16px 0",
      borderBottom: "1px solid #333",
      position: "sticky" as const,
      top: 0,
      zIndex: 100,
    },
    headerNav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    siteTitle: {
      fontFamily: "Georgia, serif",
      color: "#E0E0E0",
      fontSize: "1.5rem",
      fontWeight: "bold" as const,
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "32px",
      padding: 0,
      margin: 0,
    },
    navLink: {
      color: "#9E9E9E",
      fontSize: "1rem",
      padding: "8px",
      textDecoration: "none",
      transition: "color 0.2s",
    },
    searchForm: {
      display: "flex",
      gap: "8px",
    },
    searchInput: {
      padding: "8px",
      border: "1px solid #333",
      backgroundColor: "#252525",
      color: "#E0E0E0",
      borderRadius: "4px",
      width: "300px",
      fontSize: "1rem",
    },
    searchButton: {
      backgroundColor: "#BB86FC",
      color: "#121212",
      border: "none",
      padding: "8px 16px",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold" as const,
      display: "flex",
      alignItems: "center",
      gap: "4px",
      transition: "background-color 0.2s",
    },
    breadcrumb: {
      padding: "32px 0",
      fontSize: "0.9rem",
      color: "#9E9E9E",
    },
    breadcrumbList: {
      listStyle: "none",
      display: "flex",
      gap: "8px",
      padding: 0,
      margin: 0,
    },
    articlePage: {
      display: "grid",
      gridTemplateColumns: "3fr 1fr",
      gap: "32px",
      padding: "32px 16px",
    },
    legalArticle: {
      borderRight: "1px solid #333",
      paddingRight: "32px",
    },
    articleHeader: {
      marginBottom: "32px",
    },
    lawContext: {
      color: "#9E9E9E",
      fontSize: "0.9rem",
      textTransform: "uppercase" as const,
    },
    articleTitle: {
      fontSize: "2.2rem",
      fontFamily: "Georgia, serif",
      color: "#BB86FC",
      marginTop: "8px",
      lineHeight: 1.2,
    },
    articleCaput: {
      marginBottom: "32px",
      padding: "16px",
      backgroundColor: "#1E1E1E",
      borderRadius: "4px",
      borderLeft: "3px solid #777",
    },
    caputText: {
      fontSize: "1.15rem",
    },
    pena: {
      fontStyle: "italic" as const,
      color: "#CF6679",
      marginTop: "8px",
      fontWeight: 500,
    },
    paragraph: {
      marginBottom: "32px",
      padding: "16px",
      backgroundColor: "#1E1E1E",
      borderRadius: "4px",
      borderLeft: "3px solid #777",
    },
    paragraphTitle: {
      fontSize: "1.3rem",
      color: "#E0E0E0",
      marginBottom: "8px",
      borderBottom: "1px dashed #444",
      paddingBottom: "4px",
    },
    relatedContent: {
      paddingTop: "32px",
    },
    relatedTitle: {
      fontSize: "1.5rem",
      borderBottom: "2px solid #BB86FC",
      paddingBottom: "8px",
      marginBottom: "16px",
    },
    jurisprudenceList: {
      marginBottom: "32px",
    },
    mainFooter: {
      backgroundColor: "#1E1E1E",
      padding: "64px 0",
      borderTop: "1px solid #333",
      color: "#9E9E9E",
      fontSize: "0.9rem",
    },
    footerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    disclaimer: {
      maxWidth: "60%",
    },
    disclaimerTitle: {
      color: "#CF6679",
      marginBottom: "8px",
    },
    copyright: {
      textAlign: "center" as const,
      marginTop: "16px",
      width: "100%",
    },
  };

  return (
    <div style={styles.root}>
      <header style={styles.mainHeader}>
        <div style={styles.container}>
          <div style={styles.headerNav}>
            <h1 style={styles.siteTitle}>
              <Link to="/templates" style={{ color: "#E0E0E0", textDecoration: "none" }}>
                ← Direito Penal Brasileiro
              </Link>
            </h1>
            <nav>
              <ul style={styles.navLinks}>
                <li><a href="#crimes" style={styles.navLink}>Crimes</a></li>
                <li><a href="#penas" style={styles.navLink}>Penas</a></li>
                <li><a href="#processo" style={styles.navLink}>Processo Penal</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div style={styles.container}>
        <nav style={styles.breadcrumb}>
          <ol style={styles.breadcrumbList}>
            <li><a href="#" style={{ color: "#9E9E9E", textDecoration: "none" }}>Início</a> /</li>
            <li><a href="#" style={{ color: "#9E9E9E", textDecoration: "none" }}>Código Penal</a> /</li>
            <li style={{ color: "#E0E0E0" }}>Art. 121</li>
          </ol>
        </nav>
      </div>

      <div style={styles.container}>
        <div style={styles.articlePage}>
          <article style={styles.legalArticle}>
            <header style={styles.articleHeader}>
              <p style={styles.lawContext}>
                Decreto-Lei nº 2.848, de 7 de dezembro de 1940
              </p>
              <h2 style={styles.articleTitle}>
                Art. 121 - Homicídio Simples
              </h2>
            </header>

            <section style={styles.articleCaput}>
              <p style={styles.caputText}>
                Matar alguém:
              </p>
              <p style={styles.pena}>
                Pena - reclusão, de seis a vinte anos.
              </p>
            </section>

            <section style={styles.paragraph}>
              <h3 style={styles.paragraphTitle}>
                § 1º Caso de diminuição de pena
              </h3>
              <p>
                Se o agente comete o crime impelido por motivo de relevante valor social ou moral, ou sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, o juiz pode reduzir a pena de um sexto a um terço.
              </p>
            </section>

            <section style={styles.paragraph}>
              <h3 style={styles.paragraphTitle}>
                § 2º Homicídio qualificado
              </h3>
              <p style={{ marginBottom: "16px" }}>
                Se o homicídio é cometido:
              </p>
              <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                <li style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#BB86FC" }}>I</strong> - mediante paga ou promessa de recompensa, ou por outro motivo torpe;
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#BB86FC" }}>II</strong> - por motivo fútil;
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#BB86FC" }}>III</strong> - com emprego de veneno, fogo, explosivo, asfixia, tortura ou outro meio insidioso ou cruel, ou de que possa resultar perigo comum;
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#BB86FC" }}>IV</strong> - à traição, de emboscada, ou mediante dissimulação ou outro recurso que dificulte ou torne impossível a defesa do ofendido;
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#BB86FC" }}>V</strong> - para assegurar a execução, a ocultação, a impunidade ou vantagem de outro crime.
                </li>
              </ul>
              <p style={styles.pena}>
                Pena - reclusão, de doze a trinta anos.
              </p>
              <small style={{ display: "block", fontSize: "0.85rem", color: "#9E9E9E", marginTop: "8px" }}>
                (Redação dada pela Lei nº 13.964, de 2019)
              </small>
            </section>

            <div style={{
              marginTop: "48px",
              padding: "24px",
              backgroundColor: "rgba(207, 102, 121, 0.1)",
              border: "1px solid #CF6679",
              borderRadius: "6px",
            }}>
              <p style={{
                color: "#E0E0E0",
                fontStyle: "italic",
                fontSize: "0.95rem",
                lineHeight: 1.4,
                marginBottom: 0,
              }}>
                <strong style={{ color: "#CF6679" }}>Aviso Legal:</strong> Este material tem fins exclusivamente educacionais. Não constitui orientação jurídica. Para questões específicas, consulte um advogado criminalista.
              </p>
            </div>
          </article>

          <aside style={styles.relatedContent}>
            <h2 style={styles.relatedTitle}>
              Conteúdo Relacionado
            </h2>
            
            <section style={styles.jurisprudenceList}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "16px" }}>
                Jurisprudência Relevante
              </h3>
              <dl style={{ margin: 0 }}>
                <dt style={{ fontWeight: "bold", color: "#BB86FC", marginTop: "8px" }}>
                  STJ - REsp 1.234.567
                </dt>
                <dd style={{
                  marginLeft: 0,
                  paddingLeft: "10px",
                  borderLeft: "2px solid #1E1E1E",
                  color: "#9E9E9E",
                }}>
                  Homicídio qualificado. Motivação fútil caracterizada.
                </dd>
              </dl>
            </section>

            <form style={styles.searchForm}>
              <input 
                type="search"
                placeholder="Buscar artigos..."
                style={styles.searchInput}
              />
              <button style={styles.searchButton}>
                🔍
              </button>
            </form>
          </aside>
        </div>
      </div>

      <footer style={styles.mainFooter}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <div style={styles.disclaimer}>
              <h4 style={styles.disclaimerTitle}>
                Aviso Legal
              </h4>
              <p>
                Este site tem propósito exclusivamente informativo e educacional. O conteúdo não substitui consulta jurídica profissional.
              </p>
            </div>
          </div>
          <div style={styles.copyright}>
            <p>© 2024 - Material Educacional de Direito Penal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Penal;
