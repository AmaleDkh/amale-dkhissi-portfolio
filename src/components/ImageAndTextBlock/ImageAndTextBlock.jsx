// React element
import { useLocation } from "react-router-dom";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import SecondTitleForSection from "../SecondTitleForSection/SecondTitleForSection";
import Button from "../Button/Button";

// Style
import "./ImageAndTextBlock.scss";

function ImageAndTextBlock({
  sectionTitle,
  text,
  image,
  alt,
  className,
  subtitle,
  textPadding,
  versionWithButton,
  textButton,
  linkButton,
  versionWithSubtitle,
}) {
  const location = useLocation();

  return (
    <div className={`image-and-text-block ${className}`}>
      <div className={`image-and-text-block__text ${textPadding}`}>
        {location.pathname === "/" ? (
          <SectionTitle
            title={sectionTitle}
            className=""
            margin="large-margin"
          />
        ) : (
          <SecondTitleForSection title={sectionTitle} />
        )}
        {versionWithSubtitle && (
          <h3 className="image-and-text-block__text__subtitle">{subtitle}</h3>
        )}
        <p
          className="image-and-text-block__paragraph"
          dangerouslySetInnerHTML={{ __html: text }}
        />

        {versionWithButton && (
          <Button
            text={textButton}
            link={linkButton}
            marginTopVersion="margin-top-version"
          />
        )}
      </div>

      <img
        src={image}
        alt={alt}
        className="image-and-text-block__image-container__image image-with-opacity image-with-border-radius"
      ></img>
    </div>
  );
}

export default ImageAndTextBlock;
