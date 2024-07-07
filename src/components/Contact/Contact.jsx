// React element
import { useForm } from "react-hook-form";

// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./Contact.scss";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div id="contact" className="contact">
      <SectionTitle title="Contact" />
      <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
        <div className="contact__form__container">
          <label htmlFor="firstName">Prénom :</label>
          <input
            id="firstName"
            className="contact__form__container__input-information"
            {...register("firstName", {
              required: "Le prénom est requis",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Le prénom doit contenir uniquement des lettres",
              },
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div className="contact__form__container">
          <label htmlFor="lastName">Nom :</label>
          <input
            id="lastName"
            className="contact__form__container__input-information"
            {...register("lastName", {
              required: "Le nom est requis",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Le nom doit contenir uniquement des lettres",
              },
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div className="contact__form__container">
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            id="email"
            type="email"
            className="contact__form__container__input-information"
            {...register("email", {
              required: "L'adresse e-mail est requise",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Adresse e-mail invalide",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="contact__form__container">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            className="contact__form__container__input-message"
            {...register("message", {
              required: "Le message est requis",
              maxLength: {
                value: 500,
                message: "Le message ne doit pas dépasser 500 caractères",
              },
            })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <input
          type="submit"
          className="contact__form__container__input-submit"
        />
      </form>
    </div>
  );
}

export default Contact;
