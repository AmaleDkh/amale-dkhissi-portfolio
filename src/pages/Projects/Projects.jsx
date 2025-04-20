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
        marginVersion="services__padding-bottom-version"
      />

      <ContactSection marginBottomVersion="margin-bottom-version" />
    </Layout>
  );
}

export default Projects;
