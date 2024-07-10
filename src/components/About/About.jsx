// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Experiences from "../Experiences/Experiences";

function About() {
  return (
    <div className="about" id="about">
      <SectionTitle title="À propos de moi" />
      <div className="about-text">
        Mes 6 ans d’expérience en gestion de projets de communication m’ont
        permis de développer rigueur, logique et analyse. Considérée par mes
        collègues comme un gage de professionnalisme, d’organisation et
        d’harmonie, je suis désormais prête et motivée à mettre mes compétences
        de facilitatrice au sein d’une équipe de développement.
      </div>
      <Experiences />
    </div>
  );
}

export default About;
