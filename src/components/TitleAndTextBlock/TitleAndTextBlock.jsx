function TitleAndTextBlock() {
  return (
    <section className="services">
      <div className="services__blocks--first-version">
        <div className="services__blocks__block-title ">
          <h3 className="services__block__title">Écoute</h3>
          <div className="horizontal-line__services-version"></div>
        </div>
        <div className="services__block">
          <h3 className="services__block__title">Collaboration</h3>
          <div className="horizontal-line__services-version"></div>
        </div>
        <div className="services__block">
          <h3 className="services__block__title">Engagement</h3>
          <div className="horizontal-line__services-version"></div>
        </div>
      </div>

      <div className="services__blocks">
        <div className="services__block">
          <p className="services__block__text">
            Je crée des sites web adaptés à chaque projet. Mon objectif est de
            répondre précisément aux besoins de chaque client, en mettant
            l’accent sur la qualité, l’efficacité et l’évolutivité.
          </p>
        </div>
        <div className="services__block">
          <p className="services__block__text">
            Je vous aide à améliorer votre positionnement sur les moteurs de
            recherche. Mon objectif est de rendre votre site plus visible, en
            améliorant sa pertinence et son accessibilité.
          </p>
        </div>
        <div className="services__block">
          <p className="services__block__text">
            Je rédige des contenus sur mesure et adaptés à chaque projet. Mon
            objectif est de rédiger des messages clairs et impactants, avec un
            ton qui vous correspond.
          </p>
        </div>
      </div>

      <div className="services__blocks--second-version">
        <div className="services__block">
          <div>
            <h3 className="services__block__title">Développement web</h3>
            <div className="horizontal-line__services-version"></div>
          </div>
          <p className="services__block__text">
            Je crée des sites web adaptés à chaque projet. Mon objectif est de
            répondre précisément aux besoins de chaque client, en mettant
            l’accent sur la qualité, l’efficacité et l’évolutivité.
          </p>
        </div>

        <div className="services__block">
          <div>
            <h3 className="services__block__title">
              Optimisation du référencement
            </h3>
            <div className="horizontal-line__services-version"></div>
          </div>

          <p className="services__block__text">
            Je vous aide à améliorer votre positionnement sur les moteurs de
            recherche. Mon objectif est de rendre votre site plus visible, en
            améliorant sa pertinence et son accessibilité.
          </p>
        </div>

        <div className="services__block">
          <div>
            <h3 className="services__block__title">Rédaction de contenus</h3>
            <div className="horizontal-line__services-version"></div>
          </div>

          <p className="services__block__text">
            Je rédige des contenus sur mesure et adaptés à chaque projet. Mon
            objectif est de rédiger des messages clairs et impactants, avec un
            ton qui vous correspond.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TitleAndTextBlock;
