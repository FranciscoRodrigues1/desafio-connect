import ImgCards from "../../assets/mutirao.png";
import ImgAulas from "../../assets/aulas.png";
import ImgEsporteInclusao from "../../assets/esporte.png";
import ImgGrandeFamilia from "../../assets/familia.png";
import ImgFuturoNaEscola from "../../assets/futuro.png";
import ImgConectJovem from "../../assets/conecta.png";

import styles from "./AcoesDaConnect.module.scss";

function AcoesDaConnect() {
  return (
    <section className={styles.secaoCards}>
      <div>
        <h1>Ações da Connect</h1>
        <p>
          Junte-se a quem acredita na mudança. Apoie, participe e transforme
          vidas através de ações sociais que geram impacto real nas comunidades.
        </p>
      </div>

      <section className={styles.cards}>
        <article>
          <img src={ImgCards} alt="" />
            <h2>Mutirão de reciclagem</h2>
            <p>
              Coletar materiais recicláveis e orientar sobre descarte
              consciente.
            </p>
            <button>Quero participar</button>
        </article>

        <article>
          <img src={ImgAulas} alt="" />
          <h2>Aulas de Tecnologia</h2>
          <p>
            Ensinar noções básicas de informática, internet segura e
            programação. Preparar jovens para o mercado de trabalho digital.
          </p>
          <button>Quero participar</button>
        </article>

        <article>
          <img src={ImgEsporteInclusao} alt="" />
          <h2>Esporte e Inclusão</h2>
          <p>
            Organizar treinos e jogos que incentivem a participação de todos.
            Promover disciplina, saúde e trabalho em equipe entre jovens.
          </p>
          <button>Quero participar</button>
        </article>

        <article>
          <img src={ImgGrandeFamilia} alt="" />
          <h2>Instituto grande familia</h2>
          <p>
            Contribua com alimentos não perecíveis e ajude famílias em situação
            de vulnerabilidade.
          </p>
          <button>Quero participar</button>
        </article>

        <article>
          <img src={ImgFuturoNaEscola} alt="" />
          <h2>Projeto Futuro na Escola</h2>
          <p>
            Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a
            continuarem seus estudos com mais estrutura.
          </p>
          <button>Quero participar</button>
        </article>

        <article>
          <img src={ImgConectJovem} alt="" />
          <h2>Instituto Conecta Jovem</h2>
          <p>
            Doe computadores usados, tablets ou celulares em bom estado para
            permitir que jovens tenham acesso ao mundo digital.
          </p>
          <button>Quero participar</button>
        </article>
      </section>
    </section>
  );
}

export default AcoesDaConnect;
