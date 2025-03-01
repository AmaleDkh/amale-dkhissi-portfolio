// React element
import { useLocation } from "react-router-dom";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import SecondTitleForSection from "../SecondTitleForSection/SecondTitleForSection";

// Style
import "./TextSection.scss";

function TextSection({ text, sectionTitle, textSectionColorVersion }) {
  const location = useLocation();

  return (
    <section className="text-section">
      <div className={`text-section__content ${textSectionColorVersion}`}>
        {location.pathname === "/" ? (
          <SectionTitle
            title={sectionTitle}
            className=""
            margin="large-margin"
            colorVersion="white-version"
          />
        ) : (
          <SecondTitleForSection title={sectionTitle} />
        )}
        <p
          className="text-section__content__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  );
}

export default TextSection;
