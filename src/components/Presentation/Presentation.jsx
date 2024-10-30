// React elements
import { useState, useEffect } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Style
import "./Presentation.scss";

// Image
import Photo from "../../assets/images/amale-dkhissi.webp";

function Presentation() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const { language } = useLanguage();

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setIsImageVisible(true);
    }, 100);

    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 400);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="presentation-container">
      <div className="presentation-container__photo-container">
        <img
          src={Photo}
          alt="Portrait professionnel"
          className={`presentation-container__photo-container__photo ${isImageVisible ? "visible" : ""}`}
        ></img>
      </div>
      <div
        className={`presentation-container__text ${isTextVisible ? "visible" : ""}`}
      >
        <h1>
          Hello ! <br></br> {language === "FR" ? "Moi c'est " : "I'm "}
          <span className="presentation-container__text__title__highlight">
            Amale
          </span>
          , <br></br>
          {language === "FR" ? (
            <>
              Développeuse{" "}
              <span className="presentation-container__text__title__highlight">
                web
              </span>
              .
            </>
          ) : (
            <>
              Web{" "}
              <span className="presentation-container__text__title__highlight">
                Developer
              </span>
              .
            </>
          )}
        </h1>
        <div className="presentation-container__text__presentation">
          {language === "FR"
            ? " Mon enthousiasme pour le développement web m’a incitée à explorer cette discipline passionnante. Guidée par un réel intérêt pour l'innovation, j’ambitionne de réaliser des solutions qui transforment les idées en réalité et améliorent les expériences utilisateurs. Chaque projet représente pour moi une occasion d'apprendre et de grandir dans cet univers en constante évolution."
            : "My enthusiasm for web development has driven me to explore this exciting field. Guided by a genuine interest in innovation, I aspire to create solutions that turn ideas into reality and enhance user experiences. For me, each project is an opportunity to learn and grow in this ever-evolving domain."}
        </div>
      </div>
    </section>
  );
}

export default Presentation;
