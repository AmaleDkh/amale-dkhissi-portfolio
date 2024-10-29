// React element
import { Link } from "react-router-dom";

// Style
import "./Project.scss";
import "../../assets/styles/Devicon.scss";

import "devicon/devicon.min.css";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project({ title, description, image, technologies, source }) {
  return (
    <div className="project-container">
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
