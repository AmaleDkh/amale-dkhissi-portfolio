// React elements
import { useState, useEffect } from "react";

// Component
import SocialMedia from "../SocialMedia/SocialMedia";

// Style
import "./Footer.scss";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="footer">
      {isMobile ? (
        <>
          <SocialMedia version="dark" />
          <div className="footer__mention"> Amale Dkhissi | © 2024</div>
        </>
      ) : (
        <>
          <div className="footer__name">Amale Dkhissi</div>
          <div className="footer__mention">© 2024</div>
          <SocialMedia version="dark" />
        </>
      )}
    </footer>
  );
}

export default Footer;
