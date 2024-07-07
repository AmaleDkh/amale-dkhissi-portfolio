// Component
import ExperienceItem from "../ExperienceItem/ExperienceItem";

// Data
import experiencesList from "../../assets/data/experiencesList.json";

// Style
import "./Experiences.scss";

function Experiences() {
  return (
    <div className="experiences-list">
      {experiencesList.map((experienceItem, experienceItemIndex) => (
        <ExperienceItem
          key={experienceItemIndex}
          year={experienceItem.year}
          description={experienceItem.description}
          experience={experienceItem.experience}
        />
      ))}
    </div>
  );
}

export default Experiences;
