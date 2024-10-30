// React element
import { Link } from "react-router-dom";
import { useRef } from "react";

// Style
import "./Project.scss";
import "../../assets/styles/Devicon.scss";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Devicon icons
import "devicon/devicon.min.css";

function Project({
  title,
  description,
  image,
  technologies,
  source,
  projectIndex,
  isVisible,
}) {
  const projectRef = useRef(null);

  return (
    <div
      ref={projectRef}
      className={`project-container ${isVisible ? "visible" : "hidden"}`}
      style={{ transitionDelay: `${projectIndex * 0.2}s` }}
    >
      <img src={image} alt="Couverture du projet" loading="lazy" />
      <div className="project-container__information">
        <h3 className="project-container__information__title">{title}</h3>
        <p className="project-container__information__description">
          {description}
        </p>
      </div>

      <div className="project-container__icons">
        <div className="project-container__icons__technologies">
          {technologies &&
            technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={` devicon ${tech.icon} ${tech.size}`}
                title={tech.technology}
              ></span>
            ))}
        </div>

        <Link
          to={source}
          className={`social-media-container__link`}
          target="_blank"
          aria-label="Ouvrir mon GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={`social-media-container__link__icon`}
          />
          <span className="sr-only">GitHub</span>
        </Link>
      </div>
    </div>
  );
}

export default Project;
