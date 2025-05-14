// Style
import "./ImageAndTextBlock.scss";

function ImageAndTextBlock({
  sectionTitle,
  text,
  image,
  alt,
  reverseVersion,
  marginVersion,
}) {
  return (
    <section className={`image-and-text-block ${marginVersion}`}>
      <div className={`image-and-text-block__grid ${reverseVersion}`}>
        <div className="image-and-text-block__content animate-fade-in">
          <div>
            <h2 className="image-and-text-block__title">{sectionTitle}</h2>

            <p
              className="image-and-text-block__description"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>

        <img src={image} alt={alt} className="image-and-text-block__image" />
      </div>
    </section>
  );
}

export default ImageAndTextBlock;
