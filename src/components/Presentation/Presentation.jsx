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
          Le développement a toujours suscité mon intérêt. Il y a un an et demi,
          j'ai décidé de me lancer et d'apprendre en autodidacte. Plus
          récemment, j'ai franchi une nouvelle étape en poursuivant ma formation
          avec OpenClassrooms. Je suis ravie de partager mon parcours et mes
          projets avec vous.
        </div>
      </div>
    </section>
  );
}

export default Presentation;
