// React element
import { Link } from "react-router-dom";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

// Style
import "./SocialMedia.scss";

function SocialMedia({ version, className, email, mobilePhone, gitHub }) {
  const { language } = useLanguage();

  return (
    <div className={`social-media-container__${version} ${className}`}>
      <a
        href="mailto:amdkhissi@gmail.com"
        className={`social-media-container__${version}__link`}
        aria-label="M'envoyer un mail"
      >
        <FontAwesomeIcon
          icon={faEnvelopeOpen}
          className={`social-media-container__${version}__link__icon`}
          aria-label="M'envoyer un mail"
        />

        <span className={`social-media-container__${version}__link__word`}>
          {email}
        </span>
      </a>
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

        <span className={`social-media-container__${version}__link__word`}>
          {mobilePhone}
        </span>
      </Link>

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

        <span className={`social-media-container__${version}__link__word`}>
          {gitHub}
        </span>
      </Link>
    </div>
  );
}

export default SocialMedia;
