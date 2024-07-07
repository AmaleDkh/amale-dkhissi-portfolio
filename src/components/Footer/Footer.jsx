// React element
import { Link } from "react-router-dom";

// Style
import "./Footer.scss";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__name">Amale Dkhissi</div>
      <div className="footer__links">
        <Link
          to="https://www.linkedin.com/in/amaledkhissi/"
          className="footer__links__link"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="footer__links__link__icon"
          />
        </Link>
        <Link
          to="https://github.com/AmaleDkh?tab=repositories"
          className="footer__links__link"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="footer__links__link__icon"
          />
        </Link>
        <a href="mailto:amdkhissi@gmail.com" className="footer__links__link">
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            className="footer__links__link__icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
