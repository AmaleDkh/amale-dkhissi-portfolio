// React elements
import { useState, useEffect, useRef, useCallback } from "react";

// Component
import TechnologyItem from "../TechnologyItem/TechnologyItem";

// Font Awesome icons
import {
  faLaptopCode,
  faDatabase,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

// Style
import "./../Technologies/Technologies.scss";
import { useLanguage } from "../../context/LanguageContext";

function Technologies() {
  const techRefs = useRef([]);
  const [visibleTechs, setVisibleTechs] = useState([]);

  const { language } = useLanguage();

  const handleScroll = useCallback(() => {
    techRefs.current.forEach((techRef, index) => {
      if (techRef) {
        const rect = techRef.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          if (!visibleTechs.includes(index)) {
            setVisibleTechs((prev) => [...prev, index]);
          }
        }
      }
    });
  }, [visibleTechs]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const technologiesCategory = [
    {
      icon: faLaptopCode,
      title: "DEV. FRONT-END",
      technologiesList: "React, JavaScript, TypeScript, HTML, CSS, Sass",
    },
    {
      icon: faDatabase,
      title: "DEV. BACK-END",
      technologiesList: "Node.js, Express, MongoDB, SQL",
    },
    {
      icon: faLightbulb,
      title: language === "FR" ? "AUTRES OUTILS" : "OTHER TOOLS",
      technologiesList: "GitHub, Postman, Figma, Swagger",
    },
  ];

  return (
    <div className="technologies-list">
      {technologiesCategory.map((category, index) => (
        <div
          key={index}
          ref={(el) => (techRefs.current[index] = el)}
          className={`technologies-list__category ${visibleTechs.includes(index) ? "visible" : "hidden"}`}
          style={{ transitionDelay: `${index * 0.2}s` }}
        >
          <TechnologyItem
            icon={category.icon}
            title={category.title}
            technologies={category.technologiesList}
          />
        </div>
      ))}
    </div>
  );
}

export default Technologies;
