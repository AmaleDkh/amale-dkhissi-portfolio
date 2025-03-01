// Component
import ExperienceItem from "../ExperienceItem/ExperienceItem";

// Data
import experiencesList from "../../assets/data/experiencesList.json";

// Style
import "./Experiences.scss";

// Image
import Me14 from "../../assets/images/Me14.webp";

function Experiences() {
  return (
    <div className="experiences-list">
      <img
        src={Me14}
        alt="Une personne de dos qui travaille sur un bureau"
        className="experiences-list__image-container__image image-with-opacity image-with-border-radius"
      />

      <div className="experiences-list__texts">
        <h3 className="experiences-list__texts__title">Mes expériences</h3>
        <div className="experiences-list__texts__block">
          {experiencesList.map((experienceItem, experienceItemIndex) => (
            <ExperienceItem
              key={experienceItemIndex}
              year={experienceItem.year}
              description={experienceItem.description}
              experience={experienceItem.experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
