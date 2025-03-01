// Context
import { useLanguage } from "../../context/LanguageContext";

// Style
import "./ExperienceItem.scss";

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
      <div className="experience-item__year">
        {" "}
        {companyName()} | {year}
      </div>
      <div className="experience-item__information">
        {language === "FR"
          ? experience.position.french
          : experience.position.english}
        <div className="experience-item__information__company"></div>
      </div>
    </div>
  );
}

export default ExperienceItem;
