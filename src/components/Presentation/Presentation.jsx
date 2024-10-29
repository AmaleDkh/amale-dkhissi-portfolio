// Style
import "./Presentation.scss";

// Image
import Photo from "../../assets/images/amale-dkhissi.webp";

function Presentation() {
  return (
    <section className="presentation-container">
      <div className="presentation-container__photo-container">
        <img
          src={Photo}
          className="presentation-container__photo-container__photo"
          alt="Portrait professionnel"
        ></img>
      </div>
      <div className="presentation-container__text">
        <h1 className="presentation-container__text__title">
          Hello ! <br></br> Moi c'est{" "}
          <span className="presentation-container__text__title__highlight">
            Amale
          </span>
          , <br></br> Développeuse{" "}
          <span className="presentation-container__text__title__highlight">
            web
          </span>
          .
        </h1>
        <div className="presentation-container__text__presentation">
          Mon enthousiasme pour le développement web m’a incitée à explorer
          cette discipline passionnante. Guidée par un réel intérêt pour
          l'innovation, j’ambitionne de réaliser des solutions qui transforment
          les idées en réalité et améliorent les expériences utilisateurs.
          Chaque projet représente pour moi une occasion d'apprendre et de
          grandir dans cet univers en constante évolution.
        </div>
      </div>
    </section>
  );
}

export default Presentation;
