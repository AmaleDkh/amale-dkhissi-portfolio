import { useState, useEffect, useCallback } from "react";

// Style
import "./SocialMediaAccountsSection.scss";

// Component
import SocialMedia from "../SocialMedia/SocialMedia";

function SocialMediaAccounts() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

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
        Et si nous faisions connaissance ?
      </div>
      <SocialMedia version="light" />
    </section>
  );
}

export default SocialMediaAccounts;
