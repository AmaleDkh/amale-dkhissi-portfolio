// Style
import "./ImageBlock.scss";

function ImageBlock({ image, showText = true, marginVersion }) {
  return (
    <div className={`image-block ${marginVersion}`}>
      <img src={image} alt="" className="image-block__img " />

      {showText && (
        <div className="image-block__texts">
          <h1 className="image-block__texts__title">
            Des sites web sur mesure, <br></br>des textes qui captivent.
          </h1>
          <div className="horizontal-line"></div>
          <p className="image-block__texts__paragraph">
            Création et refonte de sites web <br></br> Rédaction et correction
            de contenus
          </p>
        </div>
      )}
    </div>
  );
}

export default ImageBlock;
