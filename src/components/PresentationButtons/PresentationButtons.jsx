// Material UI
import { Button } from "@mui/base/Button";
import Stack from "@mui/material/Stack";

// Style
import "./PresentationButtons.scss";

// File
import CV from "../../assets/files/amale-dkhissi-cv.pdf";

function PresentationButtons() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="presentation-links">
      <Stack spacing={2} direction="row">
        <Button
          className="presentation-links__button"
          onClick={() => scrollToSection("projects")}
        >
          Découvrir mes derniers projets
        </Button>
        <Button
          className="presentation-links__button"
          href={CV}
          target="_blank"
        >
          Télécharger mon CV
        </Button>
      </Stack>
    </div>
  );
}

export default PresentationButtons;
