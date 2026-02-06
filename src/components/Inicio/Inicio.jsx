import styles from "./inicio.module.scss";
import ImgInicial from "../../assets/img-tela-inicial.png";

function Inicio() {
  return (
    <section className={styles.containerTelaInicial}>
      <div>
        <h2> Projetos Sociais que transformam</h2>
        <p>
          Conectamos sua empresa com projetos sociais impactantes.
          Juntos,criamos mudanças reais na comunidade.
        </p>
      </div>

      <img className={styles.ImgInicial} src={ImgInicial} alt="Imagem da tela inicial" />
    </section>
  );
}

export default Inicio;