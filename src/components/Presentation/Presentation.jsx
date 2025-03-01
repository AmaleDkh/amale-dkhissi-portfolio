// Context
import { useLanguage } from "../../context/LanguageContext";

// Style
import "./Presentation.scss";

// Images
import Me2 from "../../assets/images/Me2.webp";
import Button from "../Button/Button";

function Presentation() {
  const { language } = useLanguage();

  return (
    <section className="presentation-container">
      <img
        src={Me2}
        alt="Portrait professionnel"
        className="presentation-container__photo-container__photo  image-with-opacity"
      ></img>

      <div className="presentation-container__text">
        <h1 className="image-block__texts__title">
          Des sites web sur mesure, <br></br>des textes qui captivent.
        </h1>

        <div className="presentation-container__text__presentation">
          <p>
            {" "}
            Je conçois des{" "}
            <span className="words-with-font-weight ">
              solutions web sur mesure
            </span>{" "}
            et
            <span className="words-with-font-weight ">
              {" "}
              des contenus engageants
            </span>
            , qui vous ressemblent et optimisent votre visibilité en ligne.
          </p>
          <Button
            text="Découvrez les services"
            link="/services"
            marginTopVersion="margin-top-version"
          />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
