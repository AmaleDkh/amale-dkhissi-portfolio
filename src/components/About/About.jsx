// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Experiences from "../Experiences/Experiences";
import VerticalLine from "../VerticalLine/VerticalLine";

// Style
import "./About.scss";

function About() {
  return (
    <section className="about" id="about">
      <SectionTitle title="À PROPOS" />
      <div className="about__texts">
        <div className="about__texts__introduction">
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
        <VerticalLine />
        <Experiences />
      </div>
    </section>
  );
}

export default About;
