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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          lorem turpis. Cras diam quam, aliquam sit amet elit in, faucibus
          feugiat tellus. Pellentesque vehicula porta eros vel feugiat. Etiam
          pretium eget nisi non malesuada. Proin vitae euismod massa. Integer
          vel vehicula turpis, ac ornare metus. Sed nunc mi, rutrum euismod
          vehicula eget, tincidunt eget lectus.
        </div>
        <PresentationButtons />
      </div>
      <Avatar
        src={Photo}
        alt=""
        sx={{ width: 350, height: 350 }}
        className="presentation-container__photo"
      />
    </div>
  );
}

export default Presentation;
