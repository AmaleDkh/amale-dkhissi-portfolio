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
        marginVersion="services__margin-top-version"
      />

      <Reviews />

      <ProjectsPreview />

      <ContactSection marginBottomVersion="margin-bottom-version" />
    </Layout>
  );
}

export default Services;
