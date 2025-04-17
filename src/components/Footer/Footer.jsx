// Context
import { useLanguage } from "../../context/LanguageContext";

// Components
import SocialMedia from "../SocialMedia/SocialMedia";
import Logo from "../Logo/Logo";

// Style
import "./Footer.scss";

function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <>
        <div className="footer__block">
          <div className="footer__main-information">
            <Logo />
            <div className="footer__main-information__date">© 2025</div>
          </div>

          <div className="footer__links">
            <div className="footer__links__website-menu">
              <h3>{language === "FR" ? "Plan du site" : "SITEMAP"}</h3>
              <nav className="footer__links__website-menu__nav">
                <ul className="footer__links__website-menu__nav__list">
                  <li className="footer__links__website-menu__nav__list__link">
                    <a href="/projects">
                      {language === "FR" ? "Portfolio" : "Projects"}
                    </a>
                  </li>
                  <li className="footer__links__website-menu__nav__list__link">
                    <a href="/services">
                      {language === "FR" ? "Services" : "Services"}
                    </a>
                  </li>
                  <li className="footer__links__website-menu__nav__list__link">
                    <a href="/about">
                      {language === "FR" ? "À propos" : "About"}
                    </a>
                  </li>
                  <li className="footer__links__website-menu__nav__list__link">
                    <a href="/skills">
                      {language === "FR" ? "Compétences" : "Skills"}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__links__social-media">
              <h3> {language === "FR" ? "Me contacter" : "CONTACT ME"}</h3>
              <SocialMedia version="dark" />
            </div>
          </div>
        </div>
      </>
    </footer>
  );
}

export default Footer;
