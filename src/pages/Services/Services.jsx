// Components
import Layout from "./../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import ServicesList from "./../../components/ServicesList/ServicesList";
import ContactSection from "../../components/ContactSection/ContactSection";

// Style
import "./Services.scss";

function Services() {
  return (
    <Layout>
      <div className="services-page">
        <div className="services-page__title">
          <PageTitle title="Les solutions proposées" />
        </div>

        <ServicesList pageVersion="services-list__page-version" />
      </div>
      <ContactSection marginBottomVersion="margin-bottom-version" />
    </Layout>
  );
}

export default Services;
