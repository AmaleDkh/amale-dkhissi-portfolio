// Components
import Layout from "./../../components/Layout/Layout";
import ServicesList from "./../../components/ServicesList/ServicesList";
import ProjectsPreview from "../../components/ProjectsPreview/ProjectsPreview";
import Reviews from "../../components/Reviews/Reviews";
import ContactSection from "../../components/ContactSection/ContactSection";

// Style
import "./Services.scss";

function Services() {
  return (
    <Layout>
      <ServicesList
        isTitleAndButtonVisible={false}
        marginVersion="services--page-no-padding-bottom-version"
      />

      <Reviews />

      <ProjectsPreview marginVersion="projects-preview--no-margin-bottom-version" />

      <ContactSection marginBottomVersion="margin-bottom-version" />
    </Layout>
  );
}

export default Services;
