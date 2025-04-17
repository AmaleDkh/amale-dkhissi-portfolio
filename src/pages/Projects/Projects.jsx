// React element
import { useState } from "react";

// Components
import Layout from "../../components/Layout/Layout";
import ContactSection from "../../components/ContactSection/ContactSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

// Style
import "./Projects.scss";

function Projects() {
  // const [index, setIndex] = useState(1);

  // const showPreviousProject = () => {
  //   setIndex((prevIndex) =>
  //     prevIndex === 0 ? projectsList.length - 1 : prevIndex - 1
  //   );
  // };

  // const showNextProject = () => {
  //   setIndex((nextIndex) =>
  //     nextIndex === projectsList.length - 1 ? 0 : nextIndex + 1
  //   );
  // };

  return (
    <Layout>
      <ProjectsSection />

      <ContactSection marginBottomVersion="margin-bottom-version" />
    </Layout>
  );
}

export default Projects;
