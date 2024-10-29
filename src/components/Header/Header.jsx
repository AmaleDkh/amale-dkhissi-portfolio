// React elements
import { useState } from "react";

// Component
import SocialMedia from "../SocialMedia/SocialMedia";

// Style
import "./Header.scss";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__title">Amale Dkhissi</div>
      <nav className="header__nav">
        <div onClick={() => scrollToSection("about")}>À propos</div>
        <div onClick={() => scrollToSection("projects")}>Projets</div>
        <div onClick={() => scrollToSection("skills")}>Compétences</div>
        <SocialMedia version="dark" />
      </nav>

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
