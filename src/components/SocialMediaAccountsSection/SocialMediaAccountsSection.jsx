// Style
import "./SocialMediaAccountsSection.scss";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen, faFile } from "@fortawesome/free-solid-svg-icons";

import SocialMedia from "../SocialMedia/SocialMedia";

function SocialMediaAccounts() {
  return (
    <section className="social-media-accounts">
      <div className="social-media-accounts__title">
        Et si nous faisions connaissance ?
      </div>
      {/* <div className="social-media-accounts__icons-container">
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="social-media-accounts__icons-container__icon"
        />
        <FontAwesomeIcon
          icon={faEnvelopeOpen}
          className="social-media-accounts__icons-container__icon"
        />

        <FontAwesomeIcon
          icon={faGithub}
          className="social-media-accounts__icons-container__icon"
        />
        <FontAwesomeIcon
          icon={faFile}
          className="social-media-accounts__icons-container__icon"
        />
      </div> */}
      <SocialMedia version="light" />
    </section>
  );
}

export default SocialMediaAccounts;
