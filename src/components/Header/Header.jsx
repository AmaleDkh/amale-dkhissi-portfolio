// React elements
import { useState } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Component
import SocialMedia from "../SocialMedia/SocialMedia";

// Style
import "./Header.scss";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("FR");

  const { language, changeLanguage } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const toggleLanguageSelector = () => {
    setIsLanguageSelectorOpen(!isLanguageSelectorOpen);
  };

  const handleLanguageChange = () => {
    if (language === "FR") {
      changeLanguage("ANG");
      setCurrentLanguage("ANG");
    } else {
      changeLanguage("FR");
      setCurrentLanguage("FR");
    }
  };

  return (
    <header className="header">
      <div className="header__title">Amale Dkhissi</div>

      <div className="header__links">
        <nav className="header__links__nav">
          <div onClick={() => scrollToSection("about")}>
            {language === "FR" ? "À propos" : "About"}
          </div>
          <div onClick={() => scrollToSection("projects")}>
            {language === "FR" ? "Projets" : "Projects"}
          </div>
          <div onClick={() => scrollToSection("skills")}>
            {language === "FR" ? "Compétences" : "Skills"}
          </div>
        </nav>

        <SocialMedia version="dark" />

        <div
          className={`header__links__languages ${isLanguageSelectorOpen ? "open" : ""}`}
          onClick={toggleLanguageSelector}
        >
          <div className="header__links__languages__current-language">
            <div>{currentLanguage}</div>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          {isLanguageSelectorOpen === true && (
            <div
              className="header__links__languages__new-language"
              onClick={handleLanguageChange}
            >
              {currentLanguage === "FR" ? "ANG" : "FR"}
            </div>
          )}
        </div>

        <div className="menu-hamburger">
          <button
            className={`menu-hamburger__button ${isHamburgerMenuOpen ? "open" : ""}`}
            onClick={toggleHamburgerMenu}
            aria-expanded={isHamburgerMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          className={`menu-hamburger__nav ${isHamburgerMenuOpen ? "open" : ""}`}
        >
          <ul>
            <li
              onClick={() => {
                scrollToSection("about");
                setIsHamburgerMenuOpen(false);
              }}
            >
              {language === "FR" ? "À propos" : "About"}
            </li>
            <li
              onClick={() => {
                scrollToSection("projects");
                setIsHamburgerMenuOpen(false);
              }}
            >
              {language === "FR" ? "Projets" : "Projects"}
            </li>
            <li
              onClick={() => {
                scrollToSection("skills");
                setIsHamburgerMenuOpen(false);
              }}
            >
              {language === "FR" ? "Compétences" : "Skills"}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
