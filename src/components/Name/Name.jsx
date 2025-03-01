// Style
import "./Name.scss";

function Name({ version }) {
  return (
    <div className={`name ${version}`}>
      <a href="/">
        AMALE <br></br> DKHISSI.
      </a>
    </div>
  );
}

export default Name;
