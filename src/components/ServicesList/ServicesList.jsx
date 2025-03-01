// Style
import "./ServicesList.scss";

// Images
import MyComputer3 from "../../assets/images/MyComputer3.webp";
import MyComputer4 from "../../assets/images/MyComputer4.webp";
import MyComputer7 from "../../assets/images/MyComputer7.webp";

function ServicesList({ pageVersion }) {
  return (
    <section className={`services ${pageVersion}`}>
      <div className="services__blocks--second-version">
        <div className="services__block">
          <img src={MyComputer4} />

          <div className="services__block__item">
            <h3 className="services__block__title">
              Développement de solutions web
            </h3>

            <div className="services__block__text">
              <p className="services__block__text__first-paragraph">
                Je crée{" "}
                <span className="words-with-font-weight">
                  {" "}
                  des sites web adaptés
                </span>{" "}
                à chaque projet.
              </p>

              <p className="services__block__text__second-paragraph">
                Mon objectif est de répondre précisément aux besoins de chaque
                client, en mettant l’accent sur{" "}
                <span className="words-with-font-weight">
                  {" "}
                  la qualité, l’efficacité et l’évolutivité
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="services__block">
          <img src={MyComputer3} />

          <div className="services__block__item">
            <div>
              <h3 className="services__block__title">Rédaction de contenus</h3>
            </div>

            <div className="services__block__text">
              <p className="services__block__text__first-paragraph">
                Je rédige{" "}
                <span className="words-with-font-weight">
                  des contenus sur mesure et adaptés
                </span>{" "}
                à chaque projet.
              </p>

              <p className="services__block__text__second-paragraph">
                Mon objectif est de rédiger{" "}
                <span className="words-with-font-weight">
                  des messages clairs et impactants
                </span>
                , avec un ton qui vous correspond.
              </p>
            </div>
          </div>
        </div>

        <div className="services__block">
          <img src={MyComputer7} />

          <div className="services__block__item">
            <div>
              <h3 className="services__block__title">
                Optimisation du référencement
              </h3>
            </div>

            <div className="services__block__text">
              <p className="services__block__text__first-paragraph">
                Je vous aide à{" "}
                <span className="words-with-font-weight">
                  améliorer votre positionnement{" "}
                </span>
                sur les moteurs de recherche.
              </p>

              <p className="services__block__text__second-paragraph">
                Mon objectif est de rendre votre site plus visible, en
                améliorant{" "}
                <span className="words-with-font-weight">
                  sa pertinence et son accessibilité
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
