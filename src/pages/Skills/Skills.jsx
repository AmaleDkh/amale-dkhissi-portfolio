// Components
import Layout from "../../components/Layout/Layout";
import SkillsList from "../../components/SkillsList/SkillsList";
import ContactSection from "../../components/ContactSection/ContactSection";
import PageTitle from "../../components/PageTitle/PageTitle";

// Style
import "./Skills.scss";

function Skills() {
  return (
    <Layout>
      <div className="skills-page-container">
        <PageTitle title="Mes compétences" />

        <SkillsList />
      </div>
      <ContactSection marginBottomVersion="margin-bottom-version" />
    </Layout>
  );
}

export default Skills;
