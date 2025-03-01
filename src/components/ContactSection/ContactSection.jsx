// Components
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

// Style
import "./ContactSection.scss";

function ContactSection({ marginBottomVersion, marginTopVersion }) {
  return (
    <section
      className={`contact-section ${marginBottomVersion}  ${marginTopVersion}`}
    >
      <SectionTitle
        title="Vous avez un projet en tête ?"
        margin="small-margin contact-section-mobile-version"
      />

      <p className="contact-section__answer">
        Je suis là pour écouter vos idées et trouver ensemble les meilleures
        solutions.
      </p>
      <Button text="Prenons contact" link="/contact" />
    </section>
  );
}

export default ContactSection;
