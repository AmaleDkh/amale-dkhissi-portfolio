// React element
import { useState } from "react";

// Component
import ProjectModal from "../ProjectModal/ProjectModal";

// Style
import "./Project.scss";
import "../../assets/styles/Devicon.scss";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Project({ title, description, details, technologies, source, image }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="project-container">
      <img src={image} alt="Couverture du projet" loading="lazy" />
      <div className="project-container__information">
        <h2 className="project-container__information__title">{title}</h2>
        <div className="project-container__information__description">
          {description}
        </div>
      </div>
      <div className="project-container__information__link">
        <button
          onClick={openModal}
          className="project-container__information__link__project"
        >
          <FontAwesomeIcon icon={faArrowRight} />
          Découvrir le projet
        </button>
      </div>
      <ProjectModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        title={title}
        description={description}
        details={details}
        technologies={technologies}
        source={source}
        image={image}
      />
    </div>
  );
}

export default Project;
