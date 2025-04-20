// React elements
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

// Components
import Logo from "../Logo/Logo";
import SocialMedia from "../SocialMedia/SocialMedia";

// Style
import "./Footer.scss";

// Logo
import LogoBeigeVersion from "../../assets/images/LogoBeigeVersion.webp";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <Logo logo={LogoBeigeVersion} />
        </div>

        <div>
          <h3 className="footer__section-title">Services</h3>
          <ul className="footer__link-list">
            <li className="footer__link-list-item">
              <Link to="/services#dev">Développement web</Link>
            </li>

            <li className="footer__link-list-item">
              <Link to="/services#seo">SEO</Link>
            </li>

            <li className="footer__link-list-item">
              <Link to="/services#content">Rédaction web</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer__section-title">Plan du site</h3>
          <ul className="footer__link-list">
            <li className="footer__link-list-item">
              <Link to="/projects">Portfolio</Link>
            </li>

            <li className="footer__link-list-item">
              <Link to="/services">Services</Link>
            </li>

            <li className="footer__link-list-item">
              <Link to="/about">Histoire</Link>
            </li>
            {/* <li className="footer__link-list-item">
              <Link to="/skills">Compétences</Link>
            </li> */}
          </ul>
        </div>

        <div>
          <h3 className="footer__section-title">Contact</h3>
          <p className="footer__contact-text">Discutons de votre projet</p>

          <SocialMedia version="light" />
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__bottom__text">
          © {new Date().getFullYear()} Amvea
        </p>
        <button
          onClick={scrollToTop}
          className="footer__bottom__button"
          aria-label="Retour en haut"
        >
          <span>Retour en haut</span>
          <ArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
