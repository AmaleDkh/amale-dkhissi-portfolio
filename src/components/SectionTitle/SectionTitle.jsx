// Style
import "./SectionTitle.scss";

// Component
import HorizontalLine from "../HorizontalLine/HorizontalLine";

function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h2 className="section-title__title">{title}</h2>
      <HorizontalLine className="horizontal-line__right" />
    </div>
  );
}

export default SectionTitle;
