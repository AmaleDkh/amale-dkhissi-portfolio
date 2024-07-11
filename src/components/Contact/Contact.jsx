// React element
import { useState } from "react";

// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./../Contact/Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="contact">
      <SectionTitle title="Contact" />
      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__form__container">
          <label htmlFor="firstName">Prénom :</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="contact__form__container__input-information"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <div className="contact__form__container">
          <label htmlFor="lastName">Nom :</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="contact__form__container__input-information"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Entrez votre nom"
            required
          />
        </div>
        <div className="contact__form__container">
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            id="email"
            name="email"
            type="email"
            className="contact__form__container__input-information"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Entrez votre adresse e-mail"
            required
          />
        </div>
        <div className="contact__form__container">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            className="contact__form__container__input-message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Entrez votre message"
            required
          />
        </div>
        <input
          type="submit"
          className="contact__form__container__input-submit"
          value="Envoyer"
        />
      </form>
    </section>
  );
}

export default Contact;
