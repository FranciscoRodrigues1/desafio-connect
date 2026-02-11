import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ImgFooter from "../../assets/logo.png";
import ImgLinkedin from "../../assets/linkedin.png";
import ImgInstagran from "../../assets/instagram.png";
import ImgWhatsapp from "../../assets/whatsapp.png";
import Styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={Styles.sectioFooter}>
      <div className={Styles.divFooter}>
        <img src={ImgFooter} alt="Imagem da logo da página" />
        <h2>Connect</h2>
      </div>

      <p>
        © 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto
        destinado exclusivamente a fins educativos.
      </p>

      <section className={Styles.redesSociais}>
        <img src={ImgLinkedin} alt="imagem da rede social Linkedin" />
        <img src={ImgInstagran} alt="imagem da rede social instagram" />
        <img src={ImgWhatsapp} alt="imagem da rede social whatsapp" />
      </section>
    </footer>
  );
}

export default Footer;
