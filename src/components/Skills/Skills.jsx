// Components
import SectionTitle from "./../SectionTitle/SectionTitle";
import Technologies from "./../Technologies/Technologies";

// Style
import "./Skills.scss";

function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionTitle title="MES COMPÉTENCES" />
      <Technologies />
    </section>
  );
}

export default Skills;
