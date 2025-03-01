// Components
import Layout from "../../components/Layout/Layout";
import ContactSection from "../../components/ContactSection/ContactSection";
import Experiences from "../../components/Experiences/Experiences";
import ImageAndTextBlock from "../../components/ImageAndTextBlock/ImageAndTextBlock";
import TextSection from "../../components/TextSection/TextSection";
import PageTitle from "../../components/PageTitle/PageTitle";

// Style
import "./About.scss";

// Images
import Me1 from "../../assets/images/Me1.webp";
import Me4 from "../../assets/images/Me4.webp";

function About() {
  return (
    <Layout>
      <div className="about-page__title">
        <PageTitle title="Mon histoire" />
      </div>

      <ImageAndTextBlock
        text={`Mon parcours en communication m'a appris à  
        <span class="words-with-font-weight">comprendre les besoins
        des clients</span>, à structurer des projets et à travailler avec des
        équipes multidisciplinaires. <br> </br> Au fil des années, j’ai acquis 
        <span class="words-with-font-weight">une expertise solide en gestion de projets</span>
        tout en cultivant un esprit créatif. <br> </br> C’est cette capacité à allier 
        <span class="words-with-font-weight">organisation et créativité</span>
        qui m’a poussée à me tourner vers le développement web. <br> </br> J'y ai vu un
        moyen d’avoir un <span class="words-with-font-weight">impact direct</span>, 
        en créant <span class="words-with-font-weight">des interfaces à la fois
        fonctionnelles et esthétiques</span>, pour une expérience utilisateur
        optimale. `}
        image={Me1}
        alt="Photo d'Amale dans un café, devant son ordinateur"
        sectionTitle="Mon parcours"
        textPadding="image-and-text-block__margin-left image-and-text-block__text-mobile-version"
        className="image-and-text-block__mobile-version"
      />

      <Experiences />

      <TextSection
        sectionTitle="Pourquoi le développement web ?"
        text={`Le développement web n’est pas qu’une technique pour moi, c’est <span class="words-with-font-weight">une
          nouvelle façon de penser et de résoudre des problèmes</span>. <br> </br> Ce qui me passionne, c'est la possibilité de  
          <span class="words-with-font-weight">donner vie à des idées</span>, de les
          transformer en interfaces utiles et engageantes.  <br> </br> J’aime voir un projet se concrétiser, 
          de la conception à la mise en ligne, et savoir qu'il apportera  <span class="words-with-font-weight">une véritable valeur ajoutée</span> 
          à ceux qui l’utilisent. `}
      />

      <ImageAndTextBlock
        text={`Depuis toujours, <span class="words-with-font-weight">les mots et la littérature occupent une place
        importante</span> dans ma vie. <br></br> Cette passion se reflète aussi dans mon
        approche du web : je crois que <span class="words-with-font-weight">chaque site, chaque application
        raconte une histoire</span>, et j'aime être l'artisane qui crée cette
        narration digitale. <br></br> Lorsque je ne suis pas devant un
        écran à coder, <span class="words-with-font-weight">il n’est pas rare que je sois en train de lire ou
        d’écrire</span>, toujours à la recherche <span class="words-with-font-weight">de nouvelles façons d'allier
        créativité et performance</span>.`}
        image={Me4}
        alt="Photo d'Amale à la BNF, avec des livres en fond"
        sectionTitle="Mes passions"
        textPadding="image-and-text-block__margin-left"
      />

      <ContactSection
        marginBottomVersion="margin-bottom-version"
        marginTopVersion="contact-margin-top"
      />
    </Layout>
  );
}

export default About;
