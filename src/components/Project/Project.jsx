// React element
import { useRef } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Style
import "./Project.scss";
import "../../assets/styles/Devicon.scss";

// Devicon icons
import "devicon/devicon.min.css";

function Project({
  title,
  description,
  image,
  technologies,
  source,
  alt,
  projectIndex,
  isVisible,
  position,
}) {
  const projectRef = useRef(null);

  const { language } = useLanguage();

  return (
    <div
      ref={projectRef}
      className={`project-container  ${
        isVisible ? "visible" : "hidden"
      } ${position}`}
      style={{ transitionDelay: `${projectIndex * 0.2}` }}
    >
      <img src={image} alt={alt} loading="lazy" />

      <div className="project-container__information">
        <p className="project-container__information__title">
          {language === "FR" ? title.french : title.english}
        </p>
        <div className="project-container__information__discover-option">
          <p className="project-container__information__discover-option__text">
            Découvrir le projet
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
