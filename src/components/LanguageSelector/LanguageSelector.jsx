// React element
import { useState } from "react";

// Context
import { useLanguage } from "../../context/LanguageContext";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// Style
import "./LanguageSelector.scss";

function LanguageSelector({ currentLanguage, setCurrentLanguage, className }) {
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);

  const { language, changeLanguage } = useLanguage();

  const toggleLanguageSelector = () => {
    setIsLanguageSelectorOpen(!isLanguageSelectorOpen);
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
    <div
      className={`header__links__languages ${isLanguageSelectorOpen ? "open" : ""} ${className}`}
      onClick={toggleLanguageSelector}
    >
      <div className="header__links__languages__current-language">
        <div>{currentLanguage}</div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      {isLanguageSelectorOpen === true && (
        <div
          className="header__links__languages__new-language"
          onClick={handleLanguageChange}
        >
          {currentLanguage === "FR" ? "ANG" : "FR"}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
