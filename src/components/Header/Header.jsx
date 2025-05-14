// React elements
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

// Components
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

// Style
import "./Header.scss";

// Logo
import LogoBlueVersion from "../../assets/images/LogoBlueVersion.webp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Logo logo={LogoBlueVersion} />

        <div className="header__nav__desktop-menu">
          <Link to="/projects" className="header__nav__desktop-menu__link">
            Portfolio
          </Link>
          <Link to="/services" className="header__nav__desktop-menu__link">
            Services
          </Link>
          <Link to="/about" className="header__nav__desktop-menu__link">
            Histoire
          </Link>
          {/* <Link to="/skills" className="header__nav__desktop-menu__link">
            Compétences
          </Link> */}

          <Button link="/contact" text="UN PROJET ?" />
        </div>

        <button
          className="header__nav__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`header__nav__mobile-menu ${
          mobileMenuOpen ? "header__nav__mobile-menu--open" : ""
        }`}
      >
        <button
          className="header__nav__mobile-menu__mobile-close"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <Link
          to="/projects"
          className="header__nav__mobile-menu__link"
          onClick={toggleMobileMenu}
        >
          Portfolio
        </Link>
        <Link
          to="/services"
          className="header__nav__mobile-menu__link"
          onClick={toggleMobileMenu}
        >
          Services
        </Link>
        <Link
          to="/about"
          className="header__nav__mobile-menu__link"
          onClick={toggleMobileMenu}
        >
          Histoire
        </Link>

        {/* <Link
          to="/skills"
          className="header__nav__mobile-menu__link"
          onClick={toggleMobileMenu}
        >
          Compétences
        </Link> */}

        <Button text="UN PROJET ?" link="/contact" />
      </div>
    </header>
  );
};

export default Header;
