// React element
import { Link } from "react-router-dom";

// Style
import "./SecondaryButton.scss";

function SecondaryButton({
  to = "/projets",
  label = "Voir tous les projects",
}) {
  return (
    <Link to={"/projects"} className="secondary-button">
      {label}
    </Link>
  );
}

export default SecondaryButton;
