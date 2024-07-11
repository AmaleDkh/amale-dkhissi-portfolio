// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Project from "../Project/Project";

// Data
import projectsList from "../../assets/data/projectsList.json";

// Style
import "./ProjectsList.scss";

function ProjectsList() {
  return (
    <section id="projects">
      <SectionTitle title="Mes projets" />
      <div className="projects-container">
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
