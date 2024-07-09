// Component
import PresentationButtons from "../PresentationButtons/PresentationButtons";

// Style
import "./Presentation.scss";

// Material UI
import Avatar from "@mui/material/Avatar";

// Image
import Photo from "../../assets/images/amale-dkhissi.png";

function Presentation() {
  return (
    <div className="presentation-container">
      <div className="presentation-container__text">
        <h1 className="presentation-container__text__title">
          Hello ! Moi c'est Amale.
        </h1>
        <div>
          Le développement a toujours suscité mon intérêt. Il y a un an et demi,
          j'ai décidé de me lancer et d'apprendre en autodidacte. Plus
          récemment, j'ai franchi une nouvelle étape en poursuivant ma formation
          avec OpenClassrooms, et je suis ravie de partager mon parcours et mes
          projets avec vous.
        </div>
        <PresentationButtons />
      </div>
      <Avatar
        src={Photo}
        alt="Photo de présentation"
        sx={{ width: 350, height: 350 }}
        className="presentation-container__photo"
      />
    </div>
  );
}

export default Presentation;
