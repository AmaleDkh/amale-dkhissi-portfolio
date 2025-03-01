// Style
import "./Introduction.scss";

function Introduction({ text, versionWithMargin, versionWithMarginBottom }) {
  return (
    <p
      className={`introduction ${versionWithMargin} ${versionWithMarginBottom}`}
    >
      {text}
    </p>
  );
}

export default Introduction;
