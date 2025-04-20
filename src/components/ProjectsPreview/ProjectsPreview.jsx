// Component
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./ProjectsPreview.scss";

// Data
import projectsList from "../../assets/data/projectsList.json";

function ProjectsPreview() {
  return (
    <section className="projects-preview">
      <div className="projects-preview__content">
        <div className="projects-preview__content__information">
          <h2>Une sélection de quelques projets</h2>

          <p>Découvrez quelques-uns de mes projets récents.</p>
        </div>

        <div className="projects-preview__content__projects-grid">
          {projectsList.slice(2, 4).map((project, index) => (
            <div
              key={index}
              className="projects-preview__content__projects-grid__card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className="projects-preview__content__projects-grid__card__bg-image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="projects-preview__content__projects-grid__card__overlay"></div>
              <div className="projects-preview__content__projects-grid__card__content">
                <h3 className="projects-preview__content__projects-grid__card__content__title">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <SecondaryButton
          link="/projects"
          label=" Découvrir tous les projets"
          centerVersion="secondary-button__center-version"
        />
      </div>
    </section>
  );
}

export default ProjectsPreview;
