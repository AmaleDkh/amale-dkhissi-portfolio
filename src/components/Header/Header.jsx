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
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("FR");

  const languages = ["FR", "ANG"];

  const { language, changeLanguage } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            {" "}
            {language === "FR" ? "Projets" : "Projects"}
          </div>
          <div onClick={() => scrollToSection("skills")}>
            {" "}
            {language === "FR" ? "Compétences" : "Skills"}
          </div>
        </nav>

        <SocialMedia version="dark" />

        <div
          className={`header__links__languages ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="header__links__languages__current-language">
            <div>{currentLanguage}</div>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          {isOpen === true && (
            <div
              className="header__links__languages__new-language"
              onClick={handleLanguageChange}
            >
              {currentLanguage === "FR" ? "ANG" : "FR"}
            </div>
          )}
        </div>
      </div>

      <div className="menu-hamburger">
        <button
          className={`menu-hamburger__button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`menu-hamburger__nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li
              onClick={() => {
                scrollToSection("about");
                setIsOpen(false);
              }}
            >
              À propos
            </li>
            <li
              onClick={() => {
                scrollToSection("projects");
                setIsOpen(false);
              }}
            >
              Projets
            </li>
            <li
              onClick={() => {
                scrollToSection("skills");
                setIsOpen(false);
              }}
            >
              Compétences
            </li>
            <li
              onClick={() => {
                scrollToSection("contact");
                setIsOpen(false);
              }}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
