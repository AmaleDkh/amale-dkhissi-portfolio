// React elements
import { useState, useEffect, useCallback } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Components
import Project from "../Project/Project";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Data
import projectsList from "../../assets/data/projectsList.json";

// Style
import "./ProjectsList.scss";

function ProjectsList() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  const { language } = useLanguage();

  const handleScroll = useCallback(() => {
    const container = document.querySelector(".projects__container");
    const projects = Array.from(container.children);

    projects.forEach((project, index) => {
      const rect = project.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (
        rect.top <= windowHeight &&
        rect.bottom >= 0 &&
        !visibleProjects.includes(index)
      ) {
        setVisibleProjects((prev) => [...prev, index]);
      }
    });
  }, [visibleProjects]);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll]);

  return (
    <section id="projects" className="projects">
      <div className="projects__title-container">
        <h2 className="projects__title-container__title">
          {!isMobile
            ? language === "FR"
              ? "DÉCOUVREZ MES PROJETS"
              : "DISCOVER MY PROJECTS"
            : language === "FR"
              ? "PROJETS"
              : "PROJECTS"}
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
            projectIndex={projectIndex}
            isVisible={visibleProjects.includes(projectIndex)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
