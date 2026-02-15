import ImgFooter from "../../assets/logo.png";
import ImgLinkedin from "../../assets/linkedin.png";
import ImgInstagran from "../../assets/instagram.png";
import ImgWhatsapp from "../../assets/whatsapp.png";
import Github from "../../assets/Github.png"
import Styles from "./Footer.module.scss";

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
        <a href="https://www.linkedin.com/in/franciscorodriguesdev/"  target="_blank"><img src={ImgLinkedin} alt="imagem da rede social Linkedin" /></a>
        <a href="https://github.com/FranciscoRodrigues1" target="_blank"><img src={Github} alt="Imagem da rede social Github" /></a>
        <a href="https://www.instagram.com/keltonrodrigues_/" target="_blank"><img src={ImgInstagran} alt="imagem da rede social instagram" /></a>
        <a href="https://wa.me/+5588992765611 " target="_blank"><img src={ImgWhatsapp} alt="imagem da rede social whatsapp" /></a>
      </section>
    </footer>
  );
}

export default Footer;
