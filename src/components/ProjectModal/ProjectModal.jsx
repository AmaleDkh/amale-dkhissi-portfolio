// React element
import { useEffect } from "react";

// Style
import "./ProjectModal.scss";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("body__modal-open");
    } else {
      document.body.classList.remove("body__modal-open");
    }

    return () => {
      document.body.classList.remove("body__modal-open");
    };
  }, [modalIsOpen]);

  const openSourceLink = () => {
    window.open(source, "_blank");
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal__background")) {
      closeModal();
    }
  };

  return (
    <>
      {modalIsOpen && (
        <div className="modal__background" onClick={handleBackgroundClick}>
          <div className="modal__content">
            <span className="modal__close" onClick={closeModal}>
              &times;
            </span>
            <img src={image} alt="" className="modal__image" />
            <div className="modal__information">
              <h2 className="modal__title">{title}</h2>
              <div className="modal__description">{description}</div>
              <div className="modal__details">{details}</div>
              <div className="modal__technologies">
                <div className="modal__technologies__title">
                  Technologies utilisées :
                </div>
                <div className="modal__technologies__list">
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
              <div className="modal__link">
                <button
                  className="modal__link__project"
                  onClick={openSourceLink}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                  Découvrir le projet sur GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectModal;
