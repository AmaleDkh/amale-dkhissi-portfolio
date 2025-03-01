// Style
import "./Reviews.scss";

// Data
import reviewsList from "../../assets/data/reviewsList.json";

function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-section__content">
        <h2 className="reviews-section__content__title">
          Une confiance partagée
        </h2>
      </div>

      {reviewsList.map((reviewItem, index) => (
        <div key={index} className="reviews-section__block">
          <h3 className="reviews-section__block__name">{reviewItem.name}</h3>
          <div className="reviews-section__block__review">
            "{reviewItem.review}"
          </div>
        </div>
      ))}
    </section>
  );
}

export default Reviews;
