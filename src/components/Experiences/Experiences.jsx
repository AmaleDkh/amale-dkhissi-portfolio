// Component
// import ExperienceItem from "../ExperienceItem/ExperienceItem";

// Data
import experiencesList from "../../assets/data/experiencesList.json";

// Style
import "./Experiences.scss";

function Experiences() {
  return (
    <section className="experiences-section">
      <h2 className="experiences-section__title">Expériences</h2>

      <div className="experiences-section__list">
        {experiencesList.map((exp, index) => (
          <div key={index} className="experiences-section__list__item">
            <div className="experiences-section__list__item__year">
              {exp.year}
            </div>
            <div className="experiences-section__list__item__content">
              <h3 className="experiences-section__list__item__content__company-name">
                {exp.experience.company}
              </h3>

              <p className="experiences-section__list__item__content__description">
                {exp.experience.position.french}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
