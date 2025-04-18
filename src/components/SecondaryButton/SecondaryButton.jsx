// React element
import { Link } from "react-router-dom";

// Style
import "./SecondaryButton.scss";

function SecondaryButton({ link, label, centerVersion }) {
  return (
    <Link to={link} className={`secondary-button ${centerVersion}`}>
      {label}
    </Link>
  );
}

export default SecondaryButton;
