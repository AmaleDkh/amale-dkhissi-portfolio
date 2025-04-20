// Style
import "./Reviews.scss";

// Icon
// import { Star } from "lucide-react";

// Data
import reviewsList from "../../assets/data/reviewsList.json";

function Reviews({ marginVersion }) {
  return (
    <section className={`reviews-section ${marginVersion}`}>
      <h2 className="reviews-section__title">Une confiance partagée</h2>
      <div className="reviews-section__grid">
        {reviewsList.map((review, index) => (
          <div key={index} className="review-card">
            {/* <div className="review-card__stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="review-card__star" />
                ))}
              </div> */}
            <p className="review-card__content">"{review.review}"</p>
            <div className="review-card__author">
              <p className="review-card__author__name">{review.name}</p>
              <p className="review-card__author__role">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
