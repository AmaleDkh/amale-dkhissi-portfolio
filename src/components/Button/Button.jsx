// Style
import "./Button.scss";

function Button({
  text,
  link,
  marginTopVersion,
  mobileVersion,
  centerVersion,
  colorVersion,
}) {
  return (
    <a
      className={`button ${marginTopVersion} ${mobileVersion} ${centerVersion} ${colorVersion}`}
      href={link}
    >
      {text}
    </a>
  );
}

export default Button;
