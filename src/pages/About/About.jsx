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
        <PageTitle title="Mon histoire" />
      </div>

      <ImageAndTextBlock
        sectionTitle="Mon parcours"
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
        reverseVersion="image-and-text-block__grid--text-first"
      />

      <TwoImagesAndTextSection
        title="Une solution sur mesure pour chaque projet"
        text="Que vous ayez besoin d'un site codé sur mesure ou d'une solution no-code, je m'adapte et vous propose des solutions personnalisées et évolutives. Mon objectif est de vous fournir un site performant et facile à prendre en main, tout en restant aligné avec vos objectifs."
        firstImage={MyComputer10}
        secondImage={Me16}
        reverseVersion="two-images-section__content--text-first"
      />

      <ImageAndTextBlock
        sectionTitle="Pourquoi le développement web ?"
        text={`Le développement web n’est pas qu’une technique pour moi, c’est <span class="words-with-font-weight">une
          nouvelle façon de penser et de résoudre des problèmes</span>. <br> </br> Ce qui me passionne, c'est la possibilité de  
          <span class="words-with-font-weight">donner vie à des idées</span>, de les
          transformer en interfaces utiles et engageantes.  <br> </br> J’aime voir un projet se concrétiser, 
          de la conception à la mise en ligne, et savoir qu'il apportera  <span class="words-with-font-weight">une véritable valeur ajoutée</span> 
          à ceux qui l’utilisent. `}
        image={MyComputer11}
        reverseVersion="image-and-text-block__grid--text-first"
      />

      <TwoImagesAndTextSection
        title="Mes passions"
        text={`Depuis toujours, <span class="words-with-font-weight">les mots et la littérature occupent une place
        importante</span> dans ma vie. <br></br> Cette passion se reflète aussi dans mon
        approche du web : je crois que <span class="words-with-font-weight">chaque site, chaque application
        raconte une histoire</span>, et j'aime être l'artisane qui crée cette
        narration digitale. <br></br> Lorsque je ne suis pas devant un
        écran à coder, <span class="words-with-font-weight">il n’est pas rare que je sois en train de lire ou
        d’écrire</span>, toujours à la recherche <span class="words-with-font-weight">de nouvelles façons d'allier
        créativité et performance</span>.`}
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
