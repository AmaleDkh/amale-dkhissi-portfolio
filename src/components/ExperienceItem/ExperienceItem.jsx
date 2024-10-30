// Style
import "./ExperienceItem.scss";

// Context
import { useLanguage } from "../../context/LanguageContext";

function ExperienceItem({ year, experience }) {
  const { language } = useLanguage();

  const companyName = () => {
    if (experience.company === "Réflexion" && language === "ANG") {
      return "Reflection";
    }
    return experience.company;
  };

  return (
    <div className="experience-item">
      <div className="experience-item__year">{year}</div>
      <div className="experience-item__information">
        <div className="experience-item__information__company">
          {companyName()}
        </div>
        <div>
          {language === "FR"
            ? experience.position.french
            : experience.position.english}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
