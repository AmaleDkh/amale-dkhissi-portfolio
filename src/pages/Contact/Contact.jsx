// Components
import Layout from "../../components/Layout/Layout";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import PageTitle from "../../components/PageTitle/PageTitle";

// Style
import "./Contact.scss";

function Contact() {
  return (
    <Layout>
      <section className="contact-page">
        <PageTitle title="Faisons connaissance" />

        <SocialMedia
          version="blue"
          email="amdkhissi@gmail.com"
          mobilePhone="+33 6 02 39 08 13"
          gitHub="AmaleDkh"
        />
      </section>
    </Layout>
  );
}

export default Contact;
