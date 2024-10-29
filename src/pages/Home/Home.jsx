// Components
import Layout from "../../components/Layout/Layout";
import Presentation from "../../components/Presentation/Presentation";
import SocialMediaAccountsSection from "../../components/SocialMediaAccountsSection/SocialMediaAccountsSection";
import About from "../../components/About/About";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import Skills from "../../components/Skills/Skills";

// Style
import "../Home/Home.scss";
import "./../../assets/styles/Fonts.scss";

function Home() {
  return (
    <Layout>
      <Presentation />
      <SocialMediaAccountsSection />
      <About />
      <ProjectsList />
      <Skills />
    </Layout>
  );
}

export default Home;
