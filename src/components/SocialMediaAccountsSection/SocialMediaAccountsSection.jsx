// Components
import SocialMedia from "../SocialMedia/SocialMedia";
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./SocialMediaAccountsSection.scss";

function SocialMediaAccounts({ contactVersion, pageVersion }) {
  return (
    <section className={`social-media-accounts  ${pageVersion}`}>
      <div className="social-media-accounts__text">
        <SectionTitle
          title="FAISONS CONNAISSANCE."
          className=""
          margin="large-margin"
        />

        <p className="social-media-accounts__question">
          Vous avez des idées ou questions ?
        </p>

        <p className={`social-media-accounts__answer ${contactVersion}`}>
          Je serais ravie de discuter avec vous.
        </p>
      </div>

      <SocialMedia version="light" />
    </section>
  );
}

export default SocialMediaAccounts;
