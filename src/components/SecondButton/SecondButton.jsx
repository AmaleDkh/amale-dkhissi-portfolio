// Style
import "./SecondButton.scss";

function SecondButton({ text, link, marginTopVersion, mobileVersion }) {
  return (
    <a className={`button ${marginTopVersion} ${mobileVersion}`} href={link}>
      {text}
    </a>
  );
}

export default SecondButton;
