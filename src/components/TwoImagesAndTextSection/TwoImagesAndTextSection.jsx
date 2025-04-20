// Component
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./TwoImagesAndTextSection.scss";

function TwoImagesAndTextSection({
  reverseVersion,
  title,
  text,
  firstImage,
  secondImage,
  withButton,
}) {
  return (
    <section className="two-images-section">
      <div className={`two-images-section__content ${reverseVersion}`}>
        <div className="two-images-section__content__images">
          <div className="two-images-section__content__images__image-wrapper--main">
            <img
              src={firstImage}
              alt="Photo professionnelle"
              className="two-images-section__image"
            />
          </div>

          <div className="two-images-section__content__images__image-wrapper--secondary">
            <img
              src={secondImage}
              alt="En situation de travail"
              className="two-images-section__image"
            />
          </div>
        </div>

        <div className="two-images-section__content__text">
          <h2 className="two-images-section__content__text__title">{title}</h2>

          <p
            className="two-images-section__content__text__paragraph"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          {withButton && (
            <SecondaryButton
              link="/about"
              label="En découvrir plus"
              centerVersion=""
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default TwoImagesAndTextSection;
