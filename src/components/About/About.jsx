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
            Mes 6 ans d’expérience en gestion de projets de communication m’ont
            permis de développer rigueur, logique et analyse. Considérée par mes
            collègues comme un gage de professionnalisme, d’organisation et
            d’harmonie, je suis désormais prête et motivée à mettre mes
            compétences de facilitatrice au sein d’une équipe de développement.
          </div>
        </div>
        <VerticalLine />
        <Experiences />
      </div>
    </section>
  );
}

export default About;
