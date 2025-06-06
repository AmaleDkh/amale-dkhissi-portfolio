// Components
import Button from "../Button/Button";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./Presentation.scss";

// Image
import Me18 from "../../assets/images/Me18.webp";

function Presentation() {
  return (
    <section className="hero-section">
      <div className="hero-section__wrapper">
        <div className="hero-section__grid">
          <div className="hero-section__content animate-fade-in">
            <div>
              <h1 className="hero-section__title">
                Des solutions web simples et efficaces
              </h1>
              <p className="hero-section__description">
                Je conçois des{" "}
                <span className="words-with-font-weight ">
                  solutions web sur mesure{" "}
                </span>{" "}
                et{" "}
                <span className="words-with-font-weight ">
                  des contenus engageants{" "}
                </span>
                , qui vous ressemblent et optimisent votre visibilité en ligne.
              </p>
              <div className="hero-section__buttons">
                <Button link="/contact" text="Me contacter" />

                <SecondaryButton
                  link="/services"
                  label=" Découvrir mes services"
                  centerVersion=""
                />
              </div>
            </div>
          </div>

          <img
            src={Me18}
            alt="Portrait professionnel"
            className="hero-section__image"
          />
        </div>

        {/* <div className="hero-section__scroll animate-fade-in delay-400">
          <a href="#services" className="hero-section__scroll-link">
            <span className="hero-section__scroll-text">Découvrir</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Presentation;
