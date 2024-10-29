// Component
import TechnologyItem from "../TechnologyItem/TechnologyItem";

// Font Awesome icons
import {
  faLaptopCode,
  faDatabase,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

// Style
import "./../Technologies/Technologies.scss";

function Technologies() {
  return (
    <div className="technologies-list">
      <TechnologyItem
        icon={faLaptopCode}
        title="DEV. FRONT-END"
        technologies="React, JavaScript, TypeScript, HTML, CSS, Sass"
      />
      <TechnologyItem
        icon={faDatabase}
        title="DEV. BACK-END"
        technologies="Node.js, Express, MongoDB, SQL"
      />
      <TechnologyItem
        icon={faLightbulb}
        title="AUTRES OUTILS"
        technologies="GitHub, Postman, Figma, Swagger"
      />
    </div>
  );
}

export default Technologies;
