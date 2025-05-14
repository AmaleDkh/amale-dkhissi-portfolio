// React elements
import { Mail, Phone, MapPin } from "lucide-react";

// Components
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";

// Style
import "./Contact.scss";

// Image
import Me20 from "../../assets/images/Me20.webp";

function Contact() {
  return (
    <Layout>
      <div className="contact">
        <PageTitle
          title="Restons en contact"
          paragraph="Vous avez un projet en tête ? Discutons-en."
        />

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__card">
              <div className="contact__card-icon contact__card-icon--email">
                <Mail size={20} />
              </div>
              <div className="contact__card-content">
                <div className="contact__card-label">E-mail</div>
                <a
                  href="mailto:hello@nordicadesign.com"
                  className="contact__card-value"
                >
                  amdkhissi@gmail.com
                </a>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon contact__card-icon--phone">
                <Phone size={20} />
              </div>
              <div className="contact__card-content">
                <div className="contact__card-label">Téléphone</div>
                <a href="tel:+1234567890" className="contact__card-value">
                  06 02 39 08 13
                </a>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon contact__card-icon--location">
                <MapPin size={20} />
              </div>
              <div className="contact__card-content">
                <div className="contact__card-label">Localisation</div>
                <span className="contact__card-value">Paris, France</span>
              </div>
            </div>

            {/* <div className="contact__office-hours">
              <h3 className="contact__office-title">Horaires d’ouverture</h3>
              <div className="contact__office-grid">
                <div className="contact__office-block">
                  <div className="contact__office-day">Lundi - Vendredi</div>
                  <div className="contact__office-time">8:30 - 18h</div>
                </div>
                <div className="contact__office-block">
                  <div className="contact__office-day">Samedi - Dimanche</div>
                  <div className="contact__office-time">Fermé</div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="contact__image-container">
            <img
              src={Me20}
              alt="Notre espace de travail"
              className="contact__image"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
