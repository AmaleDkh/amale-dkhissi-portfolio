// Style
import "./Logo.scss";

function Logo({ logo }) {
  return (
    <a href="/">
      <img src={logo} alt="Logo" className="logo" />
    </a>
  );
}

export default Logo;
