// Style
import "./ValuesList.scss";

function ValuesList({ pageVersion }) {
  return (
    <section className={`values-list ${pageVersion}`}>
      <h2 className="values-list__title">
        Une approche basée sur<br></br>l'écoute, l'engagement et la qualité
      </h2>
      <div className="values-list__blocks--first-version">
        <div className="values-list__block">
          <h3 className="values-list__block__title">Collaboration</h3>
        </div>
        <div className="values-list__blocks__block-title ">
          <h3 className="values-list__block__title">Engagement</h3>
        </div>
        <div className="values-list__block">
          <h3 className="values-list__block__title">Qualité</h3>
        </div>
      </div>

      <div className="values-list__blocks">
        <div className="values-list__block">
          <div className="values-list__block__text">
            <p className="values-list__block__text__first-paragraph">
              Chaque projet est une aventure partagée où{" "}
              <span className="words-with-font-weight">
                l'écoute active, l’échange et la compréhension mutuelle{" "}
              </span>
              sont la clé d’un résultat sur mesure.
            </p>

            <p className="values-list__block__text__second-paragraph"></p>
          </div>
        </div>

        <div className="values-list__block">
          <div className="values-list__block__text">
            <p className="values-list__block__text__first-paragraph">
              <span className="words-with-font-weight">
                Un investissement total
              </span>{" "}
              dans chaque projet pour offrir{" "}
              <span className="words-with-font-weight">
                des solutions efficaces et adaptées
              </span>{" "}
              à vos besoins spécifiques.
            </p>

            <p className="values-list__block__text__second-paragraph"></p>
          </div>
        </div>

        <div className="values-list__block">
          <div className="values-list__block__text">
            <p className="values-list__block__text__first-paragraph">
              <span className="words-with-font-weight">La qualité</span> est
              primordiale dans chaque réalisation, pour garantir
              <span className="words-with-font-weight">
                {" "}
                des résultats durables et alignés{" "}
              </span>
              avec vos objectifs.
            </p>

            <p className="values-list-paragraph"></p>
          </div>
        </div>
      </div>

      <div className="values-list__blocks--second-version">
        <div className="values-list__block">
          <div>
            <h3 className="values-list__block__title">Collaboration</h3>
          </div>

          <div className="values-list__block__text">
            <p className="values-list__block__text__first-paragraph">
              Chaque projet est une aventure partagée où{" "}
              <span className="words-with-font-weight">
                l'écoute active, l’échange et la compréhension mutuelle
              </span>{" "}
              sont la clé d’un résultat sur mesure.
            </p>

            <p className="values-list__block__text__second-paragraph"></p>
          </div>
        </div>

        <div className="values-list__block">
          <div>
            <h3 className="values-list__block__title">Engagement</h3>
          </div>

          <div className="values-list__block__text">
            <p className="values-list__block__text__first-paragraph">
              <span className="words-with-font-weight">
                Un investissement total
              </span>{" "}
              dans chaque projet pour offrir{" "}
              <span className="words-with-font-weight">
                des solutions efficaces et adaptées
              </span>{" "}
              à vos besoins spécifiques.
            </p>

            <p className="values-list__block__text__second-paragraph"></p>
          </div>
        </div>

        <div className="values-list__block">
          <div>
            <h3 className="values-list__block__title">Qualité</h3>
          </div>

          <div className="values-list__block__text">
            <p className="values-list__block__text__first-paragraph">
              <span className="words-with-font-weight">La qualité</span> est
              primordiale dans chaque réalisation, pour garantir
              <span className="words-with-font-weight">
                {" "}
                des résultats durables et alignés{" "}
              </span>
              avec vos objectifs.
            </p>

            <p className="values-list__block__text__second-paragraph"></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesList;
