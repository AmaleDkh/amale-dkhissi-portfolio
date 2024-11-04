// React elements
import { useState, useEffect, useCallback } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Style
import "./SocialMediaAccountsSection.scss";

// Component
import SocialMedia from "../SocialMedia/SocialMedia";

function SocialMediaAccounts() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  const { language } = useLanguage();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const section = document.querySelector(".social-media-accounts");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsSectionVisible(true);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      className={`social-media-accounts ${isSectionVisible ? "visible" : "hidden"}`}
    >
      <div className="social-media-accounts__title">
        {isMobile
          ? language === "FR"
            ? "Faisons connaissance !"
            : "Let's connect!"
          : language === "FR"
            ? "Et si nous faisions connaissance ?"
            : "Let's get to know each other!"}
      </div>
      <SocialMedia version="light" />
    </section>
  );
}

export default SocialMediaAccounts;
