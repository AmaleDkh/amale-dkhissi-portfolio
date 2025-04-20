// React element
import { Link } from "react-router-dom";

// Component
import SecondTitleForSection from "../SecondTitleForSection/SecondTitleForSection";

// Style
import "./ProjectsSection.scss";

// Data
import projectsList from "../../assets/data/projectsList.json";

function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="projects-section__information">
        <h1 className="projects-section__information__title">Mes projets</h1>
        <p className="projects-section__information__description">
          Découvrez mes projets, où la simplicité rencontre l’efficacité.
        </p>
      </div>

      <div className="projects-section__grid">
        {projectsList.map((project, index) => (
          <div key={index} className="projects-section__grid__card">
            <div className="projects-section__grid__card-image">
              <div
                className="projects-section__grid__card-image__image-bg"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
            </div>
            <div className="projects-section__grid__card-content">
              <SecondTitleForSection title={project.title} />

              <p className="projects-section__grid__card-content__description">
                {project.description}
              </p>

              <Link
                to={`/project/${projectsList[index].id}`}
                className="projects-section__grid__card-content__details-button"
              >
                <span className="projects-section__grid__card-content__details-button-text">
                  Découvrir
                </span>
              </Link>

              {/* <div className="projects-section__grid__card-content__details-button">
                <span className="projects-section__grid__card-content__details-button-text">
                  Découvrir
                </span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
