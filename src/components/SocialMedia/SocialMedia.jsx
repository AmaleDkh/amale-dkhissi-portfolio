// React elements
import { Link } from "react-router-dom";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen, faFile } from "@fortawesome/free-solid-svg-icons";

// Style
import "./SocialMedia.scss";

function SocialMedia({ version }) {
  return (
    <div className={`social-media-container__${version}`}>
      <Link
        to="https://www.linkedin.com/in/amaledkhissi/"
        className={`social-media-container__${version}__link`}
        target="_blank"
        aria-label="Ouvrir mon LinkedIn"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className={`social-media-container__${version}__link__icon`}
        />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <a
        href="mailto:amdkhissi@gmail.com"
        className={`social-media-container__${version}__link`}
      >
        <FontAwesomeIcon
          icon={faEnvelopeOpen}
          className={`social-media-container__${version}__link__icon`}
          aria-label="M'envoyer un mail"
        />
        <span className="sr-only">Email</span>
      </a>
      <Link
        to="https://github.com/AmaleDkh?tab=repositories"
        className={`social-media-container__${version}__link`}
        target="_blank"
        aria-label="Ouvrir mon GitHub"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={`social-media-container__${version}__link__icon`}
        />
        <span className="sr-only">GitHub</span>
      </Link>

      {version === "light" && (
        <FontAwesomeIcon
          icon={faFile}
          className="social-media-accounts__icons-container__icon"
        />
      )}
    </div>
  );
}

export default SocialMedia;

// <div className="social-media-container">
// <Link
//   to="https://www.linkedin.com/in/amaledkhissi/"
//   className="social-media-container__link"
//   target="_blank"
//   aria-label="Ouvrir mon LinkedIn"
// >
//   <FontAwesomeIcon
//     icon={faLinkedinIn}
//     className="social-media-container__link__icon"
//   />
//   <span className="sr-only">LinkedIn</span>
// </Link>
// <a
//   href="mailto:amdkhissi@gmail.com"
//   className="social-media-container__link"
// >
//   <FontAwesomeIcon
//     icon={faEnvelopeOpen}
//     className="social-media-container__link__icon"
//     aria-label="M'envoyer un mail"
//   />
//   <span className="sr-only">Email</span>
// </a>
// <Link
//   to="https://github.com/AmaleDkh?tab=repositories"
//   className="footer__links__link"
//   target="_blank"
//   aria-label="Ouvrir mon GitHub"
// >
//   <FontAwesomeIcon
//     icon={faGithub}
//     className="social-media-container__link__icon"
//   />
//   <span className="sr-only">GitHub</span>
// </Link>
// </div>
