// React elements
import { useState } from "react";

// Component
import SocialMedia from "../SocialMedia/SocialMedia";

// Style
import "./Header.scss";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const languages = ["FR", "ANG"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__title">Amale Dkhissi</div>

      <div className="header__links">
        <nav className="header__links__nav">
          <div onClick={() => scrollToSection("about")}>À propos</div>
          <div onClick={() => scrollToSection("projects")}>Projets</div>
          <div onClick={() => scrollToSection("skills")}>Compétences</div>
        </nav>

        <SocialMedia version="dark" />

        <div
          className={`header__links__languages ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="header__links__languages__current-language">
            <div>{languages[0]}</div>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          {isOpen === true && (
            <div className="header__links__languages__new-language">
              {languages[1]}
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
