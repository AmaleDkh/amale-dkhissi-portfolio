// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TechnologyItem({ icon, title, technologies }) {
  return (
    <div className="technologies-list__item">
      <FontAwesomeIcon
        icon={icon}
        size="5x"
        className="technologies-list__item__icon"
      />
      <div className="technologies-list__item__title">{title}</div>
      <div className="technologies-list__item__technologies">
        {technologies}
      </div>
    </div>
  );
}

export default TechnologyItem;
