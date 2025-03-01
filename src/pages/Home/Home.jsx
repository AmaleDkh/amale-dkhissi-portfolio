// Components
import Layout from "../../components/Layout/Layout";
import Presentation from "../../components/Presentation/Presentation";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import ImageAndTextBlock from "../../components/ImageAndTextBlock/ImageAndTextBlock";
import ServicesList from "../../components/ServicesList/ServicesList";
import ContactSection from "../../components/ContactSection/ContactSection";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Reviews from "../../components/Reviews/Reviews";
import Button from "../../components/Button/Button";
import ValuesList from "../../components/ValuesList/ValuesList";

// Style
import "../../assets/styles/Global.scss";
import "./../../assets/styles/Fonts.scss";
import "../Home/Home.scss";

// Images
import Me5 from "../../assets/images/Me5.webp";
import Me11 from "../../assets/images/Me11.webp";

function Home() {
  return (
    <Layout>
      <Presentation />

      <div className="values-list-section">
        <ValuesList />
      </div>

      <ImageAndTextBlock
        text={`Que vous ayez besoin d'un site codé sur mesure ou d'une solution no-code, 
        je m'adapte et vous propose  <span class="words-with-font-weight">des solutions personnalisées et évolutives</span>. <br></br>
        Mon objectif est de vous fournir <span class="words-with-font-weight">un site performant et facile à prendre en main</span>, 
        tout en restant aligné avec vos objectifs.`}
        image={Me11}
        sectionTitle={`Une solution sur mesure <br>pour chaque projet`}
        className="image-and-text-block--background-color-version"
        textPadding="image-and-text-block__margin-left"
        versionWithSubtitle={true}
        alt="Amale assise à la BNF et en train de travailler"
      />

      <div className="services-list">
        <div className="home-page__title-section">
          <SectionTitle
            title="Les solutions proposés"
            className=""
            margin="large-margin"
            mobileVersion="version-with-text-align"
            versionWithMarginTop="version-with-margin-top"
          />
        </div>

        <ServicesList />

        <div className="homepage-button">
          <Button link="/services" text="Découvrez les solutions sur mesure" />
        </div>
      </div>

      <Reviews />

      <ProjectsList />

      <div className="projects-list__button">
        <Button text="Découvrez plus de projets" link="/projects" />
      </div>

      <ImageAndTextBlock
        text={`Après <span class="words-with-font-weight">7 ans d'expérience en communication</span>, je me suis lancée dans le développement web, où j'allie <span class="words-with-font-weight">organisation et professionnalisme</span> pour créer <span class="words-with-font-weight">des solutions à la fois élégantes et performantes</span>.
        <br></br> Passionnée par <span class="words-with-font-weight">la littérature</span> depuis mon plus jeune âge, j'aime concevoir des solutions web qui allient <span class="words-with-font-weight">narration et performance</span>, tout en répondant aux attentes techniques et esthétiques.`}
        image={Me5}
        alt="Photo d'Amale à la terrasse d'un café en hiver"
        className="row-reverse-version"
        sectionTitle="Mon histoire"
        textPadding="image-and-text-block__margin-right"
        versionWithButton={true}
        textButton="À propos de moi"
        linkButton="/about"
        versionWithSubtitle={false}
      />

      <ContactSection marginBottomVersion="margin-bottom-version" />
    </Layout>
  );
}

export default Home;
