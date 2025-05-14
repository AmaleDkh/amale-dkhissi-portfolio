// Components
import Layout from "../../components/Layout/Layout";
import ContactSection from "../../components/ContactSection/ContactSection";
import ImageAndTextBlock from "../../components/ImageAndTextBlock/ImageAndTextBlock";
import PageTitle from "../../components/PageTitle/PageTitle";
import TwoImagesAndTextSection from "../../components/TwoImagesAndTextSection/TwoImagesAndTextSection";

// Style
import "./About.scss";

// Images
import Me1 from "../../assets/images/Me1.webp";
import Me16 from "../../assets/images/Me16.webp";
import Me19 from "../../assets/images/Me19.webp";
import MyComputer10 from "../../assets/images/MyComputer10.webp";
import MyComputer11 from "../../assets/images/MyComputer11.webp";
import Reading from "../../assets/images/Reading.webp";

function About() {
  return (
    <Layout>
      <div className="about-page__title">
        <PageTitle
          title="Mon histoire"
          paragraph="Une histoire de passion, de discrétion et de détermination."
        />
      </div>

      <ImageAndTextBlock
        sectionTitle="L’art des mots et de la rigueur"
        text={`Mon expérience en maisons d’édition, médias (France Inter, CANAL+) et chez L’Oréal m’a formée à la maîtrise des mots.
        <br></br>
        Véritables écoles de rigueur et d’excellence, ces environnements exigeants m’ont apporté une expertise solide pour piloter un projet de A à Z. `}
        image={Me1}
        reverseVersion="image-and-text-block__grid--text-first"
        marginVersion="image-and-text-block--no-padding-top"
      />

      <TwoImagesAndTextSection
        title="Une approche bienveillante"
        text={`Mon approche repose sur trois valeurs essentielles. 
        <br></br> 
        <span class="words-with-font-weight">Écoute</span> <br> Une collaboration basée sur l’écoute et la compréhension mutuelle.
        <br></br>
        <span class="words-with-font-weight">Engagement</span> <br> Chaque projet compte et mérite toute mon attention.
        <br></br>
        <span class="words-with-font-weight">Qualité</span> <br> Une rigueur constante pour un résultat aligné avec vos objectifs.
        <br></br>
        Mon entourage me décrit souvent comme une force tranquille et déterminée. Ces qualités, je les applique naturellement dans ma façon de gérer les projets.
        `}
        firstImage={MyComputer10}
        secondImage={Me16}
        reverseVersion="two-images-section__content--text-first"
      />

      <ImageAndTextBlock
        sectionTitle="Un intérêt naturel pour le développement web"
        text={`Pendant longtemps, j’ai eu le développement web dans un coin de ma tête. 
        <br></br>
        L’envie de me former n’a cessé de grandir en moi. Alors je me suis écoutée. 
        <br></br>
        Il a fallu de la discipline, des réveils à l’aube, des nuits raccourcies et beaucoup d’endurance. Mais j’y suis arrivée.
        <br></br>
        Le développement web est pour moi une nouvelle façon d’écrire des solutions qui ont du sens.`}
        image={MyComputer11}
        reverseVersion="image-and-text-block__grid--text-first"
        marginVersion="image-and-text-block--with-padding-top"
      />

      <TwoImagesAndTextSection
        title="Les livres comme inspiration"
        text={`Depuis toujours, la littérature occupent une place importante dans ma vie.
        <br></br>
        Cette passion se reflète aussi dans mon approche du web. Je crois que chaque site raconte une histoire. J'aime être la développeuse qui la crée.
        <br></br>
        Lorsque je ne suis pas devant un écran à coder, je suis à coup sûr en train de lire ou d’écrire.`}
        firstImage={Reading}
        secondImage={Me19}
        reverseVersion="two-images-section__content--text-first"
      />

      <ContactSection
        marginBottomVersion="margin-bottom-version"
        marginTopVersion="contact-margin-top"
      />
    </Layout>
  );
}

export default About;
