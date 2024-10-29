// Style
import "./SocialMediaAccountsSection.scss";

// Component
import SocialMedia from "../SocialMedia/SocialMedia";

function SocialMediaAccounts() {
  return (
    <section className="social-media-accounts">
      <div className="social-media-accounts__title">
        Et si nous faisions connaissance ?
      </div>
      <SocialMedia version="light" />
    </section>
  );
}

export default SocialMediaAccounts;
