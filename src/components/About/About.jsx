// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Experiences from "../Experiences/Experiences";

function About() {
  return (
    <div className="about" id="about">
      <SectionTitle title="À propos de moi" />
      <div className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
        felis sed justo commodo dictum. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Proin quis risus in
        metus imperdiet condimentum non vitae metus. Mauris in risus tristique,
        interdum libero sed, feugiat sapien. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Quisque sodales
        tempus varius. Quisque semper leo leo, eget accumsan justo feugiat quis.
      </div>
      <Experiences />
    </div>
  );
}

export default About;
