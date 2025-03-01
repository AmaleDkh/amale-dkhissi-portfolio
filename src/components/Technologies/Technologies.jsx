// React elements
import { useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

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

function Technologies({ mobileVersion }) {
  const techRefs = useRef([]);
  const [visibleTechs, setVisibleTechs] = useState([]);

  const { language } = useLanguage();

  const technologiesCategory = [
    {
      icon: faLaptopCode,
      title: "DEV. FRONT-END",
      technologiesList: "React, JavaScript, TypeScript, HTML, CSS, Sass",
    },
    {
      icon: faDatabase,
      title: "DEV. BACK-END",
      technologiesList: "Node.js, Express, PHP, Laravel, MongoDB, SQL",
    },
    {
      icon: faLightbulb,
      title: language === "FR" ? "AUTRES OUTILS" : "OTHER TOOLS",
      technologiesList: "GitHub, Postman, Figma, Swagger",
    },
  ];

  return (
    <div className={`technologies-list ${mobileVersion}`}>
      {technologiesCategory.map((category, index) => (
        <div
          key={index}
          ref={(el) => (techRefs.current[index] = el)}
          className={`technologies-list__category ${
            visibleTechs.includes(index) ? "visible" : "hidden"
          }`}
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
