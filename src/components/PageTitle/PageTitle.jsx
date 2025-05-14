// Style
import "./PageTitle.scss";

function PageTitle({ title, paragraph }) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <p className="page-title__paragraph">{paragraph}</p>
    </div>
  );
}

export default PageTitle;
