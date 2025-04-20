// Components
import Layout from "../../components/Layout/Layout";
import Presentation from "../../components/Presentation/Presentation";
import ServicesList from "../../components/ServicesList/ServicesList";
import ContactSection from "../../components/ContactSection/ContactSection";
import Reviews from "../../components/Reviews/Reviews";
// import ValuesList from "../../components/ValuesList/ValuesList";
import ProjectsPreview from "../../components/ProjectsPreview/ProjectsPreview";
import TwoImagesAndTextSection from "../../components/TwoImagesAndTextSection/TwoImagesAndTextSection";

// Style
import "../../assets/styles/Global.scss";
import "./../../assets/styles/Fonts.scss";
import "../Home/Home.scss";

// Images
import Me15 from "../../assets/images/Me15.webp";
import Me17 from "../../assets/images/Me17.webp";
import CoffeeAndComputer from "../../assets/images/CoffeeAndComputer.webp";
import MyComputer9 from "../../assets/images/MyComputer9.webp";

function Home() {
  return (
    <Layout>
      <Presentation />

      {/* <div className="values-list-section">
        <ValuesList />
      </div> */}

      <TwoImagesAndTextSection
        title="Une solution sur mesure pour chaque projet"
        text="Que vous ayez besoin d'un site codé sur mesure ou d'une solution no-code, je m'adapte et vous propose des solutions personnalisées et évolutives. Mon objectif est de vous fournir un site performant et facile à prendre en main, tout en restant aligné avec vos objectifs."
        firstImage={CoffeeAndComputer}
        secondImage={Me15}
        reverseVersion="two-images-section__content--images-first"
      />

      <ServicesList
        isTitleAndButtonVisible={true}
        marginVersion="services__padding-rem-version"
      />

      <Reviews />

      <ProjectsPreview />

      <TwoImagesAndTextSection
        title="Mon histoire"
        text={`Après <span class="words-with-font-weight">7 ans d'expérience en communication</span>, je me suis lancée dans le développement web, où j'allie <span class="words-with-font-weight">organisation et professionnalisme</span> pour créer <span class="words-with-font-weight">des solutions à la fois élégantes et performantes</span>.
        <br></br> Passionnée par <span class="words-with-font-weight">la littérature</span> depuis mon plus jeune âge, j'aime concevoir des solutions web qui allient <span class="words-with-font-weight">narration et performance</span>, tout en répondant aux attentes techniques et esthétiques.`}
        firstImage={MyComputer9}
        secondImage={Me17}
        reverseVersion="two-images-section__content--text-first"
        withButton={true}
      />

      <ContactSection marginBottomVersion="-bottom-version" />
    </Layout>
  );
}

export default Home;
