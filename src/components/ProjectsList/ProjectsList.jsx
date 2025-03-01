// React elements
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Components
import Project from "../Project/Project";
import SectionTitle from "../SectionTitle/SectionTitle";

// Data
import projectsList from "../../assets/data/projectsList.json";

// Style
import "./ProjectsList.scss";

function ProjectsList() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [index, setIndex] = useState(1);

  const showPreviousProject = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? projectsList.length - 1 : prevIndex - 1
    );
  };

  const showNextProject = () => {
    setIndex((nextIndex) =>
      nextIndex === projectsList.length - 1 ? 0 : nextIndex + 1
    );
  };

  const location = useLocation();

  return (
    <section id="projects" className="projects">
      <div className="projects__title-container">
        {location.pathname === "/" && (
          <SectionTitle
            title="Un aperçu de mes projets"
            mobileVersion="version-with-text-align"
          />
        )}
      </div>

      <div className="projects__container projects__container--mobile-version">
        <div onClick={showPreviousProject} className="projects-list__icon-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 arrow-left"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <Link
          to={`project/${projectsList[index].id}`}
          className="projects__container--desktop-version__link"
        >
          <Project
            key={index}
            title={projectsList[index].title}
            description={projectsList[index].description}
            details={projectsList[index].details}
            technologies={projectsList[index].technologies}
            source={projectsList[index].source}
            alt={`Couverture du projet : ${projectsList[index].title}`}
            image={projectsList[index].image}
          />
        </Link>

        <div onClick={showNextProject} className="projects-list__icon-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 arrow-right"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      <div className="projects__container projects__container--desktop-version">
        {projectsList.slice(0, 2).map((project, projectIndex) => (
          <Link
            to={`project/${project.id}`}
            className="projects__container--desktop-version__link"
            key={project.id}
          >
            <Project
              title={project.title}
              description={project.description}
              details={project.details}
              technologies={project.technologies}
              source={project.source}
              alt={`Couverture du projet : ${project.title}`}
              image={project.image}
              projectIndex={projectIndex}
              isVisible={visibleProjects.includes(projectIndex)}
              position={
                projectIndex % 2 === 0 ? "project--right" : "project--left"
              }
            />
          </Link>
        ))}
      </div>

      <div className="projects__container projects__container--desktop-version">
        {projectsList.slice(2, 4).map((project, projectIndex) => (
          <Link
            to={`project/${project.id}`}
            className="projects__container--desktop-version__link"
            key={project.id}
          >
            <Project
              title={project.title}
              description={project.description}
              details={project.details}
              technologies={project.technologies}
              source={project.source}
              alt={`Couverture du projet : ${project.title}`}
              image={project.image}
              projectIndex={projectIndex}
              isVisible={visibleProjects.includes(projectIndex)}
              position={
                projectIndex % 2 === 0 ? "project--right" : "project--left"
              }
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
