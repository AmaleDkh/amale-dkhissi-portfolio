// Components
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

// Style
import "./ContactSection.scss";

function ContactSection() {
  return (
    <section className="cta-section">
      <h2 className="cta-section__title">Vous avez un projet en tête ?</h2>
      <p className="cta-section__text">
        Je suis là pour écouter vos idées et trouver ensemble les meilleures
        solutions.
      </p>

      <Button
        text="Prenons contact"
        link="/contact"
        centerVersion="button__center-version"
      />
    </section>
  );
}

export default ContactSection;
