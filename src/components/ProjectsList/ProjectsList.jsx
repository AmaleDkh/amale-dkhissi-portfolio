// Components
import Project from "../Project/Project";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Data
import projectsList from "../../assets/data/projectsList.json";

// Style
import "./ProjectsList.scss";

function ProjectsList() {
  return (
    <section id="projects" className="projects">
      <div className="projects__title-container">
        <h2 className="projects__title-container__title">
          DÉCOUVREZ MES PROJETS
        </h2>
        <HorizontalLine className="horizontal-line__centered" />
      </div>
      <div className="projects__container">
        {projectsList.map((project, projectIndex) => (
          <Project
            key={projectIndex}
            title={project.title}
            description={project.description}
            details={project.details}
            technologies={project.technologies}
            source={project.source}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
