// Components
import Layout from "../../components/Layout/Layout";
import Presentation from "../../components/Presentation/Presentation";
import About from "../../components/About/About";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";

// Style
import "../Home/Home.scss";

function Home() {
  return (
    <Layout>
      <Presentation />
      <About />
      <ProjectsList />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default Home;
