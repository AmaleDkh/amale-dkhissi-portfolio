// Component
import TechnologyItem from "../TechnologyItem/TechnologyItem";

// Data
import technologiesList from "../../assets/data/technologiesList.json";

// Style
import "./../Technologies/Technologies.scss";

// Devicon
import "devicon/devicon.min.css";

function Technologies() {
  return (
    <div className="technologies-list">
      {technologiesList.map((category, categoryIndex) => (
        <div key={categoryIndex} className="technologies-list__category">
          <h3 className="technologies-list__category__subject">
            {category.subject}
          </h3>
          <TechnologyItem technologies={category.technologies} />
        </div>
      ))}
    </div>
  );
}

export default Technologies;
