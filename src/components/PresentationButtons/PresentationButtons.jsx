// React elements
import { useState, useEffect } from "react";

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="presentation-links">
      <div className="presentation-links__buttons-container">
        <button
          onClick={() => scrollToSection("projects")}
          aria-label="Scroll to Projects"
          className="presentation-links__buttons-container__button"
        >
          {isMobile ? "Mes projets" : "Découvrir mes projets"}
        </button>
        <a
          href={CV}
          target="_blank"
          aria-label="Download CV"
          className="presentation-links__buttons-container__button"
        >
          {isMobile ? "Mon CV" : "Télécharger mon CV"}
        </a>
      </div>
    </div>
  );
}

export default PresentationButtons;
