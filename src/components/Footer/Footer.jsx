// Component
import SocialMedia from "../SocialMedia/SocialMedia";

// Style
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__name">Amale Dkhissi</div>
      <div className="footer__mention">© 2024</div>
      <SocialMedia version="dark" />
    </footer>
  );
}

export default Footer;
