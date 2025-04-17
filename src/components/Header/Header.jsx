// React elements
import { useEffect, useState } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Components
import SocialMedia from "../SocialMedia/SocialMedia";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

// Style
import "./Header.scss";

function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const { language } = useLanguage();

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  useEffect(() => {
    if (isHamburgerMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHamburgerMenuOpen]);

  return (
    <header
      className={`header  ${
        isHamburgerMenuOpen ? "header-mobile-version" : ""
      }`}
    >
      {!isHamburgerMenuOpen && (
        <>
          <Logo />

          <div className="header__links-block">
            <nav className="header__links__nav">
              <ul>
                <li>
                  <a href="/projects">
                    {language === "FR" ? "PORTFOLIO" : "PROJECTS"}
                  </a>
                </li>
                <li>
                  <a href="/services">
                    {language === "FR" ? "SERVICES" : "SERVICES"}
                  </a>
                </li>
                <li>
                  <a href="/about">
                    {language === "FR" ? "À PROPOS" : "ABOUT"}
                  </a>
                </li>
                <li>
                  <a href="/skills">
                    {language === "FR" ? "COMPÉTENCES" : "SKILLS"}
                  </a>
                </li>
              </ul>
            </nav>

            <Button
              text="Discutons de votre projet"
              link="/contact"
              mobileVersion="button-mobile-version"
            />

            <div className="menu-hamburger">
              <button
                className={`menu-hamburger__button ${
                  isHamburgerMenuOpen ? "open" : ""
                }`}
                onClick={toggleHamburgerMenu}
                aria-expanded={isHamburgerMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </>
      )}

      <div
        className={`menu-hamburger__nav ${isHamburgerMenuOpen ? "open" : ""}`}
      >
        <svg
          onClick={() => setIsHamburgerMenuOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <div className="menu-hamburger__nav__block ">
          <nav>
            <ul>
              <li
                onClick={() => {
                  setIsHamburgerMenuOpen(false);
                }}
              >
                <a href="/projects">
                  {language === "FR" ? "PORTFOLIO" : "PROJECTS"}
                </a>
              </li>
              <li
                onClick={() => {
                  setIsHamburgerMenuOpen(false);
                }}
              >
                <a href="/services">
                  {language === "FR" ? "SERVICES" : "SERVICES"}
                </a>
              </li>
              <li
                onClick={() => {
                  setIsHamburgerMenuOpen(false);
                }}
              >
                <a href="/about">{language === "FR" ? "À PROPOS" : "ABOUT"}</a>
              </li>
              <li
                onClick={() => {
                  setIsHamburgerMenuOpen(false);
                }}
              >
                <a href="/skills">
                  {language === "FR" ? "COMPÉTENCES" : "SKILLS"}
                </a>
              </li>
            </ul>
          </nav>

          <div className="menu-hamburger__nav__links">
            <SocialMedia version="dark" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
