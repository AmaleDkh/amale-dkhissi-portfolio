// React elements
import { useState, useEffect } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Components
import SectionTitle from "./../SectionTitle/SectionTitle";
import Technologies from "./../Technologies/Technologies";

// Style
import "./Skills.scss";

function Skills() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  const { language } = useLanguage();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <SectionTitle
        title={
          isMobile
            ? language === "FR"
              ? "COMPÉTENCES"
              : "SKILLS"
            : language === "FR"
              ? "MES COMPÉTENCES"
              : "MY SKILLS"
        }
      />
      <Technologies />
    </section>
  );
}

export default Skills;
