// React element
import { useState } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Components
import SocialMedia from "../SocialMedia/SocialMedia";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Style
import "./Header.scss";

function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
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

  return (
    <header className="header">
      {!isHamburgerMenuOpen && (
        <>
          <div className="header__title">Amale Dkhissi</div>

          <div className="header__links-block">
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

            <SocialMedia version="dark" className="close" />

            <LanguageSelector
              currentLanguage={currentLanguage}
              setCurrentLanguage={setCurrentLanguage}
              className="close"
            />

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
          </div>
        </>
      )}

      <div
        className={`menu-hamburger__nav ${isHamburgerMenuOpen ? "open" : ""}`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setIsHamburgerMenuOpen(false)}
        />

        <div className="menu-hamburger__nav__block">
          <nav>
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

          <div className="menu-hamburger__nav__links">
            <LanguageSelector
              currentLanguage={currentLanguage}
              setCurrentLanguage={setCurrentLanguage}
            />
            <SocialMedia version="dark" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
