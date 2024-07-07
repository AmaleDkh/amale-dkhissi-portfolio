// React element
import Modal from "react-modal";

// Style
import "./ProjectModal.scss";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    border: "none",
    padding: "0 0 20px 0",
  },
};

Modal.setAppElement("#root");

function ProjectModal({
  modalIsOpen,
  closeModal,
  title,
  description,
  details,
  technologies,
  source,
  image,
}) {
  const openSourceLink = () => {
    window.open(source, "_blank");
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel="Modale de projet"
    >
      <img src={image} alt="" />
      <div className="modal__project-container__information">
        <h2 className="modal__project-container__information__title">
          {title}
        </h2>
        <div className="modal__project-container__information__description">
          {description}
        </div>
        <div className="modal__project-container__information__details">
          {details}
        </div>
        <div className="modal__project-container__information__technologies">
          <div className="modal__project-container__information__technologies__title">
            Technologies utilisées :
          </div>
          <div className="modal__project-container__information__technologies__technos">
            {technologies
              ? technologies.map((tech, techIndex) => (
                  <i
                    key={techIndex}
                    className={`${tech.icon} ${tech.size}`}
                    title={tech.technology}
                  ></i>
                ))
              : null}
          </div>
        </div>
        <div className="modal__project-container__information__link__project">
          <button
            onClick={openSourceLink}
            className="modal__project-container__information__link"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            Découvrir le projet sur GitHub
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectModal;
