// Context
import { useLanguage } from "../../context/LanguageContext";

// Components
import SectionTitle from "./../SectionTitle/SectionTitle";
import Technologies from "./../Technologies/Technologies";

// Style
import "./Skills.scss";

function Skills() {
  const { language } = useLanguage();

  return (
    <section id="skills" className="skills">
      <SectionTitle
        title={language === "FR" ? "MES COMPÉTENCES" : "MY SKILLS"}
      />
      <Technologies />
    </section>
  );
}

export default Skills;
