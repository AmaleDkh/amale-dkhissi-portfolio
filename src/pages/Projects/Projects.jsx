// Components
import Layout from "../../components/Layout/Layout";
import ContactSection from "../../components/ContactSection/ContactSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Reviews from "../../components/Reviews/Reviews";
import ServicesList from "../../components/ServicesList/ServicesList";

// Style
import "./Projects.scss";

function Projects() {
  return (
    <Layout>
      <ProjectsSection />

      <Reviews marginVersion="reviews-section--no-margin-bottom" />

      <ServicesList
        isTitleAndButtonVisible={true}
        marginVersion="services--with-padding-bottom-version"
        backgroundColorVersion="services--light-light-beige-color-version services--margin-top-version"
      />

      <ContactSection marginBottomVersion="margin-bottom-version" />
    </Layout>
  );
}

export default Projects;
