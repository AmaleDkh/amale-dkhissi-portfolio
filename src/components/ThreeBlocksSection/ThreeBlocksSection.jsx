// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./ThreeBlocksSection.scss";

function ValuesList({
  title,
  pageVersion,
  firstTitle,
  secondTitle,
  thirdTitle,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
}) {
  return (
    <section className={`three-blocks-section ${pageVersion}`}>
      <SectionTitle title={title} />
      <div className="three-blocks-section__blocks--first-version">
        <div
          className="three-blocks-section__block"
          style={{ justifyContent: "center" }}
        >
          <h3 className="three-blocks-section__block__title">{firstTitle}</h3>
          <div className="horizontal-line__services-version"></div>
        </div>
        <div
          className="three-blocks-section__blocks__block-title "
          style={{ justifyContent: "center" }}
        >
          <h3 className="three-blocks-section__block__title">{secondTitle}</h3>

          <div className="horizontal-line__services-version"></div>
        </div>
        <div
          className="three-blocks-section__block"
          style={{ justifyContent: "center" }}
        >
          <h3 className="three-blocks-section__block__title">{thirdTitle}</h3>
          <div className="horizontal-line__services-version"></div>
        </div>
      </div>

      <div className="three-blocks-section__blocks">
        <div className="three-blocks-section__block">
          <div className="three-blocks-section__block__text">
            <p className="three-blocks-section__block__text__first-paragraph">
              {firstParagraph}
            </p>

            <p className="three-blocks-section__block__text__second-paragraph"></p>
          </div>
        </div>

        <div className="three-blocks-section__block">
          <div className="three-blocks-section__block__text">
            <p className="three-blocks-section__block__text__first-paragraph">
              {secondParagraph}
            </p>

            <p className="three-blocks-section__block__text__second-paragraph"></p>
          </div>
        </div>

        <div className="three-blocks-section__block">
          <div className="three-blocks-section__block__text">
            <p className="three-blocks-section__block__text__first-paragraph">
              {thirdParagraph}
            </p>

            <p className="three-blocks-section__block__text__second-paragraph"></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesList;
