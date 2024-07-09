// Style
import "./ExperienceItem.scss";

function ExperienceItem({ year, description, experience }) {
  return (
    <div className="experience-item">
      <div className="experience-item__year">{year}</div>
      {description ? (
        <div>{description}</div>
      ) : (
        <div className="experience-item__information">
          <div className="experience-item__information__company">
            {experience.company}
          </div>
          <div>{experience.position}</div>
        </div>
      )}
    </div>
  );
}

export default ExperienceItem;