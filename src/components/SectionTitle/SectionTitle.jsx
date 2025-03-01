// Style
import "./SectionTitle.scss";

function SectionTitle({
  title,
  colorVersion,
  margin,
  mobileVersion,
  versionWithMarginTop,
  versionWithMarginLeft,
}) {
  return (
    <h2
      className={`section-title ${colorVersion} ${margin} ${mobileVersion} ${versionWithMarginTop} ${versionWithMarginLeft} `}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
}

export default SectionTitle;
