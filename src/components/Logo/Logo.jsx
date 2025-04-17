// Style
import "./Logo.scss";

// Image
import LogoImage from "../../assets/images/Logo.webp";

function Logo() {
  return (
    <a href="/">
      <img src={LogoImage} alt="Logo" className="logo" />;
    </a>
  );
}

export default Logo;
