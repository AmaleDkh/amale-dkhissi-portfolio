// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Project from "../Project/Project";

// Data
import projectsList from "../../assets/data/projectsList.json";

// Style
import "./ProjectsList.scss";

// Masonry
import Masonry from "react-masonry-css";

function ProjectsList() {
  return (
    <div id="projects">
      <SectionTitle title="Mes projets" />
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
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
      </Masonry>
    </div>
  );
}

export default ProjectsList;
