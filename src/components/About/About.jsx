// React elements
import { useEffect, useRef, useState, useCallback } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Experiences from "../Experiences/Experiences";
import VerticalLine from "../VerticalLine/VerticalLine";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Style
import "./About.scss";

function About() {
  const aboutRef = useRef(null);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isExperiencesVisible, setIsExperiencesVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const { language } = useLanguage();

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 400 && rect.bottom >= 0) {
          if (!isIntroVisible) {
            setIsIntroVisible(true);
            setTimeout(() => {
              setIsExperiencesVisible(true);
            }, 100);
          }
        }
      }
    }

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, isIntroVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section ref={aboutRef} className="about" id="about">
      <SectionTitle title={language === "FR" ? "À PROPOS" : "ABOUT ME"} />
      <div className="about__texts">
        {language === "FR" ? (
          <div
            className={`about__texts__introduction ${isIntroVisible ? "visible" : ""}`}
          >
            <div className="about__texts__principal-information">
              Amale Dkhissi, développeuse web.
            </div>
            <div>
              Forte de 7 ans d'expérience en communication, j'ai perfectionné ma
              rigueur, ma logique et mon sens de l'analyse. Considérée comme un
              gage de professionnalisme, d'organisation et d'harmonie, je suis
              aujourd’hui prête et motivée à mettre mes compétences de
              facilitatrice au service d'une équipe de développement.
            </div>
          </div>
        ) : (
          <div
            className={`about__texts__introduction ${isIntroVisible ? "visible" : ""}`}
          >
            <div className="about__texts__principal-information">
              Amale Dkhissi, Web Developer.
            </div>
            <div>
              With 7 years of experience in communication, I have honed my
              attention to detail, logical thinking, and analytical skills.
              Recognized for my professionalism, organizational abilities, and
              team harmony, I am now ready and motivated to leverage my
              facilitation skills in support of a development team.
            </div>
          </div>
        )}

        <VerticalLine />
        <div
          className={`experiences-container ${isExperiencesVisible ? "visible" : ""}`}
        >
          <HorizontalLine className="horizontal-line__centered-beige-version" />
          <Experiences />
        </div>
      </div>
    </section>
  );
}

export default About;
