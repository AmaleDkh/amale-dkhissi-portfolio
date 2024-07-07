// Style
import "./Header.scss";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header__title">Amale Dkhissi</div>
      <nav className="header__nav">
        <div onClick={() => scrollToSection("about")}>À propos</div>
        <div onClick={() => scrollToSection("projects")}>Projets</div>
        <div onClick={() => scrollToSection("skills")}>Compétences</div>
        <div onClick={() => scrollToSection("contact")}>Contact</div>
      </nav>
    </header>
  );
}

export default Header;
